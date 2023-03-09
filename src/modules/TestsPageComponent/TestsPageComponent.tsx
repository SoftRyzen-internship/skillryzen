import { useState, useEffect } from 'react';
import { useThemeContext } from 'context/themeContext';
import { IThemeContext } from 'constans/types';
import { useLocation } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { useAppDispatch } from 'hooks/hook';
import { setStep } from 'redux/authSlice/authSlice';
import { getStep } from 'redux/authSlice/authSelectors';

import { ModalCongrats } from 'modules/Modals/ModalCongrats';
import { TestsSearch } from './TestsSearch/TestsSearch';
import { TestsFilter } from './TestsFilter/TestsFilter';
import { TestsCardsList } from './TestsCardsList/TestsCardsList';
import { Modal } from 'ui-kit';

import s from './TestsPageComponent.module.scss';

export const TestsPageComponent = () => {
  const dispatch = useAppDispatch();

  const { theme }: IThemeContext = useThemeContext();

  const [size, setSize] = useState<'large' | 'small'>('large');
  const [isShowModal, setIsShowModal] = useState(false);

  const step = useSelector(getStep);
  // console.log(step);

  const location = useLocation();
  // console.log('location', location);
  const registerRoute = location?.state?.from?.pathname;

  useEffect(() => {
    if (registerRoute === '/register' && step === 3) {
      setIsShowModal(true);
    }
  }, [registerRoute, step]);

  const handleClickModal = () => {
    setIsShowModal((prevState) => !prevState);
    dispatch(setStep(1));
  };

  return (
    <div className={`${s.testsPage} ${s[`testsPage--${theme}`]}`}>
      <TestsSearch />
      <TestsFilter setSize={setSize} size={size} />
      <TestsCardsList size={size} />
      {isShowModal && (
        <Modal isShowModal={isShowModal} onClick={handleClickModal} isCloseIcon>
          <ModalCongrats onClick={handleClickModal} />
        </Modal>
      )}
    </div>
  );
};
