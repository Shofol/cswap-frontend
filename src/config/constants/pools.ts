import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 2,
    tokenName: 'WMATIC',
    stakingTokenName: QuoteToken.STONKY,
    stakingTokenAddress: '0xcac723F6C79Ce761E04682009Fa87c39Ba05b75c',
    contractAddress: {
      97: '',
      56: '',
     137: '0x65B97c51634d49e57B7893E3142f02eB51d8125B'
    },
    poolCategory: PoolCategory.COMMUNITY,
    projectLink: 'https://stonky.farm/',
    harvest: true,
    tokenPerBlock: '.02892',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
    message: '3 Day 3,570 MATIC Pool'
  },
  // truffle migrate --network polygon -f 4 
  {
    sousId: 3,
    tokenName: 'StonkZ',
    stakingTokenName: QuoteToken.STONKY,
    stakingTokenAddress: '0xcac723F6C79Ce761E04682009Fa87c39Ba05b75c',
    contractAddress: {
      97: '',
      56: '',
     137: '0xb1FcAC4Ba7497e1314dD76eA590B96039df1D359'
    },
    poolCategory: PoolCategory.COMMUNITY,
    projectLink: 'https://stonky.farm/',
    harvest: true,
    tokenPerBlock: '.000403',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
    message: '3 Day StonkZ Pool'
  },
]

export default pools
