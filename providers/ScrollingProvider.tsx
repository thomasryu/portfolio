'use client'

import { ScrollingContext } from '@/contexts'
import { useEffect, useState } from 'react'

import type { ScrollingValue } from '@/types'

type Props = {
  children: React.ReactNode
}

export const ScrollingProvider: React.FC<Props> = (props) => {
  const [disabled, setDisabled] = useState(false)

  const updateOverflow = () => {
    document.body.style.overflow = disabled ? 'hidden' : 'visible'
    document.documentElement.style.overflow = disabled ? 'hidden' : 'visible'
  }

  useEffect(updateOverflow, [disabled])

  const contextValue: ScrollingValue = {
    disabled,
    setDisabled,
  }

  return <ScrollingContext.Provider value={contextValue}>{props.children}</ScrollingContext.Provider>
}
