pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Strings.sol";


contract FbPumpkins is ERC721Enumerable, Ownable, AccessControl {
    using Strings for uint256;
    mapping(uint256 => address) private _owners;


    bytes32 public constant WHITE_LIST_ROLE = keccak256("WHITE_LIST_ROLE");
    uint256 public constant PRICE = 0.001 ether;
    uint256 public constant TOTAL_NUMBER_OF_TOKENS = 200;

    uint256 public giveaway_reserved = 5;
    uint256 public presale_reserved = 15;
    address public marketing_wallet;

    mapping(address => bool) private _presale_minters;

    bool public paused_mint = true;
    bool public paused_presale = true;
    string private _baseTokenURI = "";

    // withdraw addresses
    address robkelly = 0xDfa857c95608000B46315cdf54Fe1efcF842ab89;

    modifier whenMintNotPaused() {
        require(!paused_mint, "FbPumpkins: mint is paused");
        _;
    }

    modifier whenPreMintNotPaused() {
        require(!paused_presale, "FbPumpkins: pre mint is paused");
        _;
    }

    modifier preMintAllowedAccount(address account) {
        require(is_presale_allowed(account), "FbPumpkins: account is not allowed to pre mint");
        _;
    }

    event MintPaused(address account);
    event MintUnpaused(address account);
    event PreMintPaused(address account);
    event PreMintUnpaused(address account);
    event setPreMintRole(address account);
    event redeemedPreMint(address account);

    constructor(
        string memory _name,
        string memory _symbol,
        address _marketing_wallet
    )
        ERC721(_name, _symbol)
    {
        marketing_wallet = _marketing_wallet;

        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _setupRole(DEFAULT_ADMIN_ROLE, robkelly);

        _setupRole(WHITE_LIST_ROLE, msg.sender);
        _setupRole(WHITE_LIST_ROLE, robkelly);
    }

    fallback() external payable { }
    receive() external payable { }

    function mint(uint256 num) public payable whenMintNotPaused(){
        uint256 supply = totalSupply();
        uint256 tokenCount = balanceOf(msg.sender);
        require( tokenCount + num <= 10,                                           "FbPumpkins: You can mint a maximum of 13 NFTs per wallet" );
        require( supply + num <= TOTAL_NUMBER_OF_TOKENS - giveaway_reserved,       "FbPumpkins: Exceeds maximum supply" );
        require( msg.value >= PRICE * num,                                         "FbPumpkins: Ether sent is less than PRICE * num" );

        for(uint256 i; i < num; i++){
            _safeMint( msg.sender, supply + i );
        }
    }

    function presale_mint() public payable whenPreMintNotPaused() preMintAllowedAccount(msg.sender){
        require( presale_reserved > 0,         "FbPumpkins: Exceeds pre mint reserved supply" );
        require( msg.value >= PRICE,            "FbPumpkins: Ether sent is less than PRICE" );
        _presale_minters[msg.sender] = false;
        presale_reserved -= 1;
        uint256 supply = totalSupply();
        _safeMint( msg.sender, supply);
        emit redeemedPreMint(msg.sender);
    }

    function giveAway(uint8 n) external onlyRole(WHITE_LIST_ROLE) {
        require(giveaway_reserved >= n, "FbPumpkins: Exceeds giveaway reserved supply" );
        giveaway_reserved -= n;
        uint256 supply = totalSupply();
        for(uint256 i; i < n; i++){
          _safeMint( msg.sender, supply + i);
        }
    }

    function pauseMint() public onlyRole(WHITE_LIST_ROLE) {
        paused_mint = true;
        emit MintPaused(msg.sender);
    }

    function unpauseMint() public onlyRole(WHITE_LIST_ROLE) {
        paused_mint = false;
        emit MintUnpaused(msg.sender);
    }

    function pausePreMint() public onlyRole(WHITE_LIST_ROLE) {
        paused_presale = true;
        emit PreMintPaused(msg.sender);
    }

    function unpausePreMint() public onlyRole(WHITE_LIST_ROLE) {
        paused_presale = false;
        emit PreMintUnpaused(msg.sender);
    }

    function setPreMintRoleBatch(address[] calldata _addresses) external onlyRole(WHITE_LIST_ROLE) {
        for(uint256 i; i < _addresses.length; i++){
            _presale_minters[_addresses[i]] = true;
            emit setPreMintRole(_addresses[i]);
        }
    }

    function setBaseURI(string memory baseURI) public onlyRole(WHITE_LIST_ROLE) {
        _baseTokenURI = baseURI;
    }

    function withdrawAmountToWallet(uint256 amount) public onlyRole(WHITE_LIST_ROLE) {
        uint256 _balance = address(this).balance ;
        require(_balance > 0, "FbPumpkins: withdraw amount call without balance");
        require(_balance-amount >= 0, "FbPumpkins: withdraw amount call with more than the balance");
        require(payable(marketing_wallet).send(amount), "FbPumpkins: FAILED withdraw amount call");
    }

    function withdrawAllToWallet() public onlyRole(WHITE_LIST_ROLE) {
        uint256 _balance = address(this).balance ;
        require(_balance > 0, "FbPumpkins: withdraw all call without balance");
        require(payable(marketing_wallet).send(_balance), "FbPumpkins: FAILED withdraw all call");
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId), "FbPumpkins: URI query for nonexistent token");

        string memory baseURI = getBaseURI();
        string memory json = ".json";
        return bytes(baseURI).length > 0
            ? string(abi.encodePacked(baseURI, tokenId.toString(), json))
            : '';
    }

    function walletOfOwner(address _owner) public view returns(uint256[] memory) {
        uint256 tokenCount = balanceOf(_owner);

        uint256[] memory tokensId = new uint256[](tokenCount);
        for(uint256 i; i < tokenCount; i++){
            tokensId[i] = tokenOfOwnerByIndex(_owner, i);
        }
        return tokensId;
    }

    function supportsInterface(bytes4 interfaceId) public view override(ERC721Enumerable, AccessControl) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    function is_presale_allowed(address account) public view  returns (bool) {
        return _presale_minters[account];
    }

    function getBaseURI() public view returns (string memory) {
        return _baseTokenURI;
    }
}
