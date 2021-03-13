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
    pid: 12,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'STONK',
    lpAddresses: {
      97: '',
      56: '0x03e90acD177CCE802D69611d10ca91Df13A8a9d4', // STONK-BUSD LP
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
    pid: 13,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'BUSD',
    lpAddresses: {
      97: '',
      56: '0x03e90acD177CCE802D69611d10ca91Df13A8a9d4', // EGG-BUSD LP (BUSD-BUSD will ignore)
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  }
]

export default farms
