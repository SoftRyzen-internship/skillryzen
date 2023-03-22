import { useThemeContext } from 'context/themeContext';

import { ICONS } from 'ui-kit/icons';
import { HeaderButton } from 'ui-kit/index';

import { IThemeContext } from 'constans/types';

interface Props {
  active?: boolean;
  onClick?: () => void;
}

export const HeaderButtonSearch = ({ active, onClick }: Props) => {
  const { theme }: IThemeContext = useThemeContext();

  return (
    <HeaderButton
      icon={<ICONS.SEARCH fill='white' />}
      theme={theme}
      active={active}
      onClick={onClick}
    />
  );
};
