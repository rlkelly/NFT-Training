const { expect } = require('chai');
const { BN, expectEvent, expectRevert } = require('@openzeppelin/test-helpers');

const FbPumpkins = artifacts.require('FbPumpkins');

contract('FbPumpkins', function ([ owner, marketingWallet, alice, bob, charlie ]) {
  beforeEach(async function () {
    this.FbPumpkins = await FbPumpkins.new('FbPumpkins', 'FBA', marketingWallet, { from: owner });
  });

  it('attempt premint', async function () {
    const depositAmount = web3.utils.toBN(web3.utils.toWei('0.4', 'ether'));
    this.FbPumpkins.setPreMintRoleBatch([alice, bob], {from: owner});
    await expectRevert(
      this.FbPumpkins.presale_mint({from: alice, value: depositAmount, gas: 3000000}),
      'pre mint is paused',
    );
    const receipt = await this.FbPumpkins.unpausePreMint({from: owner});
    expectEvent(receipt, 'PreMintUnpaused', { account: owner });
    await this.FbPumpkins.presale_mint({from: alice, value: depositAmount, gas: 3000000}),
    expect(await this.FbPumpkins.balanceOf(alice)).to.be.bignumber.equal(new BN('1'));
    await expectRevert(
      this.FbPumpkins.presale_mint({ from: charlie, value: depositAmount, gas: 3000000}),
      'FbPumpkins: account is not allowed to pre mint',
    );
  });
});
