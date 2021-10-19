import { Provider } from '@ethersproject/abstract-provider';
import { Signer } from '@ethersproject/abstract-signer';
import { BigNumber } from '@ethersproject/bignumber';
import { ContractWrapper } from './ContractWrapper';

export class MasterChef extends ContractWrapper {
  constructor(abi: any[], address: string, signer: Signer | Provider) {
    super(abi, address, signer);
  }


  async deposit(pId: number, amount: BigNumber) {
    return await this.contract.safeCall.deposit(BigNumber.from(pId),BigNumber.from(amount));
  }

  async widthraw(pId: number, amount: BigNumber) {
    return await this.contract.safeCall.withdraw(BigNumber.from(pId),BigNumber.from(amount));
  }

  async getBalance() {
    return await this.contract.balance();
  }

  async pendingRewards(pId: number, user: string) {
    return await this.contract.pendingCuffies(BigNumber.from(pId),user);
  }




}
