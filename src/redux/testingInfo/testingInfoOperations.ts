import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getRandomTestApi,
  answerTestApi,
  finishTestApi,
} from 'services/axiosConfig';

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

export const getRandomTest = createAsyncThunk(
  'testingInfo/getRandomTest',
  async function (_, thunkApi) {
    try {
      const data = await getRandomTestApi();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
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
          hasNextQuestion: hasNextQuestion,
        }
      : {
          questionId: '',
          title: '',
          possibleAnswers: [],
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
