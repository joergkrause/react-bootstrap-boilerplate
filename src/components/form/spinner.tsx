import * as React from 'react';
import * as ReactDOM from 'react-dom';


export class SpinnerProperties {
    show: boolean;
    space: string
}

export class Spinner extends React.Component<any, any> {

    constructor() {
        super();
    }

    public render(): any {
        let spaceLeft: string;

        if (this.props.space === 'left') {
            spaceLeft = '\u00A0\u00A0';
        }

        let spaceRight: string;

        if (this.props.space === 'right') {
            spaceRight = '\u00A0\u00A0';
        }

        const spinnerClasses = !this.props.show ? 'hide' : '';

        return (
            <span className={spinnerClasses}>
                {spaceLeft}
                <i className="fa fa-refresh fa-spin"></i>
                {spaceRight}
            </span>
        );
    }
}