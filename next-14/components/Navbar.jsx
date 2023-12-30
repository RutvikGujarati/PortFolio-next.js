'use client';

import { Socials } from "@/constants";
import Image from "next/image";
import React, { use } from "react";
import Web3 from "web3";
import { useState } from "react";

const Navbar = () => {

  const [connected, setConnected] = useState(true);
  const [account, setAccount] = useState("");

  const wallet = async ({ saveState }) => {
    try {
      const web3 = new Web3(window.ethereum);
      await window.ethereum.request({ method: "eth_requestAccounts" });

      const accounts = await window.ethereum.request({ method: 'eth_accounts' });
      const userAccount = accounts[0];

      setConnected(false);
      setAccount(userAccount);
      

      const chainId = await window.ethereum.request({ method: 'eth_chainId' });

      if (chainId !== '0xaa36a7') {
        alert("Please connect with Sepolia test network");
      } else {
        setWalletAddress(userAccount);
      }

      saveState({ web3: web3, contract: contract, account: userAccount });
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  return (
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
      <div className="flex flex-row gap-3 items-center">
        <div className="relative">
          <Image
            src="/horseLogo.jpg"
            alt="logo"
            width={40}
            height={40}
            className="w-full h-full object-contain rounded-full"
          />
        </div>
        <h1 className="text-white text-[25px] font-semibold">
          Rutvik{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            {" "}
             Gujarati{" "}
          </span>
        </h1>
      </div>

      <div className="flex flex-row gap-5 mb-2">
      {Socials.map((social) => (
  <a key={social.name} href={social.URL} target="_blank" rel="noopener noreferrer">
    <img src={social.src} alt={social.name} width={28} height={28} />
  </a>
))}

        <button className="button" onClick={wallet} disabled={!connected}>
        {connected ? "Connect MetaMask" : `Connected: ${account}` }
      </button>
      </div>
    </div>
  );
};

export default Navbar;