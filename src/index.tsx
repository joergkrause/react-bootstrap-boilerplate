import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ReactRouterDOM from "react-router-dom";
import * as Redux from 'react-redux';

import { Main } from './pages/main';
import { SignUp } from './pages/signup/signup';
import { SignIn } from './pages/signin/signin';
import { ChangePassword } from './pages/changepassword/changepassword';
import { ForgetPassword } from './pages/forgetpassword/forgetpassword';
import { MySessions } from './pages/mysessions/mysessions';

import { UserState } from './models/states/userstate';
import store from './store/store';

var HashRouter = ReactRouterDOM.HashRouter;
var BrowserRouter = ReactRouterDOM.BrowserRouter;
var Route = ReactRouterDOM.Route;
var Link = ReactRouterDOM.Link;
var Switch = ReactRouterDOM.Switch;

class MainMenuProps {
    mobile: boolean;
    logged: boolean
}

class MainMenu extends React.Component<MainMenuProps, any> {

    constructor() {
        super();
    }

    private signOff(): void {

    }

    public render(): any {
        let deviceClass = this.props.mobile ? 'side-nav' : 'right hide-on-med-and-down'; // prop = true means mobile
        return (
            <section>
                {(() => {
                    if (!this.props.logged) {
                        return <ul className={deviceClass}>
                            <li><Link to="/main#intro">Über uns</Link></li>
                            <li><Link to="/main#work">Funktionen</Link></li>
                            <li><Link to="/main#team">Team</Link></li>
                            <li><Link to="/main#contact">Kontakt</Link></li>
                            <li><Link to="/signin">Anmelden</Link></li>
                            <li><Link to="/signup">Registrieren</Link></li>
                            <li><a href="http://edit.justrun.it" target="editor">Editor</a></li>
                        </ul>
                    } else {
                        return <ul className={deviceClass}>
                            <li><Link to="/mysessions">Sitzungen</Link></li>
                            <li><Link to="/changepassword">Eigene Daten</Link></li>
                            <li><a href="#" onClick={this.signOff}>Abmelden</a></li>
                            <li><a href="http://edit.justrun.it" target="editor">Editor</a></li>
                        </ul>
                    }
                })()}
            </section>
        );
    }
}


class App extends React.Component<any, UserState> {

    constructor(props: any, context) {
        super(props, context);
        this.state = new UserState();
    }

    private upDateLogon(userstate: UserState) {
        this.setState(userstate);
    }

    public render(): any {
        const styleTweaks = {
            left: '-10px'
        };
        return (
            <div>
                <div className="navbar-fixed">
                    <nav id="nav_f" className="default_color" role="navigation">
                        <div className="container">
                            <div className="nav-wrapper">
                                <a href="/" id="logo-container" className="brand-logo" style={styleTweaks}>J</a>
                                <MainMenu mobile={false} logged={this.state.logged} />
                                <MainMenu mobile={true} logged={this.state.logged} />
                                <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="mdi-navigation-menu"></i></a>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="content">
                    <Switch>
                        <Route exact path="/" component={Main}></Route>
                        <Route path="/main" component={Main}></Route>
                        <Route path="/signup" component={SignUp}></Route>
                        <Route path="/signin" component={SignIn}></Route>
                        <Route path="/mysessions" component={MySessions}></Route>
                        <Route path="/forgetpassword" component={ForgetPassword}></Route>
                        <Route path="/changepassword" component={ChangePassword}></Route>
                    </Switch>
                </div>
            </div>
        );
    }

}

// Bootstrap
function render() {

    const store: any = null; // TODO: import from central store

    ReactDOM.render(
        <Redux.Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Redux.Provider>
        , document.getElementById('app')
    );
}
render();
