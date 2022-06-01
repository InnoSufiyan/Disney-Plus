import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    movie: []
}

const movieSlice = createSlice({
    name:"movie",
    initialState,
    reducers: {
        setMovies: (state, action)=> {
            state.movies = action.payload
        },
        setMovie: (state, action)=> {
            state.movie = action.payload
        }
    }
})

export const {setMovies, setMovie} = movieSlice.actions;

export const selectMovies = (state) => state.movie.movies;

export const selectMovie = (state) => state.movie.movie;

export default movieSlice.reducer