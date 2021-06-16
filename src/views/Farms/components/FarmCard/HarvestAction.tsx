import React, { useState } from 'react'
import BigNumber from 'bignumber.js'
import { Button, Flex, Heading } from '@gameswapfinance/uikit'
import useI18n from 'hooks/useI18n'
import { useHarvest } from 'hooks/useHarvest'
import { getBalanceNumber } from 'utils/formatBalance'
import styled from 'styled-components'
import useStake from '../../../../hooks/useStake'

interface FarmCardActionsProps {
  earnings?: BigNumber
  pid?: number
  secondsUntilHarvest: number
}

function GetHMS(rawSeconds) {
  if(rawSeconds < 0)
  {
    return 'Now'
  }
  const seconds = Math.round(rawSeconds);
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds - (hours * 3600)) / 60);
  const sec = seconds - (hours * 3600) - (minutes * 60);

  const hourString =  hours > 10 ? hours  : `0${hours}`;
  const minuteString =  minutes > 10 ? minutes  : `0${minutes}`;
  const secondString =  sec > 10 ? sec  : `0${sec}`;

  return `${hourString}:${minuteString}:${secondString}`;
}

const BalanceAndCompound = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`

const HarvestAction: React.FC<FarmCardActionsProps> = ({ earnings, pid, secondsUntilHarvest }) => {
  const TranslateString = useI18n()
  const [pendingTx, setPendingTx] = useState(false)
  const { onReward } = useHarvest(pid)
  const { onStake } = useStake(pid)

  const rawEarningsBalance = getBalanceNumber(earnings)
  const displayBalance = rawEarningsBalance.toLocaleString()

  return (
    <Flex mb="8px" justifyContent="space-between" alignItems="center">
      <Heading color={rawEarningsBalance === 0 ? 'textDisabled' : 'text'}>{displayBalance}</Heading>
      <BalanceAndCompound>
        {pid === 0 ? (
          <Button
            disabled={rawEarningsBalance === 0 || pendingTx}
            size="sm"
            variant="secondary"
            marginBottom="15px"
            onClick={async () => {
              setPendingTx(true)
              await onStake(rawEarningsBalance.toString())
              setPendingTx(false)
            }}
          >
            {TranslateString(999, 'Compound')}
          </Button>
        ) : null}
        <Button
          disabled={rawEarningsBalance === 0 || pendingTx || secondsUntilHarvest > 0}
          onClick={async () => {
            setPendingTx(true)
            await onReward()
            setPendingTx(false)
          }}
        >
          {secondsUntilHarvest <= 0 ? 'Harvest' : GetHMS(secondsUntilHarvest)}
        </Button>
      </BalanceAndCompound>
    </Flex>
  )
}

export default HarvestAction
