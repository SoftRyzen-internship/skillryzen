import { useThemeContext } from 'context/themeContext';
import { useTranslation } from 'react-i18next';
import { IThemeContext } from 'constans/types';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { setStep } from 'redux/authSlice/authSlice';
import { getStep } from 'redux/authSlice/authSelectors';

import { TestsSearch } from './TestsSearch/TestsSearch';
import { TestsFilter } from './TestsFilter/TestsFilter';
import { TestsCardsList } from './TestsCardsList/TestsCardsList';
import { Modal } from 'ui-kit/components/Modal/Modal';
import { MainButton } from 'ui-kit';
import { ICONS } from 'ui-kit/icons';
import { IMAGES } from 'ui-kit/images';

// import { logOut } from 'redux/authSlice/operations';
import { useSelector } from 'react-redux';

import s from './TestsPageComponent.module.scss';
import { useAppDispatch } from 'hooks/hook';

export const TestsPageComponent = () => {
  const dispatch = useAppDispatch();

  const { theme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();

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
      {/* <button onClick={() => dispatch(logOut())}>LogOut</button> */}
      {isShowModal && (
        <Modal
          isShowModal={isShowModal}
          onClick={handleClickModal}
          title1={{ text: t('modal.title1'), className: `${s.title}` }}
          title2={{
            text: t('modal.title2'),
            className: `${s.titleRest}`,
          }}
          subtitle={{
            text: t('modal.subtitle'),
            className: `${s.subtitle}`,
          }}
          link={{
            text: t('modal.link'),
            className: `${s.link}`,
          }}
          image={{
            src: `${IMAGES.DONE}`,
            alt: 'Done registration',
            width: '220',
            height: '150',
            className: `${s.image}`,
          }}
          icon={<ICONS.CROSS_SMALL />}
          button={
            <MainButton
              type='button'
              text='OK'
              onClick={handleClickModal}
              size='small'
              color='blue'
              className={s.modalBtn}
            />
          }
        />
      )}
    </div>
  );
};
