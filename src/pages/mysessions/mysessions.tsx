import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ListItem } from './components/listitem';
import { SessionViewModel, SessionType } from '../../models/viewmodels/sessionviewmodel';

class MySessionState {

    constructor(data: Array<SessionViewModel>) {
        this.sessions = data;
    }

    sessions: Array<SessionViewModel>;

    showHelp: boolean;

}


export class MySessions extends React.Component<any, MySessionState> {

    constructor() {
        super();
        this.state = { sessions: new Array<SessionViewModel>(), showHelp: true }; // init
    }

    handleDeleted(id: number): void {
        let sessions = this.state.sessions.filter(session => session.id !== id);
        this.setState(new MySessionState(sessions));
        // TODO: Inform backend and handle response
    }

    handleClose() : void{
        this.setState({ showHelp: false });
    }

    componentDidMount() {
        let sessions = new Array<SessionViewModel>();
        sessions.push(new SessionViewModel(1234, "React 1", SessionType.ReactJSX, true, true));
        sessions.push(new SessionViewModel(1235, "React 2", SessionType.ReactTSX, true, false));
        sessions.push(new SessionViewModel(1236, "Angular End to End", SessionType.Angular2, false, false));
        this.setState(new MySessionState(sessions));
    }

    public render(): any {
        const listItems = this.state.sessions.map((session) =>
            <ListItem
                key={session.id}
                session={session}
                id={session.id}
                onDeleted={(e) => this.handleDeleted(e)} />

        );
        return (
            <div className="container">
                <a onClick={() => this.handleClose() } className="btn-floating btn-large waves-effect waves-light blue"><i className="material-icons">close</i></a>
                <div className="row">
                    <p className="flow-text">
                        Eine vollständige Übung, ein Beispiel oder ein Mini-Projekt zum Lernen besteht aus vielen Dateien.
                In Sitzungen kannst du diese zusammenfassen und du oder deine Studenten können diese dann mit nur
                einem Klick aufrufen und ausführen.
                </p>
                    <p className="flow-text">
                        Im Editor kannst du eine neue Sitzung erzeugen, indem du deine Arbeit mit <kbd>Ctrl-S</kbd> speicherst.
                Sie erscheint dann hier in der Liste. Vergib sinnvolle Namen oder entferne die Sitzungen wieder.
                </p>
                </div>
                <div className="row">
                    <h2>Sitzungsverwaltung <small>{this.state.sessions.length} Sitzungen</small></h2>
                    <div className="col s6">Name</div>
                    <div className="col s6">Aktion</div>
                    {listItems}
                </div>
            </div >);
    }
}