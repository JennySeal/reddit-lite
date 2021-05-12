import {configureStore} from '@reduxjs/toolkit';
import storiesReducer from './features/stories/storiesSlice';
import searchReducer from './features/searches/searchSlice';

export default configureStore({
    reducer: {
        stories: storiesReducer,
        searches: searchReducer
    }
})