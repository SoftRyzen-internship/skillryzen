import { useTranslation } from 'react-i18next';

import { useThemeContext } from 'context/themeContext';

import { UserProfile } from './UserProfile';
import { UserTests } from './UserTests';
import { UserAchievementsList } from './UserAchievementsList';

import { IThemeContext } from 'constans/types';

import s from './ProfilePageComponent.module.scss';
import { ScrollContainer } from 'ui-kit';
import { useEffect, useState } from 'react';
import { getCompletedTests } from 'redux/testingInfo/testingInfoOperations';

interface Item {
  id: number;
  author: string;
  name: string;
  description: string;
  blockNames: string[];
  questions: [];
  timeForCompletionInMs: number;
  isPassed: boolean;
  percentageOfCorrectAnswers: number;
  retakeAttempt: number;
  finishedAt: string;
  startedAt: string;
}

export const ProfilePageComponent = () => {
  const { theme }: IThemeContext = useThemeContext();
  const { t } = useTranslation();

  return (
    <ScrollContainer>
      <div className={s.profilePage}>
        <UserProfile theme={theme} />
        <UserAchievementsList theme={theme} />
        <UserTests theme={theme} />
      </div>
    </ScrollContainer>
  );
};
