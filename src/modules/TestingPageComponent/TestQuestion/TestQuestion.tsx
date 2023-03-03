import { useState } from 'react';
import { useNavigate } from 'react-router';

import { Info } from '../TestingPageComponent';

import { AuthButton, RadioButton } from 'ui-kit';
import { IThemeContext } from 'modules/common/types';
import { useThemeContext } from 'context/themeContext';
import { answerQuestion } from 'services/axiosConfig';

import s from './TestQuestion.module.scss';

interface TestQuestionProps {
  testId: string;
  questionId: string;
  number: number;
  title: string;
  possibleAnswers: {
    value: string;
    title: string;
    label: string;
  }[];
  onNextQuestion: React.Dispatch<React.SetStateAction<Info>>;
}

// Ця логіка на демо-версію
// type State = 'checked' | 'wrong' | 'right' | '';

export const TestQuestion = ({
  testId,
  questionId,
  number,
  title,
  possibleAnswers,
  onNextQuestion,
}: TestQuestionProps) => {
  const navigate = useNavigate();
  const { theme }: IThemeContext = useThemeContext();
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  // const [sendAnswer, setSendAnswer] = useState<string | null>(null);

  const handleAnswer = () => {
    answerQuestion({ testId, questionId, selectedAnswer })
      .then((data) => {
        if (!data.hasNextQuestion) {
          navigate('/student/certification');
        }
        console.log(number);
        console.log(data);
        onNextQuestion({
          number: number + 1,
          questionId: data.nextQuestion.id,
          title: data.nextQuestion.title,
          possibleAnswers: data.nextQuestion.possibleAnswers,
        });
        setSelectedAnswer('');
      })
      .catch((error) => console.log(error));
  };

  // Ця логіка на демо-версію
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

  return (
    <div className={s.testWrapper}>
      <h2 className={`${s.testTitle} ${s[`testTitle--${theme}`]}`}>{title}</h2>
      <div className={s.questionWrapper}>
        {/* <div className={s.questionCode}>Code</div> */}
        <ul className={s.questionList}>
          {possibleAnswers.map((answer, index) => (
            <li key={index}>
              <RadioButton
                theme={theme}
                // state={chooseState(answer.value)}
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
        </ul>
      </div>
      <div className={s.buttonWrapper}>
        <AuthButton
          type='button'
          text='Answer'
          onClick={handleAnswer}
          size='small'
          color='blue'
          disabled={!selectedAnswer}
        />
      </div>
    </div>
  );
};
