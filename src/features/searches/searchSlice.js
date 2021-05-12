import {createSlice} from '@reduxjs/toolkit';


export const searchSlice = createSlice({
    name: 'searches',
    initialState: {searchTerm: "contemporary art"},
    reducers: {
        selectArtist:(state, action) => {
            return {
                ...state.searches,
                searchTerm: action.payload
            } 
                
        }
    }
})


export const selectSearches = state => state.searches;
export const {selectArtist} = searchSlice.actions;
export default searchSlice.reducer;