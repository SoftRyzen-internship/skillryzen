import { RootState } from 'redux/store';

export const getTestId = (state: RootState) => state.testingInfo.testId;
export const getTemplateId = (state: RootState) => state.testingInfo.templateId;
export const getTestName = (state: RootState) => state.testingInfo.name;
export const getQuestionId = (state: RootState) => state.testingInfo.questionId;
export const getQuestionNumber = (state: RootState) => state.testingInfo.number;
export const getQuestionTitle = (state: RootState) => state.testingInfo.title;
export const getQuestionPossibleAnswers = (state: RootState) =>
  state.testingInfo.possibleAnswers;
export const getHasNextQuestion = (state: RootState) =>
  state.testingInfo.hasNextQuestion;
export const getTotalCount = (state: RootState) =>
  state.testingInfo.questionsTotalCount;
export const getTotalTime = (state: RootState) => state.testingInfo.totalTime;
export const getCurrentTime = (state: RootState) =>
  state.testingInfo.currentTime;
export const getResultsTestId = (state: RootState) =>
  state.testingInfo.results.testId;
export const getResultTime = (state: RootState) =>
  state.testingInfo.results.time;
export const getTimeLeft = (state: RootState) =>
  state.testingInfo.results.timeLeft;
export const getNumberOfCorrectAnswers = (state: RootState) =>
  state.testingInfo.results.numberOfCorrectAnswers;
export const getIsPassed = (state: RootState) =>
  state.testingInfo.results.isPassed;
export const getIsLoading = (state: RootState) => state.testingInfo.isLoading;
export const getError = (state: RootState) => state.testingInfo.error;
