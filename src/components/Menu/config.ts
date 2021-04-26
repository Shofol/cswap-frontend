import { MenuEntry } from '@gameswapfinance/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xfaD0ac6bfF4ad39d28d4aa2eCDEe954D168bD418',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/add/BNB/0xfaD0ac6bfF4ad39d28d4aa2eCDEe954D168bD418',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/nests',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  {
    label: 'Profit Sharing',
    icon: 'TicketIcon',
    href: '/profit',
  },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
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
        href: 'https://goosedefi.gitbook.io/goose-finance/',
      },
    ],
  },
]

export default config
