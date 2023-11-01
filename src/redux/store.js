// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { combineReducers } from 'redux';
import { postDetailsReducer } from './postDetailsRedux';
import { configureStore } from '@reduxjs/toolkit';

// export const rootReducer = combineReducers({
//   postDetails: postDetailsReducer,
// });
// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);

// Після встановлення Персіст - закоментували
// export const store = configureStore({
//   reducer: { postDetails: postDetailsReducer },
// });

// Видалили devTools Redux
// Встановили
// npm install @reduxjs/toolkit
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { postReducer } from './postRedux';

const postDetailsConfig = {
  key: 'postDetails',
  storage,
  whitelist: ['posts'],
  //   blacklist: ['filter'],
};

export const store = configureStore({
  reducer: {
    postDetails: persistReducer(postDetailsConfig, postDetailsReducer),
    postsData: postReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// <BrowserRouter>
//   <Provider store={store}>
//     <PersistGate persistor={persistor}>
//       <App />
//     </PersistGate>
//   </Provider>
// </BrowserRouter>;
