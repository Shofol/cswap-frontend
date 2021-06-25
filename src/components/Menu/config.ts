import { MenuEntry } from '@gameswapfinance/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Buy StonkZ',
    icon: 'TradeIcon',
    href: 'https://quickswap.exchange/#/swap?outputCurrency=0x1F1b5ce5fEDb6F27Db51C4d5e885d952f8371257',
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
        label: 'StonkZ Chart',
        href: 'https://app.polychart.io/explorer/polygon/0x0652CF35852e8B56cda90e5Da23ad32995B4FE96'
      },
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
    label: 'Rug Doc Security Review',
    icon: 'AuditIcon',
    href: 'https://rugdoc.io/project/stonkz-gameswap/',
  }, 
]

export default config
