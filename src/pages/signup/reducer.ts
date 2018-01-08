import { FluxConstants } from './constants';
import * as Redux from 'redux';

import ParseValidation from '../../services/parseValidation';

import { LoaderState } from '../../models/states/loaderstate';

interface Controls<T> {
    firstName: T;
    lastName: T;
    userName: T;
    email: T;
    password: T
}

export type SignUpErrorsType = Controls<boolean>;
export type SignUpHelpType = Controls<string>;

const initialState : LoaderState<SignUpErrorsType, SignUpHelpType> = {
    loading: false,
    success: false,
    error: undefined,
    hasError: {} as SignUpErrorsType,
    help: {} as SignUpHelpType
};

const reducer = function (state = initialState, action) {

    if (action.type === FluxConstants.REGISTER) {
        return (<any>Object).assign({}, state, {
            loading: true
        });
    }

    if (action.type === FluxConstants.REGISTER_RESPONSE) {
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

export default reducer;
