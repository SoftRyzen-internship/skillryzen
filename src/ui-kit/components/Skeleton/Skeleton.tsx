import { useThemeContext } from 'context/themeContext';
import { IThemeContext } from 'constants/types';
import s from './Skeleton.module.scss';

interface SkeletonProps {
  length?: number;
  value?: string;
  className?: string;
}

export const Skeleton = ({ length, value, className }: SkeletonProps) => {
  const { theme }: IThemeContext = useThemeContext();

  const skeletonArray = Array.from({ length: length }, () => ({
    value: value,
  }));
  return (
    <>
      {skeletonArray.map((answer, index) => (
        <li
          key={index}
          className={`${className} ${
            theme === 'dark' ? s.skeletonItemDark : s.skeletonItemLight
          }
             `}
        >
          <p className={s.skeletonText}>{answer.value}</p>
        </li>
      ))}
    </>
  );
};
