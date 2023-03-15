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
import { TestsCardsList } from './TestsCardsList/TestsCardsList';
import { Breadcrumbs, Modal, Tabs } from 'ui-kit';

import s from './TestsPageComponent.module.scss';

const tabs = [
  {
    id: 1,
    name: 'testsMain.availableTests',
    component: '',
  },
  {
    id: 2,
    name: 'testsMain.completedTests',
    component: '',
  },
];

export interface Item {
  id: number;
  author: string;
  name: string;
  description: string;
  blockNames: string[];
  questionsTotalCount: number;
  timeForCompletionInMs: number;
  percentageToPass: number;
  wasStarted: boolean;
  nextRetakeDate: null | Date;
  testStatus?: string;
  avialableIn?: string;
}

const array = [
  {
    id: 1,
    name: 'FullStuck Final Test AVAILABLE',
    description:
      'Welcome to Star class LMS! Study anytime and anywhere with us and discover the unknown.',
    blockNames: ['HTML', 'CSS', 'JAVASCRIPT'],
    author: 'GoIt',
    questionsTotalCount: 100,
    timeForCompletionInMs: 12000000,
    percentageToPass: 0.5,
    wasStarted: false,
    nextRetakeDate: null,
  },
  {
    id: 2,
    name: 'FullStuck Final Test COMPLETED',
    description: 'Welcome to Star class LMS!',
    blockNames: ['HTML', 'CSS', 'REACT', 'JAVASCRIPT'],
    author: 'GoIt',
    questionsTotalCount: 150,
    timeForCompletionInMs: 900000,
    percentageToPass: 0.5,
    wasStarted: true,
    nextRetakeDate: null,
  },
  {
    id: 3,
    name: 'FullStuck Final Test COMPLETED',
    description: 'Welcome to Star class LMS!',
    blockNames: ['HTML', 'CSS', 'REACT', 'JAVASCRIPT'],
    author: 'GoIt',
    questionsTotalCount: 150,
    timeForCompletionInMs: 900000,
    percentageToPass: 0.5,
    wasStarted: false,
    nextRetakeDate: new Date('2023-03-29'),
  },
  {
    id: 4,
    name: 'FullStuck Final Test AVAILABLE',
    description:
      'Welcome to Star class LMS! Study anytime and anywhere with us and discover the unknown.',
    blockNames: ['HTML', 'CSS', 'JAVASCRIPT'],
    author: 'GoIt',
    questionsTotalCount: 100,
    timeForCompletionInMs: 12000000,
    percentageToPass: 0.5,
    wasStarted: false,
    nextRetakeDate: null,
  },
  {
    id: 5,
    name: 'FullStuck Final Test COMPLETED',
    description: 'Welcome to Star class LMS!',
    blockNames: ['HTML', 'CSS', 'REACT', 'JAVASCRIPT'],
    author: 'GoIt',
    questionsTotalCount: 150,
    timeForCompletionInMs: 900000,
    percentageToPass: 0.5,
    wasStarted: false,
    nextRetakeDate: new Date('2023-03-20'),
  },
  {
    id: 6,
    name: 'FullStuck Final Test COMPLETED',
    description: 'Welcome to Star class LMS!',
    blockNames: ['HTML', 'CSS', 'REACT', 'JAVASCRIPT'],
    author: 'GoIt',
    questionsTotalCount: 150,
    timeForCompletionInMs: 900000,
    percentageToPass: 0.5,
    wasStarted: true,
    nextRetakeDate: null,
  },
  {
    id: 7,
    name: 'FullStuck Final Test COMPLETED',
    description: 'Welcome to Star class LMS!',
    blockNames: ['HTML', 'CSS', 'REACT', 'JAVASCRIPT'],
    author: 'GoIt',
    questionsTotalCount: 150,
    timeForCompletionInMs: 900000,
    percentageToPass: 0.5,
    wasStarted: true,
    nextRetakeDate: new Date('2023-03-31'),
  },
];

export const TestsPageComponent = () => {
  const { theme }: IThemeContext = useThemeContext();

  const [currentTab, setCurrentTab] = useState(tabs[0].id);
  const [testsArray, setTestsArray] = useState<Item[]>([]);
  const [size, setSize] = useState<'large' | 'small'>('large');
  const [isShowModal, setIsShowModal] = useState(false);

  const dispatch = useAppDispatch();
  const step = useAppSelector(getStep);
  const isAuth = useAppSelector(getIsAuth);

  const location = useLocation();
  const registerRoute = location?.state?.from?.pathname;

  useEffect(() => {
    // setTestsArray(array.filter((item) => item.id === currentTab));
    setTestsArray(array);
  }, [currentTab]);

  useEffect(() => {
    if (registerRoute === '/register' && step >= 3 && isAuth) {
      setIsShowModal(true);
    }
  }, [registerRoute, step, isAuth]);

  const handleClickModal = () => {
    setIsShowModal((prevState) => !prevState);
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
      <TestsCardsList size={size} testsArray={testsArray} />
      {isShowModal && (
        <Modal isShowModal={isShowModal} onClick={handleClickModal} isCloseIcon>
          <ModalCongrats onClick={handleClickModal} />
        </Modal>
      )}
    </div>
  );
};
