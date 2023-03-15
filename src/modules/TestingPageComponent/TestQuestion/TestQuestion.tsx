import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015, vs } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { MainButton, RadioButton } from 'ui-kit';
import { IThemeContext } from 'constans/types';
import {
  answerTest,
  finishTest,
} from 'redux/testingInfo/testingInfoOperations';
import { useAppDispatch, useAppSelector } from 'hooks/hook';
import {
  getResultTime,
  getResultsTestId,
} from 'redux/testingInfo/testingInfoSelectors';
import { useThemeContext } from 'context/themeContext';
import { Skeleton } from 'ui-kit/components/Skeleton/Skeleton';

import { formatCode } from 'utils/formatCode';

import { ROUTES } from 'routes/routes.const';

import s from './TestQuestion.module.scss';

const transparentBackground = {
  ...vs2015,
  hljs: {
    ...vs2015.hljs,
    background: 'transparent',
  },
};

const transparentBackgroundLight = {
  ...vs,
  hljs: {
    ...vs.hljs,
    background: 'transparent',
  },
};

export const TestQuestion = () => {
  const {
    questionId,
    title,
    possibleAnswers,
    codePiece,
    isLoading,
    number,
    questionsTotalCount,
  } = useAppSelector((state) => state.testingInfo);

  const time = useAppSelector(getResultTime);
  const testResultId = useAppSelector(getResultsTestId);

  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const { theme }: IThemeContext = useThemeContext();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleAnswer = () => {
    dispatch(answerTest(selectedAnswer));
    setSelectedAnswer('');
  };

  useEffect(() => {
    if (!time) return;
    dispatch(finishTest());
  }, [time, dispatch]);

  useEffect(() => {
    if (!testResultId) return;
    navigate(ROUTES.TEST_END);
  }, [testResultId, navigate]);

  return (
    <div className={s.testWrapper}>
      <h2
        className={
          isLoading
            ? s.testTitleHidden
            : `${s.testTitle} ${s[`testTitle--${theme}`]}`
        }
      >
        {title}
      </h2>
      <div className={s.questionWrapper}>
        {codePiece && !isLoading && (
          <pre className={`${s.questionCode} ${s[`questionCode--${theme}`]}`}>
            <SyntaxHighlighter
              language='javascript'
              style={
                theme === 'dark'
                  ? transparentBackground
                  : transparentBackgroundLight
              }
            >
              {formatCode(codePiece)}
            </SyntaxHighlighter>
          </pre>
        )}
        <ul className={s.questionList}>
          {possibleAnswers &&
            !isLoading &&
            possibleAnswers.map((answer, index) => (
              <li key={index}>
                <RadioButton
                  theme={theme}
                  state={selectedAnswer === answer.label && 'checked'}
                  type='PassTest'
                  name='answers'
                  value={answer.label}
                  checked={selectedAnswer === answer.label}
                  onChange={(e) => setSelectedAnswer(e.target.value)}
                  label={answer.value}
                />
              </li>
            ))}
          {isLoading && number < questionsTotalCount && (
            <Skeleton length={4} value='skeleton' />
          )}
        </ul>
      </div>
      {questionId && !isLoading && (
        <div className={s.buttonWrapper}>
          <MainButton
            type='button'
            text='Answer'
            onClick={handleAnswer}
            size='small'
            color='blue'
            disabled={!selectedAnswer}
          />
        </div>
      )}
    </div>
  );
};

// Ця логіка на демо-версію

// type State = 'checked' | 'wrong' | 'right' | '';

// const [sendAnswer, setSendAnswer] = useState<string | null>(null);

// const chooseState = (value: string): State => {
//   if (
//     (sendAnswer && sendAnswer === value && rightAnswer === value) ||
//     (sendAnswer && rightAnswer === value)
//   ) {
//     return 'right';
//   } else if (sendAnswer && sendAnswer === value) {
//     return 'wrong';
//   } else if (!sendAnswer && selectedAnswer === value) {
//     return 'checked';
//   } else {
//     return '';
//   }
// };

// state={chooseState(answer.value)}
