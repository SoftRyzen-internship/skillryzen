import { useState } from 'react'
import { ICONS } from '@theme/icons.const'
import { HeaderButton } from '@ui-kit/index'

export const HeaderButtonTheme = () => {
  const [icon, setIcon] = useState(ICONS.SUN)

  const clickHandler = () => {
    if (icon === ICONS.SUN) {
      setIcon(ICONS.MOON)
    } else {
      setIcon(ICONS.SUN)
    }
  }
  return <HeaderButton icon={icon} onClick={clickHandler} />
}
