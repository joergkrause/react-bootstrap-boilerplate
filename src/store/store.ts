import { combineReducers, createStore } from 'redux';

import { SigninReducer, SigninResponseReducer } from '../pages/signin/reducer';
import { SignInErrorsType, SignInHelpType } from '../pages/signin/reducer';

const reducers = combineReducers({
    SigninReducer,
    SigninResponseReducer
});

export default createStore(reducers);