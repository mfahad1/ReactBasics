import { combineReducers, createStore } from 'redux'
import moviesReducer from '../reducers/movie.reducer'

const combinedReducer = combineReducers({
  moviesReducer
});

const store = createStore(combinedReducer);

export default store;