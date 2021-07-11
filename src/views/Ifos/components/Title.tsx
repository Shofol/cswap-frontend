import styled from 'styled-components'
import { Heading } from '@shofol/gameswapuikit'

const Title = styled(Heading).attrs({ size: 'lg' })`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 16px;
`

export default Title
