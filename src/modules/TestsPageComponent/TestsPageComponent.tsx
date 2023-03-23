import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useThemeContext } from 'context/themeContext';
import { IThemeContext } from 'constans/types';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useCurrentWidth } from 'hooks';
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

  const [currentTab, setCurrentTab] = useState<number>(
    () =>
      JSON.parse(sessionStorage.getItem('testsPage'))?.currentTab ?? tabs[0].id
  );
  const [size, setSize] = useState<'large' | 'small'>(
    () => JSON.parse(sessionStorage.getItem('testsPage'))?.size ?? 'large'
  );
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const step = useAppSelector(getStep);
  const isAuth = useAppSelector(getIsAuth);

  const location = useLocation();
  const registerRoute = location?.state?.from?.pathname;

  const currentWidth = useCurrentWidth();

  useEffect(() => {
    sessionStorage.setItem('testsPage', JSON.stringify({ currentTab, size }));
  }, [currentTab, size]);

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

  const handleChangeTab = (tab: number) => {
    setCurrentTab(tab);
  };

  return (
    <ScrollContainer>
      <div className={s.testsPage}>
        <Breadcrumbs />
        <div className={s['testsPage__wrapper--mobile']}>
          <TestsSearch />
          <div className={s.testsPage__wrapper}>
            <Tabs
              currentTab={currentTab}
              tabs={tabs}
              changeTab={handleChangeTab}
              theme={theme}
            />
            <TestsFilter setSize={setSize} size={size} />
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
