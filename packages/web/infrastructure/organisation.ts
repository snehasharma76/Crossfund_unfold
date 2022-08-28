import web3 from "./web3";
import type { AbiItem } from "web3-utils";
import Organisations from "@public/ABI/Organisations.json";
import { chainID } from "common/constants";

const instance = new web3.eth.Contract(
  Organisations.abi as AbiItem[],
  "0x48c7b8ecb2E0E3DF756C218A94c8FDb24e49B693"
);

export default instance;
