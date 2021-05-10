import {configureStore} from '@reduxjs/toolkit';
import storiesReducer from './features/stories/storiesSlice';

export default configureStore({
    reducer: {
        stories: storiesReducer,
    }
})