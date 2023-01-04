import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {} // currently in our store.
  },
  reducers: {
    addQuiz: (state, action) => {
      // Action to change our state
      const { quizId, name, topicId, cardIds } = action.payload;
      state.quizzes[quizId] = {
        id: quizId,
        name: name,
        topicId: topicId,
        cardIds: cardIds
      };
    }
  }
});

// thunk to quizz to the related topic
export const addQuizAndQuizId = (quiz) => {
  const { quizId, name, topicId, cardIds } = quiz;
  return (dispatch) => {
    dispatch(quizzesSlice.actions.addQuiz(quiz)); // dispatch the new quiz
    dispatch(addQuizId({ quizId: quizId, topicId: topicId })); // Dispatch the new quiz and topic id
  };
};

export const quizzesSelector = (state) => state.quizzes.quizzes;

export const { addQuiz } = quizzesSlice.actions;

export default quizzesSlice.reducer;
