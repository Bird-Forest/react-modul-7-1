import { createSlice } from '@reduxjs/toolkit';
import { requestPosts } from './thunkAPI';
const INITIAL_STATE = {
  isLoading: false,
  error: null,
  posts: null,
};
const postSlice = createSlice({
  // Ім'я слайсу
  name: 'posts',
  // Початковий стан редюсера слайсу
  initialState: INITIAL_STATE,

  extraReducers: builder =>
    builder
      .addCase(requestPosts.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(requestPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        //   поставили масив тільки в цьому прикладі, загалом без дужок
        state.posts = [action.payload];
      })
      .addCase(requestPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = (state, action);
      }),

  // *********************************************
  // Об'єкт редюсерів для синхронного коду
  reducers: {
    addPosts(state, action) {
      state.posts.push(action.payload);
      // state.posts = [...state.posts, action.payload];
    },
  },
});
// Генератори екшенів

export const postReducer = postSlice.reducer;
