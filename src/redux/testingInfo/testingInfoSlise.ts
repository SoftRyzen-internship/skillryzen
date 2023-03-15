import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {
  answerTest,
  finishTest,
  getTestTemplate,
} from './testingInfoOperations';

interface Results {
  testId: string;
  numberOfCorrectAnswers: number;
  isPassed: boolean;
  time: number;
  timeLeft: number;
}

export interface TestingInfo {
  templateId: string;
  testId: string;
  name: string;
  questionId: string;
  number: number;
  title: string;
  possibleAnswers: {
    value: string;
    title: string;
    label: string;
  }[];
  codePiece: null | string;
  hasNextQuestion: boolean;
  questionsTotalCount: number;
  totalTime: number;
  currentTime: number;
  results: Results;
  isLoading: boolean;
  error: string | unknown;
}

const initialState: TestingInfo = {
  templateId: '',
  name: '',
  testId: '',
  questionId: '',
  number: null,
  title: '',
  possibleAnswers: [],
  codePiece: null,
  hasNextQuestion: true,
  questionsTotalCount: 0,
  totalTime: 0,
  currentTime: 0,
  results: {
    testId: '',
    numberOfCorrectAnswers: 0,
    time: 0,
    timeLeft: 0,
    isPassed: false,
  },
  isLoading: false,
  error: '',
};

const testingInfoSlice = createSlice({
  name: 'testingInfo',
  initialState,
  reducers: {
    setTime(state, action: PayloadAction<{ time: number; timeLeft: number }>) {
      state.results.time = action.payload.time;
      state.results.timeLeft = action.payload.timeLeft;
    },
    setCurrentTime(state, action: PayloadAction<number>) {
      state.currentTime = action.payload;
    },
    setTemplateId(state, action: PayloadAction<string>) {
      state.templateId = action.payload;
    },
    removeResults(state) {
      state.questionsTotalCount = 0;
      state.number = null;
      state.name = '';
      state.results.testId = '';
      state.results.numberOfCorrectAnswers = 0;
      state.results.time = 0;
      state.results.timeLeft = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTestTemplate.fulfilled, (state, { payload }) => {
        state.testId = payload.id;
        state.name = payload.name;
        state.questionId = payload.nextQuestion.id;
        state.number = 1;
        state.title = payload.nextQuestion.title;
        state.possibleAnswers = payload.nextQuestion.possibleAnswers;
        state.codePiece = payload.nextQuestion.codePiece;
        state.questionsTotalCount = payload.questionsTotalCount;
        state.totalTime = payload.timeForCompletionInMs;
        state.currentTime = payload.timeForCompletionInMs;
        state.isLoading = false;
      })
      .addCase(answerTest.fulfilled, (state, { payload }) => {
        state.number = state.number + 1;
        state.questionId = payload.questionId;
        state.title = payload.title;
        state.possibleAnswers = payload.possibleAnswers;
        state.codePiece = payload.codePiece;
        state.hasNextQuestion = payload.hasNextQuestion;
        state.isLoading = false;
      })
      .addCase(finishTest.fulfilled, (state, { payload }) => {
        state.results.testId = payload.testId;
        state.results.numberOfCorrectAnswers =
          payload.numberOfCorrectAnswers;
        state.results.isPassed = payload.isPassed;
        state.hasNextQuestion = true;
        state.templateId = '';
        state.testId = '';
        state.questionId = '';
        state.title = '';
        state.possibleAnswers = [];
        state.codePiece = null;
        state.totalTime = 0;
        state.currentTime = 0;
        state.isLoading = false;
      })
      .addMatcher(
        (action) =>
          action.type.startsWith('testingInfo') &&
          action.type.endsWith('/pending'),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action) =>
          action.type.startsWith('testingInfo') &&
          action.type.endsWith('/rejected'),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

const persistConfig = {
  key: 'testingInfo',
  storage,
  whitelist: [
    'templateId',
    'testId',
    'questionsTotalCount',
    'totalTime',
    'currentTime',
    'questionId',
    'number',
    'title',
    'possibleAnswers',
    'codePiece',
  ],
};

export const { setTime, removeResults, setCurrentTime, setTemplateId } =
  testingInfoSlice.actions;
export const testingInfoReducer = persistReducer(
  persistConfig,
  testingInfoSlice.reducer
);
