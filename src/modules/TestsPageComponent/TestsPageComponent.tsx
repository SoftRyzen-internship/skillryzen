import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { IThemeContext } from 'constants/types';
import { useThemeContext } from 'context/themeContext';
import {
  useAppDispatch,
  useAppSelector,
  useCurrentWidth,
  useSessionStorage,
} from 'hooks';
import { setStep } from 'redux/authSlice/authSlice';
import { getIsAuth, getStep } from 'redux/authSlice/authSelectors';

import { Breadcrumbs, Modal, ScrollContainer, Tabs } from 'ui-kit';
import { ModalCongrats } from 'modules/Modals/ModalCongrats';
import { TestsSearch } from './TestsSearch/TestsSearch';
import { TestsFilter } from './TestsFilter/TestsFilter';
import { CompletedTestsList } from './CompletedTestsList/CompletedTestsList';
import { AvailableTestsList } from './AvailableTestsList/AvailableTestsList';

import s from './TestsPageComponent.module.scss';

interface TestsProps {
  size: 'large' | 'small';
  key: number;
}

const tabs = [
  {
    id: 1,
    name: 'testsMain.availableTests',
    component: (props: TestsProps) => <AvailableTestsList {...props} />,
  },
  {
    id: 2,
    name: 'testsMain.completedTests',
    component: (props: TestsProps) => <CompletedTestsList {...props} />,
  },
];

export const TestsPageComponent = () => {
  const { theme }: IThemeContext = useThemeContext();

  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  const [currentValue, setCurrentValue] = useSessionStorage('testsPage', {
    currentTab: tabs[0].id,
    size: 'small',
  });

  const handleChangeTab = (tab: number) => {
    setCurrentValue({ ...currentValue, currentTab: tab });
  };

  const handleChangeSize = (size: 'large' | 'small') => {
    setCurrentValue({ ...currentValue, size });
  };

  const currentWidth = useCurrentWidth();

  const step = useAppSelector(getStep);
  const isAuth = useAppSelector(getIsAuth);
  const dispatch = useAppDispatch();

  const location = useLocation();
  const registerRoute = location?.state?.from?.pathname;

  useEffect(() => {
    if (registerRoute === '/register' && step >= 3 && isAuth) {
      setIsShowModal(true);
    }
  }, [registerRoute, step, isAuth]);

  const handleClickModal = () => {
    setIsShowModal(prevState => !prevState);
    if (step !== 1) {
      dispatch(setStep(1));
    }
  };

  const { currentTab, size } = currentValue;

  return (
    <ScrollContainer>
      <div className={s.testsPage}>
        <Breadcrumbs />
        <div className={s.testsPage__wrapper}>
          <TestsSearch />
          <div className={s.testsPage__filterWrapper}>
            <Tabs
              currentTab={currentTab}
              tabs={tabs}
              changeTab={handleChangeTab}
              theme={theme}
            />
            <TestsFilter setSize={handleChangeSize} size={size} />
          </div>
        </div>
        {tabs.map(el => {
          if (el.id !== currentTab) return null;
          return el.component({
            size: currentWidth < 768 ? 'small' : size,
            key: el.id,
          });
        })}
        {isShowModal && (
          <Modal
            isShowModal={isShowModal}
            onClick={handleClickModal}
            isCloseIcon
          >
            <ModalCongrats onClick={handleClickModal} />
          </Modal>
        )}
      </div>
    </ScrollContainer>
  );
};
