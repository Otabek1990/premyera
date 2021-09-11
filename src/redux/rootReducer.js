import { combineReducers } from 'redux';
import uzbekMovieReducer from './uzbMovieSlice';
import uzbekSerialReducer from './uzbSerialSlice';
import kidsMovieReducer from './kidsMovieSlice';
import foreignMovieReducer from './foreignMovieSlice';
import uzbKonsertReducer from './uzbKonsertSlice';

export const rootReducer = combineReducers({
  uzbekMovies: uzbekMovieReducer,
  uzbekSerials: uzbekSerialReducer,
  kidsMovies: kidsMovieReducer,
  foreignMovies: foreignMovieReducer,
  uzbKonserts: uzbKonsertReducer,
})