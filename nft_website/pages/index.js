import 'tailwindcss/tailwind.css'
import { useState } from 'react';
import { ethers } from "ethers";
import { useWeb3React } from "@web3-react/core"
import { getWeb3ReactContext } from '@web3-react/core'
import { injected } from "../components/wallet/connectors"
import { Web3Provider } from '@ethersproject/providers'
import IncrementButton from '../components/incrementButton';

export default function Home() {
  const contractABI = require("./contract-abi.json");
  const contractAddress = "0x016Db342a3D19e5fd1F5Ffc150aA047621C1dCC0";

  const { active, account, activate, deactivate, library } = useWeb3React();

  const [numPumpkins, setNumPumpkins] = useState(0);

  async function mint() {
      const signer = library.getSigner();
      const FbPumpkinsContract = new ethers.Contract(contractAddress, contractABI.abi, signer);
      console.log('contract', FbPumpkinsContract);
      console.log(FbPumpkinsContract.mint(numPumpkins, {value: ethers.utils.parseEther('0.001').mul(numPumpkins)}));
  }

  async function connect() {
    try {
      await activate(injected)
    } catch (ex) {
      console.log(ex)
    }
  }

  async function disconnect() {
    try {
      deactivate()
    } catch (ex) {
      console.log(ex)
    }
  }

  // <button onClick={disconnect} className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800">Disconnect</button>
  return (
    <div className="flex flex-col items-center justify-center">
      <button onClick={connect} className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800">Connect to MetaMask</button>
      {active ? <span>Connected with <b>{account}</b></span> : <span>Not connected</span>}
      {active ? (
        <div className="flex flex-col items-center justify-center">
          <button onClick={mint} className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800"> MINT {numPumpkins} PUMPKINS </button>
          <IncrementButton numPumpkins={numPumpkins} setNumPumpkins={setNumPumpkins} />
      </div>) : <div />}
    </div>
  )
}
