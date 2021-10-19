import { Provider } from '@ethersproject/abstract-provider';
import { Signer } from '@ethersproject/abstract-signer';
import { BigNumber, BigNumberish } from '@ethersproject/bignumber';
import { Address } from 'cluster';
import fromUnixTime from 'date-fns/fromUnixTime';
import { ContractWrapper } from './ContractWrapper';
import { DiamondHand } from './DiamondHand';

export type NftInfo = {
  info: {
    uri: string;
    description: string;
    mintable: boolean;
    purchaseTokenID: number;
    purchaseTokenAmount: BigNumber;
    mintCap: number;
    numberMinted: number;
    admin: Address;
  };
};
export class Nft extends ContractWrapper {
  constructor(
    abi: any[],
    address: string,
    signer: Signer | Provider,
  ) {
    super(abi, address, signer);
  }

  async getNftInfo(NftId: number) {
    const nftinfo = await this.contract.getNftData(NftId);
      

    if (!nftinfo) {
      return {} as NftInfo;
    }

    

    return {
      info: {
        uri: nftinfo[0],
        description: nftinfo[1],
        mintable: nftinfo[2],
        purchaseTokenID: nftinfo[3].toNumber(),
        purchaseTokenAmount: nftinfo[4],
        mintCap: nftinfo[5].toNumber(),
        numberMinted: nftinfo[6].toNumber(),
        admin: nftinfo[7]
        
      }
    } as NftInfo;
  }



  
  async buynft(Id: number) {
    return await this.contract.purchaseNft(Id);
  }



  
}

export type NFTinfo = {
  
    uri: string;
    description:string;
    mintable: boolean;
    purchaseTokenID: BigNumber;
    purchaseTokenAmount: BigNumber;
    mintCap: BigNumber;
    numberMinted: BigNumber;
    admin: Address;
  
};


