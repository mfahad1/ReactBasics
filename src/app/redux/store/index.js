import { combineReducers, createStore } from 'redux'
import { favMovieReducer } from '../actionsAndReducer/add-fav'

const combinedReducer = combineReducers({
  favMovieReducer
});

const store = createStore(combinedReducer);

export default store;