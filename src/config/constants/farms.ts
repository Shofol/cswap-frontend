import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'STONK-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x03e90acD177CCE802D69611d10ca91Df13A8a9d4',
    },
    tokenSymbol: 'STONK',
    tokenAddresses: {
      97: '',
      56: '0xfaD0ac6bfF4ad39d28d4aa2eCDEe954D168bD418',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  // TODO add more farms
]

export default farms
