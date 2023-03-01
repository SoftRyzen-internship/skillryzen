import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { COLORS } from 'theme/colors.const';
import { ICONS } from 'theme/icons.const';
import { HeaderButton } from 'ui-kit/index';
import { Popup } from 'ui-kit/index';

export const HeaderButtonCoin = () => {
  const [popup, setPopup] = useState<null | React.ReactNode>(null);
  const [isClickCoins, setIsClickCoins] = useState(false);

  const { t } = useTranslation();

  // тимчасовий масив, далі буде приходити з бекенду
  const tempList = [
    {
      icon: <ICONS.COIN fill='var(--message-cl)' />,
      text: t('header.coins.item1'),
    },
    {
      icon: <ICONS.COIN fill='var(--message-cl)' />,
      text: t('header.coins.item2'),
    },
    ,
    {
      icon: <ICONS.COIN fill='var(--message-cl)' />,
      text: t('header.coins.item2'),
    },
    ,
    {
      icon: <ICONS.COIN fill='var(--message-cl)' />,
      text: t('header.coins.item2'),
    },
    ,
    {
      icon: <ICONS.COIN fill='var(--message-cl)' />,
      text: t('header.coins.item2'),
    },
    ,
    {
      icon: <ICONS.COIN fill='var(--message-cl)' />,
      text: t('header.coins.item2'),
    },
    ,
    {
      icon: <ICONS.COIN fill='var(--message-cl)' />,
      text: t('header.coins.item2'),
    },
  ];

  const handleClickCoins = () => {
    setIsClickCoins((prevState) => !prevState);
  };

  const mouseEnterHandler = () => {
    setPopup(
      <Popup
        list={tempList}
        vievAll={t('header.viewAll')}
        handleClickItem={handleClickCoins}
      />
    );
  };
  const mouseLeaveHandler = () => {
    setPopup(null);
  };
  return (
    <HeaderButton
      icon={<ICONS.COIN fill={COLORS.coinIcon} stroke={COLORS.coinIcon} />}
      IndicatorNumber={tempList.length}
      IndicatorColor='green'
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      popupContent={popup}
    />
  );
};
