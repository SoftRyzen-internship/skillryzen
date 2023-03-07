import { useThemeContext } from 'context/themeContext';
import { IThemeContext } from 'modules/common/types';
import s from './Skeleton.module.scss';

interface SkeletonProps {
  length?: number;
  value?: string;
  classname?: string;
}

export const Skeleton = ({ length, value }: SkeletonProps) => {
  const { theme }: IThemeContext = useThemeContext();

  const skeletonArray = Array.from({ length: length }, () => ({
    value: value,
  }));
  return (
    <>
      {skeletonArray.map((answer, index) => (
        <li
          key={index}
          className={
            theme === 'dark' ? s.skeletonItemDark : s.skeletonItemLight
          }
        >
          <p className={s.skeletonText}>{answer.value}</p>
        </li>
      ))}
    </>
  );
};
