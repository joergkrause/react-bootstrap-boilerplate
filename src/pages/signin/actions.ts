import * as Redux from 'redux';
import { withRouter } from 'react-router-dom'

import { UserApi } from '../../services/userapi';
import * as FluxConstants from './constants';

import { User } from '../../models/user';

import { fetchCallback } from '../../services/fetchCallback';

export interface ISigninAction extends Redux.Action {
    email: string;
    password: string;
};

export function SigninAction(email: string, password: string): ISigninAction {
    return {
        type: FluxConstants.LOGIN,
        email: email,
        password: password,
    }
}

export interface ISigninActionResponse extends Redux.Action {
    result: string,
    err: string;
};

export class SigninActionResponse implements ISigninActionResponse {

    constructor (){
        this.type = FluxConstants.LOGIN_RESPONSE;
    }
    public result: string;
    public err: string;
    public type: any;

}

