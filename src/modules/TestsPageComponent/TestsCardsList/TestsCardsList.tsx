import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { TestCard } from 'ui-kit';
import { Item } from '../TestsPageComponent';
import { IThemeContext } from 'constans/types';
import { useThemeContext } from 'context/themeContext';
import { setTemplateId } from 'redux/testingInfo/testingInfoSlise';
import { useAppDispatch } from 'hooks/hook';

import s from './TestsCardsList.module.scss';

interface TestsList {
  size: 'large' | 'small';
  testsArray: Item[];
}

export const TestsCardsList = ({ size, testsArray }: TestsList) => {
  const { theme }: IThemeContext = useThemeContext();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const templateHandler = (id: string) => {
    dispatch(setTemplateId('6ba378ad-82a6-4652-9298-0d4adaa9d2f3'));
  };

  return (
    <ul className={`${s[`testsList--${size}`]}`}>
      {testsArray.map(
        ({
          id,
          author,
          name,
          description,
          blockNames,
          questionsTotalCount,
          timeForCompletionInMs,
          percentageToPass,
          wasStarted,
          nextRetakeDate,
        }) => (
          <li key={id}>
            <Link
              to='fullstack_final'
              onClick={() => templateHandler(id.toString())}
              state={{
                author,
                name,
                description,
                blockNames,
                questionsTotalCount,
                timeForCompletionInMs,
              }}
            >
              <TestCard
                size={size}
                item={{
                  author,
                  title: name,
                  text: description,
                  fields: blockNames,
                  number: questionsTotalCount,
                  time: timeForCompletionInMs / 60000,
                }}
                theme={theme}
              />
            </Link>
          </li>
        )
      )}
    </ul>
  );
};
