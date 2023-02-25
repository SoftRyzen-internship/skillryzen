import { useState } from 'react'
import { ICONS } from '@theme/icons.const'
import { HeaderPopupLanguage } from './HeaderPopupLanguage'
import { HeaderButton } from '@ui-kit/index'

type popup = null | React.ReactNode

export const HeaderButtonLanguage = () => {
  const [popup, setPopup] = useState<popup>(null)
  const mouseEnterHandler = () => {
    setPopup(<HeaderPopupLanguage />)
  }
  const mouseLeaveHandler = () => {
    setPopup(null)
  }
  return (
    <HeaderButton
      icon={ICONS.C_UKRAINE}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      popupContent={popup}
    />
  )
}
