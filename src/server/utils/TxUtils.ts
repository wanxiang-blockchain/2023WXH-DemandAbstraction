import { ethers } from "ethers";

export class TxUtils {
  public static async waitForTransactionUntilOnChain(ethersProvider: ethers.providers.JsonRpcProvider, txHash: string) {
    let receipt = await ethersProvider.getTransactionReceipt(txHash);

    while (!receipt) {
      await ethersProvider.waitForTransaction(txHash);
      receipt = await ethersProvider.getTransactionReceipt(txHash);
    }
  }
}

export const ab2str = (buffer: ArrayBuffer) => {
  const decoder = new TextDecoder('utf-8');
  return decoder.decode(buffer);
}
export const str2ab = (str: string) => {
  const encoder = new TextEncoder();
  return encoder.encode(str).buffer;
}