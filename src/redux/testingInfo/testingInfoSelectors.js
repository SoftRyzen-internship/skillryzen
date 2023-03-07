export const getTestId = (state) => state.testingInfo.testId;
export const getQuestionId = (state) => state.testingInfo.questionId;
export const getQuestionNumber = (state) => state.testingInfo.number;
export const getQuestionTitle = (state) => state.testingInfo.title;
export const getQuestionPossibleAnswers = (state) =>
  state.testingInfo.possibleAnswers;
export const getHasNextQuestion = (state) => state.testingInfo.hasNextQuestion;
export const getTotalCount = (state) => state.testingInfo.questionsTotalCount;
export const getResultsTestId = (state) => state.testingInfo.results.testId;
export const getTimeTest = (state) => state.testingInfo.results.time;
export const getPercentageOfCorrectAnswers = (state) =>
  state.testingInfo.results.percentageOfCorrectAnswers;
export const getIsLoading = (state) => state.testingInfo.isLoading;
export const getError = (state) => state.testingInfo.error;
