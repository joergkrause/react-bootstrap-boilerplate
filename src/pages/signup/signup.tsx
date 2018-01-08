import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Unsubscribe } from 'redux';
import { FacebookLogin } from 'react-facebook-login-component';
import { GoogleLogin } from 'react-google-login-component';

import { Alert, AlertType } from '../../components/alert';
import { Formgroup } from '../../components/form/formgroup';
import { Textbox } from '../../components/form/textbox';
import { XButton } from '../../components/form/xbutton';
import { Spinner } from '../../components/form/spinner';

import { User } from '../../models/user';
import { LoaderState } from '../../models/states/loaderState';

import { SignUpErrorsType, SignUpHelpType } from './reducer';
import Actions from './actions';

export class SignUp extends React.Component<any, LoaderState<SignUpErrorsType, SignUpHelpType>> {

    constructor() {
        super();
        this.state = null; //Store.getState();
        this.input = {
            firstName: null,
            lastName: null,
            userName: null,
            email: null,
            password: null
        };
        this.handleSignup.bind(this);
        this.handleSocialSubmit.bind(this);
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

    unsubscribeStore: Unsubscribe;
    input: {
        firstName: Textbox,
        lastName: Textbox,
        userName: Textbox,
        email: Textbox,
        password: Textbox
    };

    componentDidMount() {

        this.unsubscribeStore = null; //Store.subscribe(this.onStoreChange.bind(this));

        if (this.input.firstName) {
            this.input.firstName.focus();
        }
    }

    componentWillUnmount() {

        this.unsubscribeStore();
    }

    onStoreChange() {

        //this.setState(Store.getState());
    }

    handleSocialSubmit(event: React.FormEvent<HTMLFormElement>): void {
        // TODO: Social Logon
    }

    handleSignup(event: React.MouseEvent<HTMLButtonElement>): void {

        event.preventDefault();
        event.stopPropagation();

        // Actions.sendRequest({
        //     id: null,
        //     firstName: this.input.firstName.value(),
        //     lastName: this.input.lastName.value(),
        //     userName: this.input.userName.value(),
        //     password: this.input.password.value(),
        //     email: this.input.email.value(),
        // }, (err, response) => {
        //     // don't wait for store change, forward immediately
        //     if (!err) {
        //         this.props.history.push(`/mysessions`);
        //     }
        // }
        //);
    }

    public render(): any {

        let alert: any;

        if (this.state.success) {
            alert = <Alert
                onClose={() => null}
                type={AlertType.success}
                message="Erfolgreich. Weiterleitung..."
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

        formElements = <form onSubmit={this.handleSocialSubmit}>
            <Textbox
                ref={(c) => (this.input.firstName = c)}
                name="name"
                label="Vorname"
                type="text"
                hasError={this.state.hasError.firstName}
                help={this.state.help.firstName}
                disabled={this.state.loading}
            />
            <Textbox
                ref={(c) => (this.input.lastName = c)}
                name="name"
                label="Nachname"
                type="text"
                hasError={this.state.hasError.lastName}
                help={this.state.help.lastName}
                disabled={this.state.loading}
            />
            <Textbox
                ref={(c) => (this.input.email = c)}
                name="email"
                label="Email"
                type="email"
                hasError={this.state.hasError.email}
                help={this.state.help.email}
                disabled={this.state.loading}
            />
            <Textbox
                ref={(c) => (this.input.userName = c)}
                name="username"
                label="Username"
                type="text"
                hasError={this.state.hasError.userName}
                help={this.state.help.userName}
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
                    type="submit"
                    onClick={(e) => this.handleSignup(e)}
                    inputClasses="btn-primary"
                    disabled={this.state.loading}>

                    Konto jetzt anlegen
                        <Spinner space="left" show={this.state.loading} />
                </XButton>
            </Formgroup>
        </form>;
        socialElements = <form onSubmit={(e) => this.handleSocialSubmit(e)}>
            <h3>Soziale Konten</h3>
            <FacebookLogin socialId="yourAppID"
                language="en_US"
                scope="public_profile,email"
                responseHandler={this.responseFacebook}
                xfbml={true}
                fields="id,email,name"
                version="v2.5"
                class="facebook-login"
                buttonText="Mit Facebook anmelden" />
            <GoogleLogin socialId="yourClientID"
                class="google-login"
                scope="profile"
                responseHandler={this.responseGoogle}
                buttonText="Login With Google" />
        </form>;

        return (
            <div className="container">
                <h1 className="page-header">Registrieren</h1>
                <div className="row">
                    <div className="col s12 m12">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">Warum anmelden?</span>
                                <p>Um Code-Beispiele und Übungen zu speichern, brauchst du eine Anmeldung. Du arbeitest
                                    später mit deinen Studenten zusammen. Der Anmeldename wird als Information angezeigt.
                                    Vor- und Nachname wird in Chats und Übersichten zur Anrede benutzt.
                                    Die E-Mail-Adresse bleibt verborgen und wird nur zur Kommunikation mit uns benutzt.
                                </p>
                            </div>
                            <div className="card-action">
                                <a href="#">Informationen zur Privatsphäre</a>
                            </div>
                        </div>
                    </div>
                </div>
                {alert}
                {formElements}
                {socialElements}
            </div>
        );
    }
}