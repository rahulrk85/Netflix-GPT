import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    trailerVideo: null,
    upcomingMovies: null,
    topratedMovies: null,
    movieDetailedPage: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topratedMovies = action.payload;
    },
    addMovieDetailedPage: (state, action) => {
      state.movieDetailedPage = action.payload;
    },
  },
});
export const {
  addNowPlayingMovies,
  addTopRatedMovies,
  addMovieTrailer,
  addPopularMovies,
  addUpcomingMovies,
  addMovieDetailedPage,
} = moviesSlice.actions;

export default moviesSlice.reducer;
