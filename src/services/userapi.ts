import { connect } from 'react-redux';
import { Action } from 'redux';

import { User } from '../models/user';

import { fetchCallback } from '../services/fetchcallback';

export class UserApi {

    static APIURL: string = "http://just-run.it/";

    public static SignIn(email: string, password: string, outAction: Action): void {

        UserApi.makeRequest(
            `${this.APIURL}/token`, {
                method: 'POST',
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            },
            outAction
        );
    }


    public static SignUp(user: User, outAction: Action): void {

        UserApi.makeRequest(
            `${this.APIURL}/token`, {
                method: 'POST',
                body: JSON.stringify({
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    password: user.password
                })
            },
            outAction
        );

    }

    public static ResetPassword(token: string, password: string): void {
        fetch(`${this.APIURL}/user/resetPassword`, {
            method: 'POST',
            body: JSON.stringify({
                token: token,
                password: password
            })
        })
            .then(function (response) {
                return response.json()
            }).then(function (json) {
                console.log('parsed json', json)
            }).catch(function (ex) {
                console.log('parsing failed', ex)
            })
    }

    public static ForgotPassword(email: string): void {
        fetch(`${this.APIURL}/user/forgetPassword`, {
            method: 'POST',
            body: JSON.stringify({
                email: email
            })
        })
            .then(function (response) {
                return response.json()
            }).then(function (json) {
                console.log('parsed json', json)
            }).catch(function (ex) {
                console.log('parsing failed', ex)
            })
    }

    private static makeRequest(request: RequestInfo, init: RequestInit, outAction: Action) {

        let store: any;

        fetch(request, init)
            .then((response) => {

                store.dispatch(outAction);

            })
            .catch((err) => {

                store.dispatch(outAction);

            });
    }


}