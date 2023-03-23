import { ICONS } from 'ui-kit/icons';
import { IMAGES } from 'ui-kit/images';
import { TestInfo } from 'modules/TestsPageComponent/CompletedTestsList/CompletedTestsList';
import { FinalTestInfo } from 'modules/TestInfo/FinalTestInfo/FinalTestInfo';

import s from './ModaltestsInfo.module.scss';

interface ModalProps {
  testInfo: TestInfo;
}

export const ModalTestsInfo = ({ testInfo}: ModalProps) => {
  return (
    <div className={s.container}>
      <FinalTestInfo
        image={IMAGES.JAVA_SCRIPT}
        imageProps={{
          alt: 'Java Script',
          width: '80',
          height: '80',
        }}
        title={testInfo.name}
        correctAnswers={Math.floor(
          testInfo.percentageOfCorrectAnswers * testInfo.questions
        )}
        totalQuestions={testInfo.questions}
        timeSpent={testInfo.timeSpent}
        isPassed={testInfo.isPassed}
        iconAnswers={ICONS.CHECK_SMALL}
        iconTime={ICONS.CLOCK}
        iconDate={ICONS.DATE}
        finishTest
        date={testInfo.date}
        modal={true}
      />
    </div>
  );
};
