import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { answerTest, finishTest, getRandomTest } from './testingInfoOperations';

interface Results {
  testId: string;
  percentageOfCorrectAnswers: number;
  time: number;
}

export interface TestingInfo {
  testId: string;
  questionId: string;
  number: number;
  title: string;
  possibleAnswers: {
    value: string;
    title: string;
    label: string;
  }[];
  hasNextQuestion: boolean;
  questionsTotalCount: number;
  results: Results;
  isLoading: boolean;
  error: string | unknown;
}

const initialState: TestingInfo = {
  testId: '',
  questionId: '',
  number: null,
  title: '',
  possibleAnswers: [],
  hasNextQuestion: true,
  questionsTotalCount: 0,
  results: { testId: '', percentageOfCorrectAnswers: 0, time: 0 },
  isLoading: false,
  error: '',
};

const testingInfoSlice = createSlice({
  name: 'testingInfo',
  initialState,
  reducers: {
    setTime(state, action: PayloadAction<number>) {
      state.results.time = action.payload;
    },
    removeResults(state) {
      state.questionsTotalCount = 0; 
      state.number = null;
      state.results.testId = '';
      state.results.percentageOfCorrectAnswers = 0;
      state.results.time = 0;   
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRandomTest.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getRandomTest.fulfilled, (state, { payload }) => {
        state.testId = payload.id;
        state.questionId = payload.nextQuestion.id;
        state.number = 1;
        state.title = payload.nextQuestion.title;
        state.possibleAnswers = payload.nextQuestion.possibleAnswers;
        state.questionsTotalCount = payload.questionsTotalCount;
        state.isLoading = false;
      })
      .addCase(getRandomTest.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(answerTest.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(answerTest.fulfilled, (state, { payload }) => {
        state.number = state.number + 1;
        state.questionId = payload.questionId;
        state.title = payload.title;
        state.possibleAnswers = payload.possibleAnswers;
        state.hasNextQuestion = payload.hasNextQuestion;
        state.isLoading = false;
      })
      .addCase(answerTest.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(finishTest.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(finishTest.fulfilled, (state, { payload }) => {
        state.results.testId = payload.testId;
        state.results.percentageOfCorrectAnswers =
          payload.percentageOfCorrectAnswers;
        state.testId = '';
        state.isLoading = false;
      })
      .addCase(finishTest.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      });
  },
});

export const { setTime, removeResults } = testingInfoSlice.actions;
export const testingInfoReducer = testingInfoSlice.reducer;
