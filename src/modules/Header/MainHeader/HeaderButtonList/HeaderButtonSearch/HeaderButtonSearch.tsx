import { useThemeContext } from 'context/themeContext';

import { ICONS } from 'ui-kit/icons';
import { HeaderButton } from 'ui-kit/index';

import { IThemeContext } from 'constants/types';

interface Props {
  active?: boolean;
  onClick?: () => void;
}

export const HeaderButtonSearch = ({ active, onClick }: Props) => {
  const { theme }: IThemeContext = useThemeContext();

  return (
    <HeaderButton
      icon={<ICONS.SEARCH fill={active ? '#3653f2' : '#9D9FB5'} />}
      theme={theme}
      onClick={onClick}
    />
  );
};
