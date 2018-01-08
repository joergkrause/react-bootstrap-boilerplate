import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SessionViewModel, SessionType } from '../../../models/viewmodels/sessionviewmodel';

class ListItemProperties {
    // quick access to id
    id: number;
    // other data
    session: SessionViewModel;
    // inform parent that it's now save to re-render the list
    onDeleted: (id: number) => void
}

class ListItemState {
    constructor(newState: boolean) {
        this.deleting = newState;
    }
    deleting: boolean;
}

export class ListItem extends React.Component<ListItemProperties, ListItemState> {

    constructor(props) {
        super(props);
        this.state = new ListItemState(false);
    }

    handleDelete(event: React.MouseEvent<HTMLButtonElement>): void {
        this.setState(new ListItemState(true));
    }

    handleConfirmDelete(event: React.MouseEvent<HTMLButtonElement>): void {
        // the actual handling will take place in the parent
        if (this.props.onDeleted){
            this.props.onDeleted(this.props.id);
        }
    }

    public render(): any {

        const editorLink = `http://just-run.it/${this.props.id}`;

        return (
            <div className="row">
                <div className="col s6">{this.props.session.name}</div>
                <div className="col s3">
                    <a target="editor" href={editorLink}>Editor</a>
                </div>
                <div className="col s3">
                    <button onClick={(e) => this.handleDelete(e)}
                        className="btn waves-effect amber"
                        type="button"
                        disabled={this.state.deleting}>
                        <i className="material-icons left">delete</i> Löschen
                    </button>
                    {(this.state.deleting)
                        ? <button onClick={(e) => this.handleConfirmDelete(e)} type="button" className="btn red" >Bestätigen</button>
                        : ''}
                </div>
            </div>
        )
    }
}