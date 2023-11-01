import { createAsyncThunk } from '@reduxjs/toolkit';
import { findPostById } from 'servise/api';

export const requestPostDatails = createAsyncThunk(
  'postDetails/get',
  async (postId, thunkAPI) => {
    try {
      const postData = await findPostById(postId);
      return postData; // ЦЕ БУДЕ ЗАПИСАНО В ЕКШИН ПЕЙЛОАД
    } catch (error) {
      // обов'язково вказувати назву функції для повернення помилки
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const requestPosts = createAsyncThunk(
  'posts/get',
  async (query, thunkAPI) => {
    try {
      const searchPost = await findPostById(query);
      console.log(searchPost);
      return searchPost; // ЦЕ БУДЕ ЗАПИСАНО В ЕКШИН ПЕЙЛОАД
    } catch (error) {
      // обов'язково вказувати назву функції для повернення помилки
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
