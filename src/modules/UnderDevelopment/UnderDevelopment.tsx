import { AuthButton } from 'ui-kit';
import { IThemeContext } from 'modules/common/types';
import { useThemeContext } from 'context/themeContext';

import s from './UnderDevelopment.module.scss';

const objectTheme = {
  dark: {
    wrapper: s.wrapperDark,
    title: s.titleDark,
  },
  light: {
    wrapper: s.wrapperLight,
    title: s.titleLight,
  },
};

interface UnderDevelopmentProps {
  title: string;
}

export const UnderDevelopment = ({ title }: UnderDevelopmentProps) => {
  const { theme }: IThemeContext = useThemeContext();
  return (
    <section className={s.section}>
      <div className={objectTheme[theme].wrapper}>
        <h2 className={objectTheme[theme].title}>{title}</h2>
        <AuthButton
          type='submit'
          text='Побажання та рекомендації'
          size='large'
        />
      </div>
    </section>
  );
};
