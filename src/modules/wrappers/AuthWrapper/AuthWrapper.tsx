import { useState } from 'react';
import { useAppSelector, useAppDispatch } from 'hooks';
import { AuthIntro } from '../AuthIntro/AuthIntro';

import { getIsClickLogOut, getStep } from 'redux/authSlice/authSelectors';
import { setClickLogOut } from 'redux/authSlice/authSlice';

import { Modal } from 'ui-kit';
import { LogOutFinish } from 'modules/Modals/LogOut/LogOutFinish';

import { HeaderButtonLanguage } from 'modules/Header/MainHeader/HeaderButtonList/HeaderButtonLanguage';
import { HeaderButtonTheme } from 'modules/Header/MainHeader/HeaderButtonList/HeaderButtonTheme';

import { useThemeContext } from 'context/themeContext';
import { IThemeContext } from 'constans/types';

import s from './AuthWrapper.module.scss';

const objectTheme = {
  dark: {
    authWrapper: s.authWrapperDark,
  },
  light: {
    authWrapper: s.authWrapperLight,
  },
};

export interface AuthProps {
  children: React.ReactNode;
}

export const AuthWrapper = ({ children }: AuthProps) => {
  const { theme }: IThemeContext = useThemeContext();

  const dispatch = useAppDispatch();
  const step = useAppSelector(getStep);
  const isClickLogOut = useAppSelector(getIsClickLogOut);

  const [isShowModal, setIsShowModal] = useState(false);

  const handleClickModal = () => {
    setIsShowModal(prevState => !prevState);
    dispatch(setClickLogOut(false));
  };

  return (
    <main className={objectTheme[theme].authWrapper}>
      <div className={s.settingsWrapper}>
        <HeaderButtonTheme />
        <HeaderButtonLanguage />
      </div>
      {step < 3 && <AuthIntro />}
      {children}

      {isClickLogOut && (
        <Modal isShowModal={isShowModal} onClick={handleClickModal} isCloseIcon>
          <LogOutFinish onClick={handleClickModal} />
        </Modal>
      )}
    </main>
  );
};
