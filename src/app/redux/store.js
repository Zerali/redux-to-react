import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './messageReducer';

export default configureStore({
  reducer: {
    message: messageReducer
  },
})
