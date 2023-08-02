import { FeedbackTemplateCongrat } from 'modules/Modals/FeedbackTemplateCongrat/FeedbackTemplateCongrat';
import s from './FeedbackCongrat.module.scss';
import { useTranslation } from 'react-i18next';
import { useThemeContext } from 'context/themeContext';
import { IThemeContext } from 'constants/types';

interface FeedbackModalPageProps {
  handleClickModal: () => void;
}

export const FeedbackCongrat = ({
  handleClickModal,
}: FeedbackModalPageProps) => {
  const { t } = useTranslation();
  const { theme }: IThemeContext = useThemeContext();
  return (
    <>
      <FeedbackTemplateCongrat
        title1={{
          text: t('feedbackModal.title1'),
          className: `${s.titleModal} ${s[`titleModal--${theme}`]}`,
        }}
        title2={{
          text: t('feedbackModal.title2'),
          className: `${s.titleModal} ${s[`titleModal--${theme}`]}`,
        }}
        handleClickModal={handleClickModal}
      />
    </>
  );
};
