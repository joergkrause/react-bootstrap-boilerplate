import * as React from 'react';
import * as ReactDOM from 'react-dom';

export enum AlertType {
    success,
    info,
    warning,
    danger
}


export class AlertPropType {
    message: string;
    onClose: () => {};
    type: AlertType
};


export class Alert extends React.Component<AlertPropType, any> {

    constructor(props) {
        super(props);
    }

    public render(): any {
        let close;

        if (this.props.onClose) {
            close = <button type="button" className="close" onClick={this.props.onClose}>&times;</button>;
        }

        return (
            <div className={`card ${this.props.type} darken-1`}>
                <div className="card-content white-text">
                    {this.props.message}
                </div>
                {close}
            </div>
        );
    }
}