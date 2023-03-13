import { MainButton } from 'ui-kit';
import { ICONS } from 'ui-kit/icons';
import s from './FeedbackTemplateCongrat.module.scss';

interface ModalProps {
  title1?: { text: string; className: string };
  title2?: { text: string; className: string };
  handleClickModal: () => void;
}

export const FeedbackTemplateCongrat = ({
  title1,
  title2,
  handleClickModal,
}: ModalProps) => {
  return (
    <div className={`${s.container} `}>
      <ICONS.CHECK_VALIDATION className={s.checkValidation} />
      <p className={title1.className}>{title1.text}</p>
      <p className={title2.className}>{title2.text}</p>
      <div className={s.btnContainer}>
        <MainButton
          type='button'
          text='OK'
          onClick={handleClickModal}
          size='modal'
          color='blue'
        />
      </div>
    </div>
  );
};
