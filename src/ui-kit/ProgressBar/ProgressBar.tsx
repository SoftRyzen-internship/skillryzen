import { createArray } from 'utils/createArray';
import { Theme } from 'modules/common/types';
import { ICONS } from 'theme';

import s from './ProgressBar.module.scss';


// interface Answer {
//   number: number;
//   isRight: boolean;
// }

interface Props {
  currentNumber: number;
  totalNumber: number;
  isPrevRight: boolean;
  theme?: Theme;
}

export const ProgressBar = ({
  currentNumber,
  totalNumber,
  isPrevRight,
  theme='dark'
}: Props) => {
  const array = createArray(totalNumber);
  
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

  return (
    <div className={s.progressBar}>
      <p className={`${s.progressBar__info} ${s[`progressBar__info--${theme}`]}`}>
        Question {currentNumber}/{totalNumber}
      </p>
      <div className={s.progressBar__wrapper}>
        <ul className={s.progressBar__list}>
          {array.map((item) => (
            <li
              key={item}
              className={`${s.progressBar__line} ${
                item < currentNumber && s['progressBar__line--right']
              }`}
              // className={`${s.progressBar__line} ${
              //   s[`${checkRightAnswer(item)}`]
              // }`}
            ></li>
          ))}
        </ul>
        <ICONS.FLAG_ONE className={`${s.progressBar__icon} ${s[`progressBar__icon--${theme}`]}`} />
      </div>
    </div>
  );
};
