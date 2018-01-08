import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Formgroup } from './formgroup';

export class SelectList extends React.Component<any, any> {

    input : HTMLSelectElement;

    constructor(props) {
        super(props);
    }

    public render(): any {

        let inputClasses = new Array<string>("validate");
        if (this.props.inputClasses) {
            this.props.inputClasses.split(" ").forEach((cls) => inputClasses.push(cls));
        }

        return (
            <Formgroup
                hasError={this.props.hasError}
                label={this.props.label}
                help={this.props.help}>

                <select
                    ref={(c) => (this.input = c)}
                    multiple={this.props.multiple}
                    className={inputClasses.join(" ")}
                    name={this.props.name}
                    size={this.props.size}
                    value={this.props.value}
                    defaultValue={this.props.defaultValue}
                    disabled={this.props.disabled}
                    onChange={this.props.onChange}>

                    {this.props.children}
                </select>
            </Formgroup>
        );;
    }
}