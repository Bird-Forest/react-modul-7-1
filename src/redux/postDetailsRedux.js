import { createSlice } from '@reduxjs/toolkit';
import { requestPostDatails } from './thunkAPI';
const INITIAL_STATE = {
  postDetailsData: null,
  isLoading: false,
  error: null,
  posts: [],
};
const postDetailsSlice = createSlice({
  // Ім'я слайсу
  name: 'postDetails',
  // Початковий стан редюсера слайсу
  initialState: INITIAL_STATE,

  extraReducers: builder =>
    builder
      .addCase(requestPostDatails.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(requestPostDatails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.postDetailsData = action.payload;
      })
      .addCase(requestPostDatails.rejected, (state, action) => {
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
    //   deletePosts(state, action) {
    //     state.posts = state.posts.filter(post => post.id !== action.payload);
    //   },
    //   toggleCompleted(state, action) {},
    //   setisLoading(state, action) {
    //     state.isLoading = action.payload;
    //   },
    //   setPostDetails(state, action) {
    //     state.postDetailsData = action.payload;
    //   },
    //   setError(state, action) {
    //     state.error = action.payload;
    //   },
    // },
  },
});
// Генератори екшенів
export const {
  addPosts,
  // deletePosts,
  // toggleCompleted,
  // setisLoading,
  // setPostDetails,
  // setError,
} = postDetailsSlice.actions;

// Редюсер слайсу
export const postDetailsReducer = postDetailsSlice.reducer;

// export const setisLoading = payload => {
//   return {
//     type: 'postDetails/setIsLoading',
//     payload,
//   };
// };
// export const setpostDetailsData = payload => {
//   return {
//     type: 'postDetails/setpostDetailsData',
//     payload,
//   };
// };
// export const setError = payload => {
//   return {
//     type: 'postDetails/setError',
//     payload,
//   };
// };

// export const postDetailsReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case 'postDetails/setIsLoading': {
//       return {
//         ...state,
//         isLoading: action.payload,
//       };
//     }
//     case 'postDetails/setPostDetails': {
//       return {
//         ...state,
//         postDetailsData: action.payload,
//       };
//     }
//     case 'postDetails/setError': {
//       return {
//         ...state,
//         error: action.payload,
//       };
//     }
//     default:
//       return state;
//   }
// };
