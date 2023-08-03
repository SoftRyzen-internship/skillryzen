import { IThemeContext } from 'constants/types';
import { useThemeContext } from 'context/themeContext';
import { IconButton } from 'ui-kit';

import s from './ViewButtonList.module.scss';

interface ButtonListProps {
  size: string;
  setSize: React.Dispatch<React.SetStateAction<string>>;
}

export const ViewButtonList = ({ size, setSize }: ButtonListProps) => {
  const { theme }: IThemeContext = useThemeContext();

  return (
    <div className={s.buttonList}>
      <IconButton
        theme={theme}
        onClick={() => setSize('small')}
        color={size === 'small' ? 'blue' : 'black'}
        icon='grid2'
      />
      <IconButton
        theme={theme}
        onClick={() => setSize('large')}
        color={size === 'large' ? 'blue' : 'black'}
        icon='grid4'
      />
    </div>
  );
};
