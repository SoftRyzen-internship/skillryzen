import { FC, useState } from 'react';
import s from './Accordion.module.scss';
import { Checkbox } from 'ui-kit';
import { ICONS } from 'ui-kit/icons';
type AccordionItemProps = {
  id: string;
  title: string;
  children: React.ReactNode;
  isIcon?: boolean;
  isMargin?: boolean;
};

type AccordionListProps = {
  items: string[];
};

const AccordionList: React.FC<AccordionListProps> = ({ items }) => {
  return (
    <ul className={s.list}>
      {items.map((item) => (
        <li className={s.listItem} key={item}>
          <Checkbox
            id='checkbox'
            name='checkbox'
            type='filter'
            label={item}
            // onChange={handleChange}
            labelClassName={s.checkboxLabel}
          />
        </li>
      ))}
    </ul>
  );
};

const AccordionItem: React.FC<AccordionItemProps> = ({
  id,
  title,
  isIcon,
  isMargin,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${isMargin ? s.accordionItemMargin : s.accordionItem}`}>
      <button
        className={s.accordionButton}
        type='button'
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`accordion-collapse-${id}`}
      >
        {isIcon &&
          (!isOpen ? <ICONS.CHEVRON_DOWN /> : <ICONS.CHEVRON_UP_SMALL />)}
        <span className={s.titleFilter}>{title}</span>
      </button>
      <div
        className={`${s.accordionCollapse} ${isOpen ? s.show : ''}`}
        id={`accordion-collapse-${id}`}
      >
        {children}
      </div>
    </div>
  );
};

type AccordionProps = {
  data: { title: string; items: string[] }[];
  isIcon?: boolean;
  isList?: boolean;
  isMargin?: boolean;
};

export const Accordion: FC<AccordionProps> = ({
  data,
  isIcon,
  isList,
  isMargin,
}) => {
  return (
    <div className={s.accordionWrapper}>
      <div className={s.accordion}>
        <p className={s.accordionTitle}>Filters</p>
        {data.map((item, index) => (
          <AccordionItem
            key={index}
            id={`accordion-${index}`}
            title={item.title}
            isIcon={isIcon}
            isMargin={isMargin}
          >
            {isList && <AccordionList items={item.items} />}
          </AccordionItem>
        ))}
      </div>
    </div>
  );
};
