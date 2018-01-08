import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Formgroup } from './formgroup';

class TextboxProperties {
    autoCapitalize?: string;
    disabled?: boolean;
    hasError: boolean;
    help: string;
    inputClasses?: string;
    label: string;
    name: string;
    onChange?: () => {};
    placeholder?: string;
    type?: string;
    value?: string
}


export class Textbox extends React.Component<TextboxProperties, any> {

    constructor(props) {
        super(props);
    }

    focus() {
        return this.input.focus();
    }

    value() {
        return this.input.value;
    }

    private input: HTMLInputElement;

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

                <input
                    ref={(c) => (this.input = c)}
                    type={this.props.type}
                    autoCapitalize={this.props.autoCapitalize}
                    className={inputClasses.join(" ")}
                    name={this.props.name}
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    disabled={this.props.disabled ? true : false}
                    onChange={this.props.onChange}
                />
            </Formgroup>
        );
    }
}