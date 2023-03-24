import { Checkbox } from '../Checkbox';
import s from './FilterList.module.scss';

interface FilterProps {
    theme: string;
    data: string[];
    name: string;
    showFilter: boolean;
    setFilter: React.Dispatch<React.SetStateAction<string[]>>;
  }

export const FilterList = ({theme ='dark', data, name, showFilter, setFilter}: FilterProps) => {
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.checked
          ? setFilter(prev => [...prev, e.target.value])
          : setFilter(prev => prev.filter(item => item !== e.target.value));
      };

  return (
    <ul
      className={`${s[`filter__list--${theme}`]} ${
        !showFilter && s['filter__list--hidden']
      }`}
    >
      {data.map((item, index) => (
        <li key={index} className={`${s[`filter__item--${theme}`]}`}>
          <Checkbox
            name={`filter${name}`}
            value={item}
            label={item}
            type='filter'
            onChange={handleChange}
            labelClassName={`${s[`filter__checkbox--${theme}`]}`}
          />
        </li>
      ))}
    </ul>
  );
};
