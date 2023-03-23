import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

import { ICONS } from 'ui-kit/icons';
import {
  getTestId,
  getTotalCount,
} from 'redux/testingInfo/testingInfoSelectors';
import {
  removeResults,
  removeResultsBeforeStart,
} from 'redux/testingInfo/testingInfoSlise';
import { useAppDispatch, useAppSelector } from 'hooks/hook';
import { ROUTES } from 'routes/routes.const';

import { Checkbox, MainButton } from 'ui-kit';

import s from './ModalStartTest.module.scss';

export const ModalStartTest = () => {
  const { t } = useTranslation();
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const total = useAppSelector(getTotalCount);
  const testId = useAppSelector(getTestId);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClickBtn = () => {
    if (total) {
      dispatch(removeResults());
    }
    if (testId) {
      dispatch(removeResultsBeforeStart());
    }
    navigate(ROUTES.TESTING);
  };

  const handleChange = () => {
    setAcceptedTerms(prev => !prev);
  };


  return (
    <div className={s.container}>
      <h3 className={s.modal__title}>
        <span className={s['modal__title--accent']}>Правила</span>
        <br /> проходження тестування
      </h3>
      <ul className={s.modal__list}>
        <li className={s.modal__item}>
          <div className={s.icon}>
            <ICONS.AGREEMENT />
          </div>
          <p>
            Перед початком тесту переконайся, що у тебе є стабільне підключення
            до Інтернету та достатньо часу для його проходження.
          </p>
        </li>
        <li className={s.modal__item}>
          <div className={s.icon}>
            <ICONS.AGREEMENT />
          </div>
          <p> При закритті вкладки тест автоматично фейлиться. </p>
        </li>
        <li className={s.modal__item}>
          <div className={s.icon}>
            <ICONS.AGREEMENT />
          </div>
          <p> Зверни увагу на те, що тест можна перездати тільки один раз. </p>
        </li>
      </ul>
      <Checkbox
        name='startTestAgreement'
        label='З правилами ознайомився'
        type='filter'
        onChange={handleChange}
        labelClassName={s.modal__checkbox}
      />
      <MainButton
        type='button'
        text={t('finalTestInfo.startModal')}
        disabled={!acceptedTerms}
        onClick={handleClickBtn}
        size='small'
        color='blue'
      />
    </div>
  );
};
