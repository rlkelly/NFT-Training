import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract FbPumpkinsGift is ERC721Enumerable, Ownable {
  IERC721 private FbPumpkins;

  // const ____f =                                         "/^\"
  // const ____b =                      "L L               /   \               L L"
  // const ____a =                   "__/|/|_             /  .  \             _|\|\__"
  // const ____v =                  "/_| [_[_\           /     .-\           /_]_] |_\"
  // const ___a_ =                 "/__\  __`-\_____    /    .    \    _____/-`__  /__\"
  // const ____t =                "/___] /=@>  _   {>  /-.         \  <}   _  <@=\ [___\"
  // const __a__ =               "/____/     /` `--/  /      .      \  \--` `\     \____\"
  // const ____r =              "/____/  \____/`-._> /               \ <_.-`\____/  \____\"
  // const ____s =             "/____/    /__/      /-._     .   _.-  \      \__\    \____\"
  // const ____g =            "/____/    /__/      /         .         \      \__\    \____\"
  // const ____i =           "|____/_  _/__/      /          .          \      \__\_  _\____|"
  // const ___f_ =           " \__/_ ``_|_/      /      -._  .        _.-\      \_|_`` _\___/"
  // const ___t_ =           "   /__`-`__\      <_         `-;        NBD_>      /__`-`__\"
  // const ___s_ =                 "`-`           `-._       ;       _.-`           `-`"

  mapping(uint256 => bool) private _is_minted;
  string public giftProvenanceHash;
  bool public saleIsActive = false;
  uint256 public collectionStartingIndex;
  uint256 public collectionStartingIndexBlock;
  uint256 public maxGifts = 5000;
  uint256 public mintedGifts = 0;
  uint256 public setBlockTimestamp;
  uint256 public revealTimestamp;
  string private baseURI;

  constructor(
    string memory name,
    string memory symbol,
    uint256 saleStart,
    address dependentContractAddress
  ) ERC721(name, symbol) {
    revealTimestamp = saleStart + (86400 * 7);
    setBlockTimestamp = saleStart + (86400 * 6);
    FbPumpkins = IERC721(dependentContractAddress);
  }

  function setRevealTimestamp(uint256 revealTimeStamp) public onlyOwner {
    revealTimestamp = revealTimeStamp;
  }

  function setStartingBlockTimestamp(uint256 startingBlockTimestamp) public onlyOwner {
    setBlockTimestamp = startingBlockTimestamp;
  }

  function setProvenanceHash(string memory provenanceHash) public onlyOwner {
    giftProvenanceHash = provenanceHash;
  }

  function isMinted(uint256 tokenId) external view returns (bool) {
    require(tokenId < maxGifts, "tokenId outside collection bounds");

    return _exists(tokenId);
  }

  function _baseURI() internal view override returns (string memory) {
    return baseURI;
  }

  function setBaseURI(string memory uri) public onlyOwner {
    baseURI = uri;
  }

  function trySetStartingIndexBlock() private {
    if (
      collectionStartingIndexBlock == 0 &&
      (totalSupply() == maxGifts || block.timestamp >= setBlockTimestamp)
    ) {
      collectionStartingIndexBlock = block.number;
    }
  }

  function mintGift(uint256 giftIndex, address giftReceiver) onlyOwner public {
    // https://bulksender.app/
    require(_is_minted[giftIndex] == false, "token is already minted");
    require(mintedGifts < maxGifts, "All gifts minted");
    require(FbPumpkins.ownerOf(giftIndex) == giftReceiver, "All mints must go to the current owner of an FbAvatar");

    _safeMint(giftReceiver, giftIndex);
    _is_minted[giftIndex] = true;
    trySetStartingIndexBlock();
  }

  function setStartingIndex() public {
    require(collectionStartingIndex == 0, "Starting index is already set");
    require(collectionStartingIndexBlock != 0, "Starting index block must be set");
    require(
      block.timestamp >= revealTimestamp || totalSupply() == maxGifts,
      "Must be on or after the reveal time to set starting index"
    );

    collectionStartingIndex = uint256(blockhash(collectionStartingIndexBlock)) % maxGifts;

    // Just a sanity case in the worst case if this function is called late (EVM only stores last 256 block hashes)
    if ((block.number - collectionStartingIndexBlock) > 255) {
      collectionStartingIndex = uint256(blockhash(block.number - 1)) % maxGifts;
    }

    // Prevent default sequence
    if (collectionStartingIndex == 0) {
      collectionStartingIndex = collectionStartingIndex + 1;
    }
  }
}
