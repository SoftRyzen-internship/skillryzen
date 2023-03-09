import { useTranslation } from 'react-i18next';

import { ICONS } from 'ui-kit/icons';

import { IThemeContext } from 'constans/types';
import { useThemeContext } from 'context/themeContext';
import { IconButton, Tabs } from 'ui-kit/index';
import { Accordion } from 'ui-kit/components/Accordion/Accordion';

import s from './TestsFilter.module.scss';
import { useEffect, useRef, useState } from 'react';
import { filterData } from 'modules/TestsPageComponent/TestsFilter/filterData';

interface TestFilterProps {
  size: string;
  setSize: React.Dispatch<React.SetStateAction<string>>;
}

const tabs = [
  {
    id: 1,
    name: 'testsMain.allTests',
    component: '',
  },
];

export const TestsFilter = ({ size, setSize }: TestFilterProps) => {
  const { theme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [currentTab, setCurrentTab] = useState(tabs[0].id);
  const accordionRef = useRef<HTMLDivElement>(null);
  const handleFilter = () => {
    setShowFilter(!showFilter);
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        accordionRef.current &&
        !accordionRef.current.contains(event.target as Node)
      ) {
        setShowFilter(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [accordionRef]);
  const handleChangeTab = (tab: number) => setCurrentTab(tab);

  return (
    <div className={s.testsFilter}>
      <Tabs
        currentTab={currentTab}
        tabs={tabs}
        changeTab={handleChangeTab}
        theme={theme}
      />
      <div className={s.testsFilter__wrapper} ref={accordionRef}>
        <IconButton
          className={s.itemButton}
          theme={theme}
          onClick={() => setSize('small')}
          color={size === 'small' ? 'blue' : 'black'}
          icon='grid2'
        />
        <IconButton
          className={s.itemButton}
          theme={theme}
          onClick={() => setSize('large')}
          color={size === 'large' ? 'blue' : 'black'}
          icon='grid4'
        />
        <button
          onClick={handleFilter}
          className={`${s.itemButton} ${s.testsFilter__filter} ${
            s[`testsFilter__filter--${theme}`]
          }`}
        >
          <ICONS.FILTER_TWO className={s.testsFilter__icon} />
          <span>{t('testsMain.filter')}</span>
        </button>
        {showFilter && <Accordion data={filterData} isIcon isList isMargin />}
      </div>
    </div>
  );
};
