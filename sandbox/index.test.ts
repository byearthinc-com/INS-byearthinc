// process.env.HARDHAT_NETWORK = 'sandbox';

import { Sandbox } from '.';
import { expect } from 'chai';
import { ethers, network } from 'hardhat';
// import UNSNetworkConfig from '../uns-config.json';
const { BigNumber } = ethers;
import {readNetworkConfig} from '../src/config';
import { MintingManager__factory, UNSRegistry__factory } from '../typechain-types/factories/contracts';
import { MintingManager, UNSRegistry } from '../typechain-types/contracts';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';

describe('Sandbox', async () => {
  const domainPrefix = 'sandbox';
  const walletRoot = BigNumber.from('0x1e3f482b3363eb4710dae2cb2183128e272eafbe137f686851c1caea32502230');

  let unsRegistry: UNSRegistry, mintingManager: MintingManager;
  let signers: SignerWithAddress[], owner: SignerWithAddress, minter: SignerWithAddress;

  let sandbox: Sandbox;

  before(async () => {
    sandbox = await Sandbox.start({ verbose: true });

    signers = await ethers.getSigners();
    [owner, minter] = signers;

    const {contracts} = readNetworkConfig().networks[network.config.chainId!];

    unsRegistry = new UNSRegistry__factory(owner).attach(contracts.UNSRegistry.address);
    mintingManager = new MintingManager__factory(owner).attach(contracts.MintingManager.address);
  });

  beforeEach(async () => {
    await sandbox.reset();
  });

  after(async () => {
    await sandbox.stop();
  });

  it('should mint a token', async () => {
    const _domainName = `${domainPrefix}_wallet_0`;

    const tx = await mintingManager.connect(minter)
      .mintSLD(owner.address, walletRoot, _domainName);
    await tx.wait();

    const _walletTokenId = await unsRegistry.childIdOf(walletRoot, _domainName);
    expect(await unsRegistry.ownerOf(_walletTokenId)).to.be.eq(owner.address);
  });

  it('should mint same token as prev test', async () => {
    const _domainName = `${domainPrefix}_wallet_0`;

    const tx = await mintingManager.connect(minter)
      .mintSLD(owner.address, walletRoot, _domainName);
    await tx.wait();

    const _walletTokenId = await unsRegistry.childIdOf(walletRoot, _domainName);
    expect(await unsRegistry.ownerOf(_walletTokenId)).to.be.eq(owner.address);
  });
});
