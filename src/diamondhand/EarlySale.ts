import { Provider } from '@ethersproject/abstract-provider';
import { Signer } from '@ethersproject/abstract-signer';
import { BigNumber } from '@ethersproject/bignumber';
import { ContractWrapper } from './ContractWrapper';

export class EarlySale extends ContractWrapper {
  constructor(abi: any[], address: string, signer: Signer | Provider) {
    super(abi, address, signer);
  }


  async sendmeCuffies( amount: BigNumber) {
    return await this.contract.safeCall.sendmeCuffies(BigNumber.from(amount));
  }

  async VestmyCuffies( amount: BigNumber) {
    return await this.contract.safeCall.VestmyCuffies(BigNumber.from(amount));
  }



  async getVested(account: string): Promise<BigNumber> {
    return await this.contract.vested_Amount(account);
  }

  async getBalance() {
    return await this.contract.balance();
  }

  async claimVestedAmount() {
    return await this.contract.claimVestedAmount();
  }




}
