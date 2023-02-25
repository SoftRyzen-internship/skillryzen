import { ICONS } from '@theme/icons.const'
import { Popup } from '@ui-kit/index'

export const HeaderPopupLanguage = () => {
  const popupList = [
    {
      icon: ICONS.C_UK,
      text: 'English',
    },
    {
      icon: ICONS.C_UKRAINE,
      text: 'Ukrainian',
    },
  ]
  return <Popup list={popupList} />
}
