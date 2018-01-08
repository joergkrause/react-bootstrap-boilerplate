import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface TickCountState {
    element: number;
}

export class Main extends React.Component<any, TickCountState> {

    constructor(props) {
        super(props);
        this.state = { element: 0 };
    }

    timer: any;

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    componentDidMount(){
        this.timer = setInterval(this.tick.bind(this), 1000);
    }

    private tick(){
        this.setState({ element: this.state.element === 2 ? 0 : this.state.element + 1});
    }

    public render(): any {
        return (
            <div>
                <div className="section no-pad-bot" id="index-banner">
                    <div className="container">
                        <h1 className="text_h center header cd-headline letters type">
                            <span>Wir lieben...</span>
                            <span className="cd-words-wrapper waiting">
                                <b className={ this.state.element == 0 ? 'is-visible' : ''}>spielend</b>
                                <b className={ this.state.element == 1 ? 'is-visible' : ''}>programmieren</b>
                                <b className={ this.state.element == 2 ? 'is-visible' : ''}>lernen</b>
                            </span>
                        </h1>
                    </div>
                </div>                
                <div id="intro" className="section scrollspy">
                    <div className="container">
                        <div className="row">
                            <div className="col s12">
                                <h2 className="center header text_h2"> JustRunIt ist eine einzigartige Plattform zum <span className="span_h2"> Erlernen der Web-Programmierung </span> mit
                        exklusiven Funktionen, <span className="span_h2"> speziell für Trainer und Berater.</span> </h2>
                            </div>

                            <div className="col s12 m4 l4">
                                <div className="center promo promo-example">
                                    <i className="mdi-image-flash-on"></i>
                                    <h5 className="promo-caption">Schnellere Entwicklung</h5>
                                    <p className="light center">Dank kompakter Vorlagen können Projekte für Angular, React und andere Frameworks in Sekunden erstellt werden.
                            Keine komplizierten Arbeiten mit <em>tsconfig.json</em>, <em>Gulp</em>, <em>Webpack</em> oder <em>npm</em>.</p>
                                </div>
                            </div>
                            <div className="col s12 m4 l4">
                                <div className="center promo promo-example">
                                    <i className="mdi-social-group"></i>
                                    <h5 className="promo-caption">Auf den Lernenden fokussiert</h5>
                                    <p className="light center">Wer programmieren lernt, sollte sich auf den Code konzentrieren. Ein hervorragender Editor, ohne Ablenkung durch
                            Steuerdateien, eingebettet in eine lokale, offline funktionierende Umgebung.
                        </p>
                                </div>
                            </div>
                            <div className="col s12 m4 l4">
                                <div className="center promo promo-example">
                                    <i className="mdi-hardware-desktop-windows"></i>
                                    <h5 className="promo-caption">Inhalte bereitstellen</h5>
                                    <p className="light center">Trainer stellen ihre Inhalte bereit und können diese mit Code anreichern (augmentieren). Ein überragendes Lernerlebnis
                            und ein außerordentlich professioneller Auftritt für Schulungen, Workshops und Seminare.
                        </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section scrollspy" id="work">
                    <div className="container">
                        <h2 className="header text_b">Funktionen </h2>
                        <div className="row">
                            <div className="col s12 m4 l4">
                                <div className="card">
                                    <div className="card-image waves-effect waves-block waves-light">
                                        <img className="activator" src="assets/img/project1.jpg" />
                                    </div>
                                    <div className="card-content">
                                        <span className="card-title activator grey-text text-darken-4">Intellisense <i className="mdi-navigation-more-vert right"></i></span>
                                        <p><a href="#">Mehr dazu</a></p>
                                    </div>
                                    <div className="card-reveal">
                                        <span className="card-title grey-text text-darken-4">Intellisense <i className="mdi-navigation-close right"></i></span>
                                        <p>Kein normales Syntax "bunt machen", sondern eine intelligente Ergänzung in jeder Situation.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col s12 m4 l4">
                                <div className="card">
                                    <div className="card-image waves-effect waves-block waves-light">
                                        <img className="activator" src="assets/img/project2.jpeg" />
                                    </div>
                                    <div className="card-content">
                                        <span className="card-title activator grey-text text-darken-4">Sitzungen <i className="mdi-navigation-more-vert right"></i></span>
                                        <p><a href="#">Sitzungen</a></p>
                                    </div>
                                    <div className="card-reveal">
                                        <span className="card-title grey-text text-darken-4">Sitzungen <i className="mdi-navigation-close right"></i></span>
                                        <p>Sitzungen mit vielen Dateien lassen sich dauerhaft speichern und jederzeit bearbeiten. Schüler arbeiten mit eigenen Kopien.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col s12 m4 l4">
                                <div className="card">
                                    <div className="card-image waves-effect waves-block waves-light">
                                        <img className="activator" src="assets/img/project3.png" />
                                    </div>
                                    <div className="card-content">
                                        <span className="card-title activator grey-text text-darken-4">Echte Konsole <i className="mdi-navigation-more-vert right"></i></span>
                                        <p><a href="#">Echte Konsole</a></p>
                                    </div>
                                    <div className="card-reveal">
                                        <span className="card-title grey-text text-darken-4">Echte Konsole <i className="mdi-navigation-close right"></i></span>
                                        <p>Konsolenausgaben sind direkt sichtbar &ndash; keine Notwendigkeit, noch ein Konsolenfenster zu öffnen.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col s12 m4 l4">
                                <div className="card">
                                    <div className="card-image waves-effect waves-block waves-light">
                                        <img className="activator" src="assets/img/project4.jpg" />
                                    </div>
                                    <div className="card-content">
                                        <span className="card-title activator grey-text text-darken-4">Project Title <i className="mdi-navigation-more-vert right"></i></span>
                                        <p><a href="#">Project link</a></p>
                                    </div>
                                    <div className="card-reveal">
                                        <span className="card-title grey-text text-darken-4">Project Title <i className="mdi-navigation-close right"></i></span>
                                        <p>Here is some more information about this project that is only revealed once clicked on.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col s12 m4 l4">
                                <div className="card">
                                    <div className="card-image waves-effect waves-block waves-light">
                                        <img className="activator" src="assets/img/project5.png" />
                                    </div>
                                    <div className="card-content">
                                        <span className="card-title activator grey-text text-darken-4">Project Title <i className="mdi-navigation-more-vert right"></i></span>
                                        <p><a href="#">Project link</a></p>
                                    </div>
                                    <div className="card-reveal">
                                        <span className="card-title grey-text text-darken-4">Project Title <i className="mdi-navigation-close right"></i></span>
                                        <p>Here is some more information about this project that is only revealed once clicked on.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col s12 m4 l4">
                                <div className="card">
                                    <div className="card-image waves-effect waves-block waves-light">
                                        <img className="activator" src="assets/img/project6.jpeg" />
                                    </div>
                                    <div className="card-content">
                                        <span className="card-title activator grey-text text-darken-4">Project Title <i className="mdi-navigation-more-vert right"></i></span>
                                        <p><a href="#">Project link</a></p>
                                    </div>
                                    <div className="card-reveal">
                                        <span className="card-title grey-text text-darken-4">Project Title <i className="mdi-navigation-close right"></i></span>
                                        <p>Here is some more information about this project that is only revealed once clicked on.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section scrollspy" id="team">
                    <div className="container">
                        <h2 className="header text_b"> Our Team </h2>
                        <div className="row">
                            <div className="col s12 m3">
                                <div className="card card-avatar">
                                    <div className="waves-effect waves-block waves-light">
                                        <img className="activator" src="assets/img/avatar1.png" />
                                    </div>
                                    <div className="card-content">
                                        <span className="card-title activator grey-text text-darken-4">Matthias <br />
                                            <small><em><a className="red-text text-darken-1" href="#">Head of Editor</a></em></small></span>
                                        <p>
                                            <a className="blue-text text-lighten-2" href="https://www.facebook.com/joash.c.pereira">
                                                <i className="fa fa-facebook-square"></i>
                                            </a>
                                            <a className="blue-text text-lighten-2" href="https://twitter.com/im_joash">
                                                <i className="fa fa-twitter-square"></i>
                                            </a>
                                            <a className="blue-text text-lighten-2" href="https://plus.google.com/u/0/+JoashPereira">
                                                <i className="fa fa-google-plus-square"></i>
                                            </a>
                                            <a className="blue-text text-lighten-2" href="https://www.linkedin.com/in/joashp">
                                                <i className="fa fa-linkedin-square"></i>
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col s12 m3">
                                <div className="card card-avatar">
                                    <div className="waves-effect waves-block waves-light">
                                        <img className="activator" src="assets/img/avatar3.png" />
                                    </div>
                                    <div className="card-content">
                                        <span className="card-title activator grey-text text-darken-4">Jörg<br />
                                            <small><em><a className="red-text text-darken-1" href="#">Head of Content</a></em></small>
                                        </span>
                                        <p>
                                            <a className="blue-text text-lighten-2" href="https://www.facebook.com/joergkrause">
                                                <i className="fa fa-facebook-square"></i>
                                            </a>
                                            <a className="blue-text text-lighten-2" href="https://twitter.com/joergisageek">
                                                <i className="fa fa-twitter-square"></i>
                                            </a>
                                            <a className="blue-text text-lighten-2" href="https://plus.google.com/u/0/+JoergKrause">
                                                <i className="fa fa-google-plus-square"></i>
                                            </a>
                                            <a className="blue-text text-lighten-2" href="https://www.linkedin.com/in/joergk">
                                                <i className="fa fa-linkedin-square"></i>
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col s12 m3">
                                <div className="card card-avatar">
                                    <div className="waves-effect waves-block waves-light">
                                        <img className="activator" src="assets/img/avatar2.png" />
                                    </div>
                                    <div className="card-content">
                                        <span className="card-title activator grey-text text-darken-4">
                                            Andrea<br />
                                            <small><em><a className="red-text text-darken-1" href="#">Head of Design</a></em></small></span>
                                        <p>
                                            <a className="blue-text text-lighten-2" href="https://www.facebook.com/joash.c.pereira">
                                                <i className="fa fa-facebook-square"></i>
                                            </a>
                                            <a className="blue-text text-lighten-2" href="https://twitter.com/im_joash">
                                                <i className="fa fa-twitter-square"></i>
                                            </a>
                                            <a className="blue-text text-lighten-2" href="https://plus.google.com/u/0/+JoashPereira">
                                                <i className="fa fa-google-plus-square"></i>
                                            </a>
                                            <a className="blue-text text-lighten-2" href="https://www.linkedin.com/in/joashp">
                                                <i className="fa fa-linkedin-square"></i>
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col s12 m3">
                                <div className="card card-avatar">
                                    <div className="waves-effect waves-block waves-light">
                                        <img className="activator" src="assets/img/avatar4.png" />
                                    </div>
                                    <div className="card-content">
                                        <span className="card-title activator grey-text text-darken-4">Robin<br />
                                            <small><em><a className="red-text text-darken-1" href="#">Head of Support</a></em></small></span>
                                        <p>
                                            <a className="blue-text text-lighten-2" href="https://www.facebook.com/joash.c.pereira">
                                                <i className="fa fa-facebook-square"></i>
                                            </a>
                                            <a className="blue-text text-lighten-2" href="https://twitter.com/im_joash">
                                                <i className="fa fa-twitter-square"></i>
                                            </a>
                                            <a className="blue-text text-lighten-2" href="https://plus.google.com/u/0/+JoashPereira">
                                                <i className="fa fa-google-plus-square"></i>
                                            </a>
                                            <a className="blue-text text-lighten-2" href="https://www.linkedin.com/in/joashp">
                                                <i className="fa fa-linkedin-square"></i>
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
    }

}
