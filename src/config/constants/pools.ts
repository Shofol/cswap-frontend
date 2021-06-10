import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
   {
     sousId: 1,
     tokenName: 'WMATIC',
     stakingTokenName: QuoteToken.STONKX,
     stakingTokenAddress: '0x4BEcDD1704e16962053792fd0d6Baa533Daaa702',
     contractAddress: {
       97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
       56: '0x73feaa1eE314F8c655E354234017bE2193C9E24E',
      137: '0x3E15097046d61477FF8d6beA1b2751899726D70B'
     },
     poolCategory: PoolCategory.COMMUNITY,
     projectLink: 'https://stonk.farm/',
     harvest: true,
     tokenPerBlock: '.03125',
     sortOrder: 1,
     isFinished: false,
     tokenDecimals: 18,
   },
   {
    sousId: 2,
    tokenName: 'STONKY',
    stakingTokenName: QuoteToken.STONKX,
    stakingTokenAddress: '0x4BEcDD1704e16962053792fd0d6Baa533Daaa702',
    contractAddress: {
      97: '',
      56: '',
     137: '0x900fCB76Fc1e50947c05d94AF828932DB67c47F5'
    },
    poolCategory: PoolCategory.COMMUNITY,
    projectLink: 'https://stonk.farm/',
    harvest: true,
    tokenPerBlock: '.00012153',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
  // {
  //   sousId: 1,
  //   tokenName: 'TWT',
  //   stakingTokenName: QuoteToken.SYRUP,
  //   stakingTokenAddress: '0x009cF7bC57584b7998236eff51b98A168DceA9B0',
  //   contractAddress: {
  //     97: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
  //     56: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   projectLink: 'https://trustwallet.com/',
  //   harvest: true,
  //   tokenPerBlock: '20',
  //   sortOrder: 999,
  //   isFinished: true,
  //   tokenDecimals: 18,
  // },
]

export default pools
