import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'STONKX-USDC',
    lpAddresses: {
      97: '',
      56: '',
      137: '0xF7294f11120157Feb6461d12BC1Ed4b75061c81b', // STONKX - USDC
    },
    tokenSymbol: 'STONKX',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0x4BEcDD1704e16962053792fd0d6Baa533Daaa702',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  // 0xc293225BA90C545357761AF2a09e71504275cEE2
  {
    pid: 13,
    risk: 5,
    lpSymbol: 'STONKX-WMATIC',
    lpAddresses: {
      97: '',
      56: '',
      137: '0xc293225BA90C545357761AF2a09e71504275cEE2', // STONKX - WMATIC
    },
    tokenSymbol: 'STONKX',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0x4BEcDD1704e16962053792fd0d6Baa533Daaa702',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 9,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'STONKX',
    lpAddresses: {
      97: '',
      56: '',
      137: '0xF7294f11120157Feb6461d12BC1Ed4b75061c81b', // STONKX - USDC
    },
    tokenSymbol: 'STONKX',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0x4BEcDD1704e16962053792fd0d6Baa533Daaa702',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    tokenDecimals: 18,
  },
  {
    pid: 1,
    risk: 3,
    lpSymbol: 'WMATIC-USDC',
    lpAddresses: {
      97: '',
      56: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827',
      137: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827', // WMATIC - USDC
    },
    tokenSymbol: 'WMATIC',
    tokenAddresses: {
      97: '',
      56: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
      137: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270', // WMATIC
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
   {
    pid: 14,
    isTokenOnly: true,
    risk: 3,
    lpSymbol: 'Fish',
    lpAddresses: {
      97: '',
      56: '',  
      137: '0x0Df9e46C0eAEdf41B9d4bbE2Cea2aF6E8181b033', // Fish - USDC
    },
    tokenSymbol: 'Fish',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0x3a3df212b7aa91aa0402b9035b098891d276572b', // Fish
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    tokenDecimals: 18,
  },
   {
    pid: 15,
    isTokenOnly: true,
    risk: 3,
    lpSymbol: 'Iron',
    lpAddresses: {
      97: '',
      56: '',  
      137: '0x2Bbe0F728f4d5821F84eeE0432D2A4be7C0cB7Fc', // IRON - USDC
    },
    tokenSymbol: 'Iron',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0xd86b5923f3ad7b585ed81b448170ae026c65ae9a', // IRON
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    tokenDecimals: 18,
  },
   {
    pid: 16,
    isTokenOnly: true,
    risk: 3,
    lpSymbol: 'PolyDoge',
    lpAddresses: {
      97: '',
      56: '',  
      137: '0x7b3e67e63906d8576466c2f48158a30be0a9e36c', // Polydoge - USDC
    },
    tokenSymbol: 'PolyDoge',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0x8a953cfe442c5e8855cc6c61b1293fa648bae472', // polydoge
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    tokenDecimals: 18,
  }, 
  {
    pid: 2,
    isTokenOnly: true,
    risk: 3,
    lpSymbol: 'WMATIC',
    lpAddresses: {
      97: '',
      56: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827',  // 0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827
      137: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827', // WMATIC - USDC
    },
    tokenSymbol: 'WMATIC',
    tokenAddresses: {
      97: '',
      56: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
      137: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270', // WMATIC
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    tokenDecimals: 18,
  },
  {
    pid: 3,
    isTokenOnly: true,
    risk: 3,
    lpSymbol: 'WBTC',
    lpAddresses: {
      97: '',
      56: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827',
      137: '0xf6a637525402643b0654a54bead2cb9a83c8b498', // WBTC - USDC
    },
    tokenSymbol: 'WBTC',
    tokenAddresses: {
      97: '',
      56: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
      137: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6', // WBTC
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    tokenDecimals: 18,
  },
   {
    pid: 4,
    isTokenOnly: true,
    risk: 3,
    lpSymbol: 'WETH',
    lpAddresses: {
      97: '',
      56: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827',
      137: '0x853ee4b2a13f8a742d64c8f088be7ba2131f670d', // ETH - USDC
    },
    tokenSymbol: 'WETH',
    tokenAddresses: {
      97: '',
      56: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
      137: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619', // ETH
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    tokenDecimals: 18,
  }, 
  {
    pid: 5,
    isTokenOnly: true,
    risk: 3,
    lpSymbol: 'QUICK',
    lpAddresses: {
      97: '',
      56: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827',
      137: '0x1f1e4c845183ef6d50e9609f16f6f9cae43bc9cb', // QUICK - USDC
    },
    tokenSymbol: 'QUICK',
    tokenAddresses: {
      97: '',
      56: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
      137: '0x831753dd7087cac61ab5644b308642cc1c33dc13', // QUICK
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    tokenDecimals: 18,
  },
  {
    pid: 6,
    isTokenOnly: true,
    risk: 3,
    lpSymbol: 'YLD',
    lpAddresses: {
      97: '',
      56: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827',
      137: '0xead4c2d8859b2cb0698aeb7d0cf56a00468a4f5c', // YLD - MATIC
    },
    tokenSymbol: 'YLD',
    tokenAddresses: {
      97: '',
      56: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
      137: '0x4cebdbcb286101a17d3ea1f7fe7bbded2b2053dd', // YLD
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    tokenDecimals: 18,
  },
  {
    pid: 7,
    isTokenOnly: true,
    risk: 3,
    lpSymbol: 'USDT',
    lpAddresses: {
      97: '',
      56: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827',
      137: '0x2cf7252e74036d1da831d11089d326296e64a728', // USDT - USDC
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
      137: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f', // USDT
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    tokenDecimals: 18,
  },
  {
    pid: 8,
    isTokenOnly: true,
    risk: 3,
    lpSymbol: 'USDC',
    lpAddresses: {
      97: '',
      56: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827',
      137: '0x2cf7252e74036d1da831d11089d326296e64a728', // USDC - USDC
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      97: '',
      56: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
      137: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174', // USDC
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    tokenDecimals: 18,
  },
  {
    pid: 10,
    risk: 3,
    lpSymbol: 'USDT-USDC',
    lpAddresses: {
      97: '',
      56: '',
      137: '0x2cF7252e74036d1Da831d11089D326296e64a728', // USDT- USDC
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f', // USDT
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 11,
    risk: 3,
    lpSymbol: 'WBTC-USDC',
    lpAddresses: {
      97: '',
      56: '',
      137: '0xf6a637525402643b0654a54bead2cb9a83c8b498', // WBTC USDC
    },
    tokenSymbol: 'WBTC',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6', // WBTC
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 12,
    risk: 3,
    lpSymbol: 'Quick-WMATIC',
    lpAddresses: {
      97: '',
      56: '',  
      137: '0x019ba0325f1988213d448b3472fa1cf8d07618d7', // Quick- WMatic
    },
    tokenSymbol: 'Quick',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0x831753dd7087cac61ab5644b308642cc1c33dc13', // Quick
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },  
]

export default farms
