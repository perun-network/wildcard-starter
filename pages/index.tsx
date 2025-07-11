// pages/index.tsx
import React, { ReactNode, useState } from "react";
import { ethers } from "ethers";
//TODO Import Wildcard SDK

const WS_ENDPOINT = "wss://op1.erdstall.dev/ws";
const SUBSTRATE_PARACHAIN = "wss://zombienet.perun.network:9999"
const TASKS = [
  {
    title: "Initialize SDK, Connect Metamask & Subscribe",
    desc: "Get familiar with the SDK, how to initialize it, how to connect your first chain (recommendation: Ethereum/Sepolia) and listen to Erdstall events.",
  },
  {
    title: "Connect Substrate Wallet (2nd chain)",
    desc: "For the next tasks you will need a wallet for the second chain (substrate)",
  },
  {
    title: "Mint 2 NFTs on Substrate",
    desc: <>
      For tasks 4 and 5 you'll need an NFT on the substrate chain.
      Please create two NFTs, owned by the substrate wallet from task 2.
      See <a href="substrate-mint-instructions" target="_blank">Instructions</a>.
    </>,
  },
  {
    title: "Deposit 1st NFT to Wildcard",
    desc: <>Please use the Wildcard SDK to deposit one NFT from the last step into the Wildcard L2, then continue with the next task <a href="" target="_blank">in a new tab</a> while waiting.</>,
  },
  {
    title: "Bridge 2nd NFT to Sepolia",
    desc: <>Please use the Wildcard SDK to bridge the second NFT to Sepolia, then continue with the next task <a href="" target="_blank">in a new tab</a> while waiting.</>,
  },
  {
    title: "Mint 3rd NFT via L2",
    desc: "In this task you'll use the L2 functionality of Wildcard to mint NFTs. This can be faster and cheaper than the using the connected blockchains, as we don't need to wait for finality."
  },
  {
    title: "Withdraw NFT",
    desc: "In the last step we want you to withdraw the NFT you minted in the Wildcard L2 to one of the connected chains."
  },
];

export default function SDKTutorialApp() {
  const [status, setStatusInner] = useState<ReactNode>("Idle");
  const [step, setStep] = useState(0);
  const [executing, setExecuting] = useState(false);

  const setStatus = (msg: ReactNode) => {
    setStatusInner(<>Task {step + 1}: {msg}</>)
  }

  const handlers: Record<string, () => Promise<void>> = {
    // TASK 1
    initSdk: async () => {
      setStatus("TODO: initialize SDK & subscribe");
      // TODO: instantiate WritingApp/Client, call initialize(), subscribe()
    },

    // TASK 2
    connectSubstrate: async () => {
      setStatus("TODO: connect Substrate wallet");
      // TODO: enable Polkadot extension and select account
    },

    // TASK 3
    mintSubstrateNFTs: async () => {
      // Nothing to implement here, please use Polkadot.js to mint the NFT (not implemented in this SDK).
      // If you want and are familiar with the substrate SDK you can also implement the minting here.
      setStatus("Assuming the NFT was minted via Polkadot.js");
    },

    // TASK 4
    depositNFT: async () => {
      // This step takes a while (if implemented correctly)
      setStatus(<>Invoked - please continue with task 5 <a href="" target="_blank">in a new tab</a></>);

      setStatus("TODO: deposit first NFT");
      // TODO: call sdk.deposit()
    },

    // TASK 5
    bridgeNFT: async () => {
      // This step takes a while (if implemented correctly)
      setStatus(<>Invoked - please continue with task 6 <a href="" target="_blank">in a new tab</a></>);

      setStatus("TODO: Bridge second NFT");
      // TODO: call sdk.bridge()
    },

    // TASK 6
    mintL2NFT: async () => {
      setStatus("TODO: mint NFT via L2");
      // TODO: call sdk.mint() with chain='erdstall'
    },

    // TASK 7
    withdrawNFT: async () => {
      setStatus("TODO: withdraw NFT to Sepolia");
      // TODO: call sdk.withdraw()
    },
  };

  // derive key for current step
  const taskKeys = Object.keys(handlers) as Array<keyof typeof handlers>;
  const executeTask = () => {
    setStatus("Invoked");
    setExecuting(true);
    handlers[taskKeys[step]]();
    setExecuting(false);
  }

  return (
    <div style={{ maxWidth: 700, margin: "2rem auto", fontFamily: "sans-serif" }}>
      <h1>SDK Integration Starter – Pilot Tasks</h1>
      <p>
        This project will guide you through setting up and using the Wildcard SDK.
        Please implement the corresponding handler function in <b>pages/index.tsx</b> for each task.
      </p>
      <table>
        <tbody>
          <tr>
            <td><b>Wildcard Endpoint</b></td>
            <td>{WS_ENDPOINT}</td>
          </tr>
          <tr>
            <td><b>Substrate Explorer</b></td>
            <td><a href="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fzombienet.perun.network%3A9999#/explorer">Polkadot.js</a></td>
          </tr>
          <tr>
            <td><b>Sepolia Explorer</b></td>
            <td><a href="https://sepolia.etherscan.io/">Etherscan</a></td>
          </tr>
        </tbody>
      </table>

      <h2>Step {step + 1}: {TASKS[step].title}</h2>
      <p style={{ height: "5rem" }}>
        {TASKS[step].desc && TASKS[step].desc}
      </p>

      <button onClick={executeTask}>
        Execute Task
      </button>

      <div style={{ marginTop: 20 }}>
        <button disabled={step === 0} onClick={() => setStep(s => s - 1)}>
          Previous
        </button>
        <button
          disabled={step === TASKS.length - 1}
          onClick={() => setStep(s => s + 1)}
        >
          Next
        </button>
      </div>

      <p style={{ marginTop: 20 }}>
        <strong>Status:</strong> {status} {executing && "(executing ...)"}
      </p>
    </div >
  );
}
