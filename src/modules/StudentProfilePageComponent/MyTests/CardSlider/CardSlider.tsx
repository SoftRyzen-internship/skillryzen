import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Card, PaginationButton } from 'ui-kit';

import { Theme, UserTests } from 'modules/common/types';

import s from './CardSlider.module.scss';
import { Link } from 'react-router-dom';
import { ROUTES } from 'routes/routes.const';

interface CardSliderProps {
  cards: UserTests[];
  cardWidth: number;
  cardGap: number;
  theme?: Theme;
}

export const CardSlider = ({
  cards,
  cardWidth,
  cardGap,
  theme,
}: CardSliderProps) => {
  const { t } = useTranslation();

  const cardOffset = cardWidth + cardGap;
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [visibleCards, setVisibleCards] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setSliderWidth(0);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const slider = containerRef.current;
    if (slider) {
      const visibleCards = Math.floor(slider.offsetWidth / cardOffset);
      const sliderWidth = visibleCards * cardOffset - cardGap;
      setSliderWidth(sliderWidth);
      setVisibleCards(visibleCards);
    }
  }, [cardGap, cardOffset, width]);

  const handleNextSlide = () => {
    if (currentIndex >= cards.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrevSlide = () => {
    if (currentIndex <= 0) {
      setCurrentIndex(cards.length - 1);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };
  return (
    <div ref={containerRef} className={s.sliderContainer}>
      <div
        className={s.slider}
        style={{
          width: `${sliderWidth + 8}px`,
        }}
      >
        <ul
          className={s.cardList}
          style={{
            transform: `translateX(-${currentIndex * cardOffset}px)`,
          }}
        >
          {cards.map((test, index) => {
            return (
              <li key={index}>
                <Link to={`${ROUTES.CERTIFICATION}/fullstack_final`}>
                  <Card
                    className={`${s[`card--${theme}`]}`}
                    type='info'
                    size='small'
                    item={{
                      title: test.title,
                      text: test.text,
                      fields: test.fields,
                      number:
                        test.number + ' ' + t('testsMain.numberOfQuestions'),
                      time: test.time,
                    }}
                    theme={theme}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <ul className={s.buttonList}>
        <li className={s.buttonItem}>
          <PaginationButton
            className={`${s[`button--${theme}`]}`}
            onClick={handlePrevSlide}
            type='button'
            disabled={currentIndex <= 0}
            icon='left'
            theme={theme}
          />
        </li>

        <li className={s.buttonItem}>
          <PaginationButton
            className={`${s[`button--${theme}`]}`}
            onClick={handleNextSlide}
            type='button'
            disabled={currentIndex >= cards.length - visibleCards}
            icon='right'
            theme={theme}
          />
        </li>
      </ul>
    </div>
  );
};
