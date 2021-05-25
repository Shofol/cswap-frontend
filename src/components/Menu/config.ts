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
        href: 'https://quickswap.exchange/#/swap?outputCurrency=0x4BEcDD1704e16962053792fd0d6Baa533Daaa702',
      },
      {
        label: 'Liquidity',
        href: 'https://quickswap.exchange/#/add/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174/0x4BEcDD1704e16962053792fd0d6Baa533Daaa702',
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
    label: 'Dividends',
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
        href: 'https://gameswapfinance.gitbook.io/gameswap/',
      },
      {
        label: 'Medium',
        href: 'https://medium.com/@gameswapfinance',
      }
    ],
  },
  {
     label: 'Old Stonk',
     icon: 'NftIcon',
     href: 'https://gameswap.netlify.app',
   },
]

export default config
