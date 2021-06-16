import { MenuEntry } from '@gameswapfinance/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Buy StonkY',
    icon: 'TradeIcon',
    href: 'https://quickswap.exchange/#/swap?outputCurrency=0xcac723F6C79Ce761E04682009Fa87c39Ba05b75c',
  },
  {
    label: 'Stake Liquidity',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Stake Tokens',
    icon: 'PoolIcon',
    href: '/nests',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  {
    label: 'Earn Dividends',
    icon: 'TicketIcon',
    href: '/profit',
  },
  {
    label: 'STONKMOON (Coming Soon)',
    icon: 'SunIcon',
    href: '/profit',
  },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Road Map',
    icon: 'RoadmapIcon',
    href: 'https://gameswapfinance.gitbook.io/gameswap/roadmap',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/gameswapfinance/',
      },
      {
        label: 'Docs',
        href: 'https://gameswapfinance.gitbook.io/gameswap/',
      },
      {
        label: 'Medium',
        href: 'https://medium.com/@gameswapfinance',
      }
    ],
  },
  /* {
    label: 'Rug Doc Security Review',
    icon: 'AuditIcon',
    href: 'https://rugdoc.io/project/gameswap-stonkx/',
  }, */
]

export default config
