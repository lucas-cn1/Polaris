import { defineChain } from "viem";
import {
  arbitrum,
  avalanche,
  base,
  bsc,
  celo,
  classic,
  confluxESpace,
  eos,
  fantom,
  filecoin,
  gnosis,
  linea,
  mainnet,
  okc,
  opBNB,
  polygon,
  zkSync} from "viem/chains";

export const shibarium = defineChain({
  id: 109,
  name: "Shibarium",
  network: "shibarium",
  nativeCurrency: {
    decimals: 18,
    name: "BONE",
    symbol: "BONE",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.shibrpc.com"],
    },
    public: {
      http: ["https://rpc.shibrpc.com"],
    },
  },
  blockExplorers: {
    default: { name: "Explorer", url: "https://shibariumscan.io" },
  },
});

export const inscriptionChains = {
  eth: mainnet,
  bsc,
  polygon,
  avalanche,
  classic,
  base,
  arbitrum,
  zkSync,
  linea,
  okc,
  fantom,
  opBNB,
  filecoin,
  celo,
  confluxESpace,
  gnosis,
  shibarium,
  eos
};

export type ChainKey = keyof typeof inscriptionChains;
