import { createSlice } from "@reduxjs/toolkit";

const topicSlice = createSlice({
  name: "topics", // THIS IS MY SLICE
  initialState: {
    topics: {} // THIS IS MY STATE TOPIC
  },
  reducers: {
    addTopic: (state, action) => {
      // ACTION /////
      const { id, name, icon } = action.payload; // Making the action.payload for the id, name, icon
      // STORE OBJECT IN STATE WITH ID. (below object)
      state.topics[id] = {
        id: id,
        name: name,
        icon: icon,
        quizIds: []
      };
    },
    // ACTION /////
    addQuizId: (state, action) => {
      const { quizId, topicId } = action.payload;
      state.topics[topicId].quizIds.push(quizId);
    }

    // add another action for quiz

  }
});

export const topicsSelector = (state) => state.topics.topics;

export const { addTopic, addQuizId } = topicSlice.actions;
export default topicSlice.reducer;
