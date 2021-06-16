import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  // await CreatePool('0xcac723F6C79Ce761E04682009Fa87c39Ba05b75c', 50, 0, 7200) // 0 Stonky token 50 aloc, no fee, 2 hour harvest delay
  {
    pid: 0,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'STONKY',
    lpAddresses: {
      97: '',
      56: '',
      137: '0x656DD8094106805888dc3E7b4E3fb9061D0DC001', // STONKY - USDC
    },
    tokenSymbol: 'STONKY',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0xcac723F6C79Ce761E04682009Fa87c39Ba05b75c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  // await CreatePool('0x656DD8094106805888dc3E7b4E3fb9061D0DC001', 100, 4, 7200) // 1 Stonky-USDC 100 aloc, 4% fee, 2 hour harvest delay
  {
    pid: 1,
    risk: 3,
    lpSymbol: 'STONKY-USDC',
    lpAddresses: {
      97: '',
      56: '',
      137: '0x656DD8094106805888dc3E7b4E3fb9061D0DC001', // Stonky - USDC
    },
    tokenSymbol: 'STONKY',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0xcac723F6C79Ce761E04682009Fa87c39Ba05b75c', // STONKY
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  // await CreatePool('0x21401C19cBE557f1265401BDA65bC523CE509db2', 100, 4, 7200) // 2 Stonky-WMatic 100 aloc, 4% fee, 2 hour harvest delay 
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'STONKY-WMATIC',
    lpAddresses: {
      97: '',
      56: '',
      137: '0x21401C19cBE557f1265401BDA65bC523CE509db2', // Stonky - WMATIC
    },
    tokenSymbol: 'STONKY',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0xcac723F6C79Ce761E04682009Fa87c39Ba05b75c', // STONKY
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  // await CreatePool('0xd5069FbeCBE6b535341c45D57E609A02C80f13D6', 100, 4, 7200) // 3 Stonky-WETH 100 aloc, 4% fee, 2 hour harvest delay
  {
    pid: 3,
    risk: 3,
    lpSymbol: 'STONKY-WETH',
    lpAddresses: {
      97: '',
      56: '',
      137: '0xd5069FbeCBE6b535341c45D57E609A02C80f13D6', // Stonky - WETH
    },
    tokenSymbol: 'STONKY',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0xcac723F6C79Ce761E04682009Fa87c39Ba05b75c', // STONKY
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
  },
  // await CreatePool('0x797eF3827Ef8bAA7B72b596E126FD1b31003055C', 100, 4, 7200) // 4 Stonky-WBTC 100 aloc, 4% fee, 2 hour harvest delay
  {
    pid: 4,
    risk: 3,
    lpSymbol: 'STONKY-WBTC',
    lpAddresses: {
      97: '',
      56: '',
      137: '0x797eF3827Ef8bAA7B72b596E126FD1b31003055C', // WMATIC - USDC
    },
    tokenSymbol: 'STONKY',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0xcac723F6C79Ce761E04682009Fa87c39Ba05b75c', // STONKY
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
  },
  // await CreatePool('0x797eF3827Ef8bAA7B72b596E126FD1b31003055C', 100, 4, 7200) // 4 Stonky-WBTC 100 aloc, 4% fee, 2 hour harvest delay
  /* {
    pid: 1,
    risk: 3,
    lpSymbol: 'WMATIC-USDC',
    lpAddresses: {
      97: '',
      56: '',
      137: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827', // WMATIC - USDC
    },
    tokenSymbol: 'WMATIC',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270', // WMATIC
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  }, */


  
]

export default farms
