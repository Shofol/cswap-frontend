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
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
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
  // await CreatePool('0xc2132d05d31c914a87c6611c10748aeb04b58e8f', 25,4, 50400); // USDT 25% aloc, 4% fee, 14 hour harvest delay
  {
    pid: 5,
    isTokenOnly: true,
    risk: 2,
    lpSymbol: 'USDT',
    lpAddresses: {
      97: '',
      56: '',
      137: '0x2cf7252e74036d1da831d11089d326296e64a728', // USDT - USDC
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f', // USDT
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    tokenDecimals: 18,
  },
  // await CreatePool('0x2791bca1f2de4661ed88a30c99a7a9449aa84174', 25,4, 50400); // USDC  25% aloc, 4% fee, 14 hour harvest delay
  {
    pid: 6,
    isTokenOnly: true,
    risk: 2,
    lpSymbol: 'USDC',
    lpAddresses: {
      97: '',
      56: '',
      137: '0x2cf7252e74036d1da831d11089d326296e64a728', // USDC - USDC
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174', // USDC
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    tokenDecimals: 18,
  },
  // await CreatePool('0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270', 25,4, 50400); // Wmatic 25% aloc, 4% fee, 14 hour harvest delay
  {
    pid: 7,
    isTokenOnly: true,
    risk: 1,
    lpSymbol: 'WMATIC',
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
    tokenDecimals: 18,
  },
  // await CreatePool('0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6', 25,4, 50400); // WBTC 25% aloc, 4% fee, 14 hour harvest delay
  {
    pid: 8,
    isTokenOnly: true,
    risk: 2,
    lpSymbol: 'WBTC',
    lpAddresses: {
      97: '',
      56: '',
      137: '0xf6a637525402643b0654a54bead2cb9a83c8b498', // WBTC - USDC
    },
    tokenSymbol: 'WBTC',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6', // WBTC
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    tokenDecimals: 18,
  },
  // await CreatePool('0x7ceb23fd6bc0add59e62ac25578270cff1b9f619', 25,4, 50400); // WETH 25% aloc, 4% fee, 14 hour harvest delay
  {
    pid: 9,
    isTokenOnly: true,
    risk: 3,
    lpSymbol: 'WETH',
    lpAddresses: {
      97: '',
      56: '',
      137: '0x853ee4b2a13f8a742d64c8f088be7ba2131f670d', // ETH - USDC
    },
    tokenSymbol: 'WETH',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619', // ETH
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    tokenDecimals: 18,
  }, 
  // await CreatePool('0x8a953cfe442c5e8855cc6c61b1293fa648bae472', 50, 4, 25200) // Polydoge
  {
    pid: 10,
    isTokenOnly: true,
    risk: 3,
    lpSymbol: 'POLYDOGE',
    lpAddresses: {
      97: '',
      56: '',
      137: '0x7b3e67e63906d8576466c2f48158a30be0a9e36c', // Polydoge - USDC
    },
    tokenSymbol: 'POLYDOGE',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0x8a953cfe442c5e8855cc6c61b1293fa648bae472', // Polydoge
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    tokenDecimals: 18,
  }, 
  // await CreatePool('0x831753dd7087cac61ab5644b308642cc1c33dc13', 50, 4, 25200); // Quick
  {
    pid: 11,
    isTokenOnly: true,
    risk: 3,
    lpSymbol: 'QUICK',
    lpAddresses: {
      97: '',
      56: '',
      137: '0x1f1e4c845183ef6d50e9609f16f6f9cae43bc9cb', // QUICK - USDC
    },
    tokenSymbol: 'QUICK',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0x831753dd7087cac61ab5644b308642cc1c33dc13', // QUICK
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    tokenDecimals: 18,
  }, 
  // await CreatePool('0x8f3cf7ad23cd3cadbd9735aff958023239c6a063', 50, 4, 25200); // Dai
  {
    pid: 12,
    isTokenOnly: true,
    risk: 3,
    lpSymbol: 'DAI',
    lpAddresses: {
      97: '',
      56: '',
      137: '0xf04adbf75cdfc5ed26eea4bbbb991db002036bdd', // DAI - USDC
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063', // DAI
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    tokenDecimals: 18,
  }, 
  // await CreatePool('0x94c7d657f1c8be06a4dc009d2d475bb559d858cb', 50, 4, 25200); // SGaj
  {
    pid: 13,
    isTokenOnly: true,
    risk: 3,
    lpSymbol: 'SGAJ',
    lpAddresses: {
      97: '',
      56: '',
      137: '0x7116b32dab15c8f3806d39f9623fc56dcdf33d68', // SGAJ - USDC
    },
    tokenSymbol: 'SGAJ',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0x94c7d657f1c8be06a4dc009d2d475bb559d858cb', // SGAJ
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    tokenDecimals: 18,
  }, 
]

export default farms
