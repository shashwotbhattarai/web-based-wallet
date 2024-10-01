"use client";

import { generateMnemonic } from "bip39";
import { useState } from "react";

export const Wallet = () => {
  const [mnemonic, setMnemonic] = useState("");

  const handleGenerateMnemonic = async () => {
    const newMnemonic = generateMnemonic();
    setMnemonic(newMnemonic);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-5 bg-gray-100">
      <button
        onClick={handleGenerateMnemonic}
        className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-500 focus:outline-none"
      >
        Create Seed Phrase
      </button>
      <div className="mt-5 w-full max-w-lg">
        <input
          type="text"
          value={mnemonic}
          readOnly
          className="w-full p-4 text-lg text-black border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Your seed phrase will appear here"
        />
      </div>
    </div>
  );
};
