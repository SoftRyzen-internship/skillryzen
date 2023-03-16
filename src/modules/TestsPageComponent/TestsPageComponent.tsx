import { useState, useEffect } from 'react';
import { useThemeContext } from 'context/themeContext';
import { IThemeContext } from 'constans/types';
import { useLocation } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'hooks/hook';
import { setStep } from 'redux/authSlice/authSlice';
import { getIsAuth, getStep } from 'redux/authSlice/authSelectors';

import { ModalCongrats } from 'modules/Modals/ModalCongrats';
import { TestsSearch } from './TestsSearch/TestsSearch';
import { TestsFilter } from './TestsFilter/TestsFilter';
import { CompletedTestsList } from './CompletedTestsList/CompletedTestsList';
import { AvailableTestsList } from './AvailableTestsList/AvailableTestsList';
import { Breadcrumbs, Modal, Tabs } from 'ui-kit';

import s from './TestsPageComponent.module.scss';

interface TestsProps {
  size: 'large' | 'small'; 
  key: number
}

const tabs = [
  {
    id: 1,
    name: 'testsMain.availableTests',
    component: (props: TestsProps) => <AvailableTestsList {...props}/> ,
  },
  {
    id: 2,
    name: 'testsMain.completedTests',
    component: (props: TestsProps) => <CompletedTestsList {...props}/>,
  },
];

export const TestsPageComponent = () => {
  const { theme }: IThemeContext = useThemeContext();

  const [currentTab, setCurrentTab] = useState(tabs[0].id);
  const [size, setSize] = useState<'large' | 'small'>('large');
  const [isShowModal, setIsShowModal] = useState(false);

  const dispatch = useAppDispatch();
  const step = useAppSelector(getStep);
  const isAuth = useAppSelector(getIsAuth);

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

  const handleChangeTab = (tab: number) => setCurrentTab(tab);

  return (
    <div className={`${s.testsPage} ${s[`testsPage--${theme}`]}`}>
      <Breadcrumbs />
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
      {tabs.map(el => {
        if (el.id !== currentTab) return null;
        return el.component({size, key: el.id});
      })}
      {isShowModal && (
        <Modal isShowModal={isShowModal} onClick={handleClickModal} isCloseIcon>
          <ModalCongrats onClick={handleClickModal} />
        </Modal>
      )}
    </div>
  );
};
