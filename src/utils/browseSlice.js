import { createSlice } from "@reduxjs/toolkit";

const browseSlice = createSlice({
    name: 'browse',
    initialState: {
        showGptSearch: false,
        movieResults: null,
        movieNames: null    
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult:(state,action) => {
            const {movieNames, movieResults} = action.payload;
            state.movieResults = movieResults;
            state.movieNames = movieNames;
        }
    }
});

export const {toggleGptSearchView,addGptMovieResult} = browseSlice.actions
export default browseSlice.reducer