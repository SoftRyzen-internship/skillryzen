import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';
import { axiosInstance } from 'services/axiosConfig';

export interface Answer {
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
  timeForCompletionInMs: number;
  questionsTotalCount: number;
  nextQuestion: NextQuestion;
  hasNextQuestion: boolean;
}

export interface Finish {
  testId: string;
  time: Date;
}

export interface FinishResponse {
  testId: string;
  percentageOfCorrectAnswers: number;
}

export const getTestTemplateApi = (templateId: string) =>
  axiosInstance
    .post(`user-test/start/${templateId}`, {}, { withCredentials: true })
    .then((response) => response.data);

export const answerTestApi = ({ testId, questionId, selectedAnswer }: Answer) =>
  axiosInstance
    .post(`user-test/${testId}/answer-question/by-label`, {
      questionId: questionId,
      labels: [selectedAnswer],
    })
    .then((response) => response.data);

export const finishTestApi = ({ testId, time }: Finish) =>
  axiosInstance
    .post(`user-test/${testId}/finish`, { finishedAt: time })
    .then((response) => response.data);


export const getTestTemplate = createAsyncThunk<
TemplateResponse,
null,
{ rejectValue: string, state: RootState}
>(
  'testingInfo/getTestTemplate',
  async function (_,  {rejectWithValue, getState }) {
    const { templateId } = getState().testingInfo;
    try {
      const data = await getTestTemplateApi(templateId);
      data.timeForCompletionInMs = data.timeForCompletionInMs/1000;
      data.nextQuestion.codePiece = null;
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.errors.code);
    }
  }
);

export const answerTest = createAsyncThunk<
  AnswerResponse,
  Answer,
  { rejectValue: string }
>('testingInfo/answerTest', async (info, thunkApi) => {
  const { testId, questionId, selectedAnswer } = info;

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
    return thunkApi.rejectWithValue(error.response.data.message);
  }
});

export const finishTest = createAsyncThunk<
  FinishResponse,
  Finish,
  { rejectValue: string }
>('testingInfo/finishTest', async (info, { rejectWithValue }) => {
  const { testId, time } = info;
  try {
    const data = await finishTestApi({ testId, time });
    return {
      testId,
      percentageOfCorrectAnswers: data.percentageOfCorrectAnswers,
    };
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});
