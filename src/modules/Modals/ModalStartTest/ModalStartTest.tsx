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
        <span className={s['modal__title--accent']}>{t('modalStartTest.rulesFirstPart')}</span>
        <br /> {t('modalStartTest.rulesSecondPart')}
      </h3>
      <ul className={s.modal__list}>
        <li className={s.modal__item}>
          <div className={s.icon}>
            <ICONS.AGREEMENT />
          </div>
          <p>{t('modalStartTest.ruleFirst')}</p>
        </li>
        <li className={s.modal__item}>
          <div className={s.icon}>
            <ICONS.AGREEMENT />
          </div>
          <p> {t('modalStartTest.ruleSecond')} </p>
        </li>
        <li className={s.modal__item}>
          <div className={s.icon}>
            <ICONS.AGREEMENT />
          </div>
          <p> {t('modalStartTest.ruleThird')} </p>
        </li>
      </ul>
      <Checkbox
        name='startTestAgreement'
        label={t('modalStartTest.agree')} 
        type='filter'
        onChange={handleChange}
        labelClassName={s.modal__checkbox}
      />
      <MainButton
        type='button'
        text={t('modalStartTest.start')}
        disabled={!acceptedTerms}
        onClick={handleClickBtn}
        size='small'
        color='blue'
      />
    </div>
  );
};
