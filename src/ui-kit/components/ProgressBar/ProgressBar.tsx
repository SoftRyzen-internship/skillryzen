import { createArray } from 'utils/createArray';
import { ICONS } from 'ui-kit/icons';
import { Theme } from 'modules/common/types';

import s from './ProgressBar.module.scss';
import { useAppSelector } from 'hooks/hook';

interface Props {
  theme?: Theme;
}

export const ProgressBar = ({ theme = 'dark' }: Props) => {
  const number = useAppSelector((state) => state.testingInfo.number);
  const array = createArray(10);

  return (
    <div className={s.progressBar}>
      <p
        className={`${s.progressBar__info} ${s[`progressBar__info--${theme}`]}`}
      >
        Question {number}/10
      </p>
      <div className={s.progressBar__wrapper}>
        <ul className={s.progressBar__list}>
          {array.map((item) => (
            <li
              key={item}
              className={`${s.progressBar__line} ${
                item < number && s['progressBar__line--right']
              }`}
            ></li>
          ))}
        </ul>
        <ICONS.FLAG_ONE
          className={`${s.progressBar__icon} ${
            s[`progressBar__icon--${theme}`]
          }`}
        />
      </div>
    </div>
  );
};

// для демо-версії

// interface Answer {
//   number: number;
//   isRight: boolean;
// }

// const [arrayOfAnswers, setArrayOfAnswers] = useState<Answer[]>([]);

// useEffect(() => {
//   if (currentNumber === 1) return;
//   setArrayOfAnswers((prevState) => [
//     ...prevState,
//     { number: currentNumber - 1, isRight: isPrevRight },
//   ]);
// }, [currentNumber, isPrevRight]);

// const checkRightAnswer = (item: number) => {
//   if (item > arrayOfAnswers.length || arrayOfAnswers.length === 0) return '';
//   const foundItem = arrayOfAnswers.find((answer) => answer.number === item);
//   if (!foundItem) return;
//   if (foundItem.isRight) return 'progressBar__line--right';
//   return 'progressBar__line--false';
// };

// className={`${s.progressBar__line} ${
//   s[`${checkRightAnswer(item)}`]
// }`}
