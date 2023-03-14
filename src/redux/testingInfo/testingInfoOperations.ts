import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';
import { axiosInstance } from 'services/axiosConfig';

interface Answer {
  testId: string;
  questionId: string;
  selectedAnswer: string;
}

interface AnswerResponse {
  questionId: string;
  title: string;
  possibleAnswers: {
    value: string;
    title: string;
    label: string;
  }[];
  codePiece: null | string;
  hasNextQuestion: boolean;
}

interface NextQuestion {
  id: string;
  title: string;
  possibleAnswers: {
    value: string;
    title: string;
    label: string;
  }[];
  codePiece: null | string;
}

interface TemplateResponse {
  id: string;
  name: string;
  timeForCompletionInMs: number;
  questionsTotalCount: number;
  nextQuestion: NextQuestion;
  hasNextQuestion: boolean;
}

export interface FinishResponse {
  testId: string;
  percentageOfCorrectAnswers: number;
  isPassed: boolean;
}

export const getTestTemplateApi = (templateId: string) =>
  axiosInstance
    .post(`user-test/start/${templateId}`)
    .then((response) => response.data);

export const answerTestApi = ({ testId, questionId, selectedAnswer }: Answer) =>
  axiosInstance
    .post(`user-test/${testId}/answer-question/by-label`, {
      questionId: questionId,
      labels: [selectedAnswer],
    })
    .then((response) => response.data);

export const finishTestApi = (testId: string) =>
  axiosInstance
    .post(`user-test/${testId}/finish`)
    .then((response) => response.data);


export const getTestTemplate = createAsyncThunk<
  TemplateResponse,
  null,
  { rejectValue: string; state: RootState }
>(
  'testingInfo/getTestTemplate',
  async function (_, { rejectWithValue, getState }) {
    const { templateId } = getState().testingInfo;
    try {
      const data = await getTestTemplateApi(templateId);
      data.timeForCompletionInMs = data.timeForCompletionInMs / 1000;
      data.nextQuestion.codePiece = null;
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.errors.code);
    }
  }
);

export const answerTest = createAsyncThunk<
  AnswerResponse,
  string,
  { rejectValue: string; state: RootState }
>(
  'testingInfo/answerTest',
  async (selectedAnswer, { rejectWithValue, getState }) => {
    const { testId, questionId } = getState().testingInfo;

    try {
      const data = await answerTestApi({ testId, questionId, selectedAnswer });
      const { hasNextQuestion, nextQuestion } = data;
      return hasNextQuestion
        ? {
            questionId: nextQuestion.id,
            title: nextQuestion.title,
            possibleAnswers: nextQuestion.possibleAnswers,
            codePiece: nextQuestion.codePiece,
            hasNextQuestion: hasNextQuestion,
          }
        : {
            questionId: '',
            title: '',
            possibleAnswers: [],
            codePiece: null,
            hasNextQuestion: false,
          };
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const finishTest = createAsyncThunk<
  FinishResponse,
  null,
  { rejectValue: string; state: RootState }
>('testingInfo/finishTest', async (_, { rejectWithValue, getState }) => {
  const { testId } = getState().testingInfo;
  try {
    const data = await finishTestApi(testId);
    const {percentageOfCorrectAnswers, isPassed} = data;
    return {
      testId,
      percentageOfCorrectAnswers: data.percentageOfCorrectAnswers,
      isPassed 
    };
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});
