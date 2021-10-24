import { Configuration } from './diamondhand/config';
import deploymentMainnet from './diamondhand/deployments/deployments.mainnet.json';

const configurations: { [env: string]: Configuration } = {
  mainnet: {
    chainId: 56,
    etherscanUrl: 'https://bscscan.com',
    defaultProvider: 'https://bsc-dataseed.binance.org/',
    deployments: deploymentMainnet,
    pollingInterval: 5 * 1000,
    refreshInterval: 10 * 1000,
    defaultSlippageTolerance: 0.01,
    gasLimitMultiplier: 1.1,
    maxBalanceRefresh: 1000000,
    abis: {
      Lottery: deploymentMainnet.Lottery.abi,
      Ticket: deploymentMainnet.Ticket.abi,
      TaxService: deploymentMainnet.TaxService.abi,
      MasterChef: deploymentMainnet.MasterChef.abi,
      EarlySale: deploymentMainnet.EarlySale.abi,
      Nft: deploymentMainnet.Nft.abi,

    },
    addresses: {
      Lottery: deploymentMainnet.Lottery.address,
      Ticket: deploymentMainnet.Ticket.address,
      MasterChef: deploymentMainnet.MasterChef.address,
      EarlySale: deploymentMainnet.EarlySale.address,
      Nft: deploymentMainnet.Nft.address,
      Cuffies: '0xa5B73705345dF89e711C0f5866868Dcdd5669C09',
      Busd: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
      Link: '0xb0897686c545045aFc77CF20eC7A532E3120E0F1',
      Multicall: '0x41263cba59eb80dc200f3e2544eda4ed6a90e76c',
      TaxService: deploymentMainnet.TaxService.address,
      RandomNumberGenerator: deploymentMainnet.RandomNumberGenerator.address,
      PrizeReservePool: deploymentMainnet.PrizeReservePool.address,

    },


    admins: [
      '0x35f4c151B3F7390C11dcf0A9a544B95C00093AB4'

    ],
    collateralTokens: {
      Cuffies: ['0xa5B73705345dF89e711C0f5866868Dcdd5669C09', 18],
    },
  },
};

export const ExternalLinks = {
  twitter: 'https://twitter.com/cuffiesofficial',
  codes: 'https://github.com/cuffiesofficial/',
  instagram: 'https://www.instagram.com/cuffiesofficial/',
  medium: 'https://medium.com/@Cuffies',
  telegram: 'https://t.me/cuffiesofficial',
  convertBUSD: 'https://pancakeswap.finance/swap#/swap?outputCurrency=0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
  buyCuffies: 'https://app.sushi.com/swap?outputCurrency=0x2dA59E679529d3c04DAD1DfF038cabdB5Dcd8560',
  rules: 'https://docs.Cuffies.finance/products/',
};

const env: string = process.env.REACT_APP_ENV || process.env.NODE_ENV || 'development';




export const getDefaultConfiguration = () => {
  // config used when no ethereum detected
  return configurations[env];
};
