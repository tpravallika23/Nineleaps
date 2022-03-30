import {createStore, combineReducers} from 'redux';
import UserReducer from './reducers/UserReducer';

const rootReducer = combineReducers({
  users: UserReducer,
});

const configureStore = createStore(rootReducer);

export default configureStore;
