import { Configuration } from './diamondhand/config';
import deploymentMainnet from './diamondhand/deployments/deployments.mainnet.json';

const configurations: { [env: string]: Configuration } = {
  mainnet: {
    chainId: 80001,
    etherscanUrl: 'https://polygonscan.com/',
    defaultProvider: 'https://rpc-mumbai.maticvigil.com/',
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
      Cuffies: '0x2dA59E679529d3c04DAD1DfF038cabdB5Dcd8560',
      Wbnb: '0xEF1d37AAD657c5eD972836D5ACBCD86893B3D584',
      Link: '0xb0897686c545045aFc77CF20eC7A532E3120E0F1',
      Multicall: '0x08411ADd0b5AA8ee47563b146743C13b3556c9Cc',
      TaxService: deploymentMainnet.TaxService.address,
      RandomNumberGenerator: deploymentMainnet.RandomNumberGenerator.address,
      PrizeReservePool: deploymentMainnet.PrizeReservePool.address,

    },


    admins: [
      '0x2DcE12B0bCcf938CD6ee6F3bF872746e5D8F3e92'

    ],
    collateralTokens: {
      Cuffies: ['0x2dA59E679529d3c04DAD1DfF038cabdB5Dcd8560', 18],
    },
  },
};

export const ExternalLinks = {
  twitter: 'https://twitter.com/Cuffies',
  codes: 'https://github.com/Cuffies',
  discord: 'https://discord.gg/Cuffies',
  medium: 'https://medium.com/@Cuffies',
  telegram: 'https://t.me/Cuffies',
  buyCuffies:
    'https://app.sushi.com/swap?outputCurrency=0x2dA59E679529d3c04DAD1DfF038cabdB5Dcd8560',
  rules: 'https://docs.Cuffies.finance/products/',
};

const env: string = process.env.REACT_APP_ENV || process.env.NODE_ENV || 'development';




export const getDefaultConfiguration = () => {
  // config used when no ethereum detected
  return configurations[env];
};
