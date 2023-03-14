export const getTestId = (state) => state.testingInfo.testId;
export const getTestName = (state) => state.testingInfo.name;
export const getQuestionId = (state) => state.testingInfo.questionId;
export const getQuestionNumber = (state) => state.testingInfo.number;
export const getQuestionTitle = (state) => state.testingInfo.title;
export const getQuestionPossibleAnswers = (state) =>
  state.testingInfo.possibleAnswers;
export const getHasNextQuestion = (state) => state.testingInfo.hasNextQuestion;
export const getTotalCount = (state) => state.testingInfo.questionsTotalCount;
export const getTotalTime = (state) => state.testingInfo.totalTime;
export const getCurrentTime = (state) => state.testingInfo.currentTime;
export const getResultsTestId = (state) => state.testingInfo.results.testId;
export const getResultTime = (state) => state.testingInfo.results.time;
export const getTimeLeft = (state) => state.testingInfo.results.timeLeft;
export const getPercentageOfCorrectAnswers = (state) =>
  state.testingInfo.results.percentageOfCorrectAnswers;
export const getIsPassed = (state) => state.testingInfo.results.isPassed;
export const getIsLoading = (state) => state.testingInfo.isLoading;
export const getError = (state) => state.testingInfo.error;
