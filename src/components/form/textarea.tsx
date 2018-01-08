import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Formgroup } from './formgroup';

export class TextareaProperties {
    disabled: boolean;
    hasError: boolean;
    help: string;
    inputClasses: string;
    label: string;
    name: string;
    onChange: () => {};
    placeholder: string;
    rows: number;
    value: string
}

export class Textarea extends React.Component<TextareaProperties, any> {

    constructor(props) {
        super(props);
    }

    focus() {
        return this.input.focus();
    }

    value() {
        return this.input.value;
    }

    private input: HTMLTextAreaElement;

    public render(): any {

        let inputClasses = new Array<string>("materialize-textarea");
        this.props.inputClasses.split(" ").forEach((cls) => inputClasses.push(cls));

        return (
            <Formgroup
                hasError={this.props.hasError}
                label={this.props.label}
                help={this.props.help}>

                <textarea
                    ref={(c) => (this.input = c)}
                    className={inputClasses.join(" ")}
                    name={this.props.name}
                    rows={this.props.rows}
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    disabled={this.props.disabled}
                    onChange={this.props.onChange}
                />
            </Formgroup>
        )
    }
}