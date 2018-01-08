import * as FluxConstants from './constants';
import * as Redux from 'redux';

import { UserApi } from '../../services/userapi';
import ParseValidation from '../../services/parsevalidation';

import { LoaderState } from '../../models/states/loaderstate';
import { SigninAction, ISigninAction, SigninActionResponse, ISigninActionResponse } from './actions';

class Controls<T> {
    email: T;
    password: T;
}

export type SignInErrorsType = Controls<boolean>;
export type SignInHelpType = Controls<string>;

const initialState: LoaderState<SignInErrorsType, SignInHelpType> = {
    loading: false,
    success: false,
    error: undefined,
    hasError: {} as SignInErrorsType,
    help: {} as SignInHelpType
};

export const SigninReducer = function (state = initialState, action: ISigninAction) {

    switch (action.type) {
        default:
            return state;
        case FluxConstants.LOGIN:
            let a = new SigninActionResponse();
            UserApi.SignIn(action.email, action.password, a);
            return (<any>Object).assign({}, state, {
                loading: true
            });
    }

};

export const SigninResponseReducer = function (state = initialState, action: ISigninActionResponse) {

    switch (action.type) {
        default:
            return state;
        case FluxConstants.LOGIN_RESPONSE:
            const validation = ParseValidation.parse(null); // TODO: Validate result
            return (<any>Object).assign({}, state, {
                loading: false,
                success: !action.err,
                error: validation.error,
                hasError: validation.hasError,
                help: validation.help
            });
    }

};