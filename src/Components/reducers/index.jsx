import updateReducer from './updateReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    inputValues : updateReducer,
})


export default allReducers;
