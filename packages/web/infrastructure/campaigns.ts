import web3 from "./web3";
import type { AbiItem } from "web3-utils";
import Campaigns from "@public/ABI/Campaigns.json";
import { chainID } from "common/constants";

const instance = new web3.eth.Contract(
  Campaigns.abi as AbiItem[],
  "0x01848261906FCdE87215ed9CF5Bcf37AC607109d"
);

export default instance;
