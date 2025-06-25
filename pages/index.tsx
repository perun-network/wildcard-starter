// pages/index.tsx
import React, { useState } from "react";
import { ethers } from "ethers";
//TODO Import Wildcard SDK

const WS_ENDPOINT = "wss://op1.erdstall.dev/ws";
const TASKS = [
  "Initialize SDK, Connect Metamask & Subscribe",
  "Connect Substrate Wallet",
  "Mint 2 NFTs on Substrate",
  "Deposit 1st NFT to Erdstall",
  "Bridge 2nd NFT to Sepolia",
  "Mint 3rd NFT via L2",
  "Withdraw NFT to Sepolia",
];

export default function SDKTutorialApp() {
  const [status, setStatus] = useState("Idle");
  const [step, setStep]     = useState(0);

  const handlers: Record<string, () => Promise<void>> = {
    // TASK 1
    initSdk: async () => {
      setStatus("➡ TASK 1 invoked (TODO: initialize SDK & subscribe)");
      // TODO: instantiate WritingApp/Client, call initialize(), subscribe()
    },

    // TASK 2
    connectSubstrate: async () => {
      setStatus("➡ TASK 3 invoked (TODO: connect Substrate wallet)");
      // TODO: enable Polkadot extension and select account
    },

    // TASK 3
    mintSubstrateNFTs: async () => {
      setStatus("➡ TASK 4 invoked (TODO: mint 2 NFTs on Substrate)");
      // TODO: call sdk.mint() twice with chain='substrate'
    },

    // TASK 4
    depositNFT: async () => {
      setStatus("➡ TASK 5 invoked (TODO: deposit NFT to Erdstall)");
      // TODO: call sdk.deposit()
    },

    // TASK 5
    bridgeNFT: async () => {
      setStatus("➡ TASK 6 invoked (TODO: bridge NFT to Sepolia)");
      // TODO: call sdk.bridge()
    },

    // TASK 6
    mintL2NFT: async () => {
      setStatus("➡ TASK 7 invoked (TODO: mint NFT via L2)");
      // TODO: call sdk.mint() with chain='erdstall'
    },

    // TASK 7
    withdrawNFT: async () => {
      setStatus("➡ TASK 8 invoked (TODO: withdraw NFT to Sepolia)");
      // TODO: call sdk.withdraw()
    },
  };

  // derive key for current step
  const taskKeys = Object.keys(handlers) as Array<keyof typeof handlers>;
  const currentKey = taskKeys[step];

  return (
    <div style={{ maxWidth: 600, margin: "2rem auto", fontFamily: "sans-serif" }}>
      <h1>SDK Integration Starter – Pilot Tasks</h1>
      <p><strong>Endpoint:</strong> {WS_ENDPOINT}</p>

      <h2>Step {step + 1}: {TASKS[step]}</h2>
      <button onClick={() => handlers[currentKey]()}>
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
        <strong>Status:</strong> {status}
      </p>
    </div>
  );
}
