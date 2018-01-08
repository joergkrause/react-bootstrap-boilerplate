import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import * as Redux from 'redux';
import { connect } from 'react-redux';

import { FacebookLogin } from 'react-facebook-login-component';
import { GoogleLogin } from 'react-google-login-component';
import { MySessions } from '../mysessions/mysessions';

import { Alert, AlertType } from '../../components/alert';
import { Formgroup } from '../../components/form/formgroup';
import { Textbox } from '../../components/form/textbox';
import { XButton } from '../../components/form/xbutton';
import { Spinner } from '../../components/form/spinner';

import { User } from '../../models/user';
import { LoaderState } from '../../models/states/loaderState';
import { fetchCallback } from '../../services/fetchCallback';

import { SignInErrorsType, SignInHelpType } from './reducer';
import { SigninAction, SigninActionResponse } from './actions';

interface SigninProps {
  dispatch?: (action: any) => void;
}

//@connect()
export class SignIn extends React.Component<any, LoaderState<SignInErrorsType, SignInHelpType>> {

    constructor() {
        super();
        this.state = {
            loading: false,
            success: false
        };
        this.input = {
            email: null,
            password: null
        };
    }

    unsubscribeStore: Redux.Unsubscribe;
    input: {
        email: Textbox,
        password: Textbox
    };

    componentDidMount() {

        //this.unsubscribeStore = Store.subscribe(this.onStoreChange.bind(this));

        if (this.input.email) {
            this.input.email.focus();
        }
    }

    componentWillUnmount() {

        this.unsubscribeStore();
    }

    onStoreChange() {
        // if the store has a new state force re-render of component
        this.setState(null);
    }

    handleSubmit(event: React.MouseEvent<HTMLButtonElement>): void {

        event.preventDefault();
        event.stopPropagation();

        this.props.dispatch().sendRequest(
            this.input.email.value(),
            this.input.password.value(),
            (err, response) => {
                if (!err) {
                    this.props.history.push(`/mysessions`);
                }
            }
        );
    }

    responseFacebook(response) {
        console.log(response);
        //anything else you want to do(save to localStorage)...
    }

    responseGoogle(googleUser) {
        var id_token = googleUser.getAuthResponse().id_token;
        console.log({ accessToken: id_token });
        //anything else you want to do(save to localStorage)...
    }

    public render(): any {

        let alert: any;

        if (this.state.success) {
            alert = <Alert
                onClose={() => null}
                type={AlertType.success}
                message="Erfolgreich. Sitzungen werden aufgerufen."
            />;
        }
        else if (this.state.error) {
            alert = <Alert
                onClose={() => null}
                type={AlertType.danger}
                message={this.state.error}
            />;
        }

        let formElements: any;
        let socialElements: any;

        formElements =
            <form className="col s12">
                <Textbox
                    ref={(c) => (this.input.email = c)}
                    name="email"
                    type="email"
                    label="Email"
                    hasError={this.state.hasError.email}
                    help={this.state.help.email}
                    disabled={this.state.loading}
                />
                <Textbox
                    ref={(c) => (this.input.password = c)}
                    name="password"
                    label="Password"
                    type="password"
                    hasError={this.state.hasError.password}
                    help={this.state.help.password}
                    disabled={this.state.loading}
                />
                <Formgroup hideLabel={true} hideHelp={true}>
                    <XButton
                        type="button"
                        onClick={(e) => this.handleSubmit(e)}
                        disabled={this.state.loading}>

                        Anmelden
                        <Spinner space="left" show={this.state.loading} />
                    </XButton>
                </Formgroup>
            </form>;
        socialElements = <form className="col s12">
            <h3>Soziale Konten</h3>
            <FacebookLogin socialId="yourAppID"
                language="en_US"
                scope="public_profile,email"
                responseHandler={(e) => this.responseFacebook(e)}
                xfbml={true}
                fields="id,email,name"
                version="v2.5"
                class="facebook-login btn waves-effect waves-light right"
                buttonText="Mit Facebook anmelden" />
            <GoogleLogin socialId="yourClientID"
                class="google-login btn waves-effect waves-light"
                scope="profile"
                responseHandler={(e) => this.responseGoogle(e)}
                buttonText="Mit Google anmelden" />
        </form>;

        return (
            <div className="container">
                <h2 className="page-header">Anmelden</h2>
                {alert}
                <div className="row">
                    {formElements}
                </div>
                <div className="row">
                    {socialElements}
                </div>
            </div>);
    }
}