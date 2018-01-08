import { FluxConstants } from './constants';
import * as Redux from 'redux';

import ParseValidation from '../../services/parsevalidation';

import { LoaderState } from '../../models/states/loaderstate';

class Controls<T> {
    email: T;
    password: T;
}

export type SignInErrorsType = Controls<boolean>;
export type SignInHelpType = Controls<string>;

const initialState : LoaderState<SignInErrorsType, SignInHelpType> = {
    loading: false,
    success: false,
    error: undefined,
    hasError: {} as SignInErrorsType,
    help: {} as SignInHelpType
};

const reducer = function (state = initialState, action: any) {

    if (action.type === FluxConstants.GETSESSIONS) {
        return (<any>Object).assign({}, state, {
            loading: true
        });
    }

    if (action.type === FluxConstants.GETSESSIONS_RESPONSE) {
        const validation = ParseValidation.parse(action.response);

        return (<any>Object).assign({}, state, {
            loading: false,
            success: !action.err,
            error: validation.error,
            hasError: validation.hasError,
            help: validation.help
        });
    }

    return state;
};

// Export the store that handels the loading state 
export default reducer;
