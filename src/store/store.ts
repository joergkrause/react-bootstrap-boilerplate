import { combineReducers, createStore } from 'redux';

//import SignUpReducer from '../pages/signup/reducer';
import { SigninReducer, SigninResponseReducer } from '../pages/signin/reducer';

// const Store = Redux.createStore<LoaderState<SignInErrorsType, SignInHelpType>>(reducer);
// const Store = Redux.createStore<LoaderState<SignUpErrorsType, SignUpHelpType>>(reducer)

// create central store, combine reducers

const reducers = combineReducers({
    SigninReducer,
    SigninResponseReducer
});

export default createStore(reducers);