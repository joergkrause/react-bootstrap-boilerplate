import * as React from 'react';
import * as ReactDOM from 'react-dom';

export class FromgroupProperties {
    children?: Node;
    groupClasses?: string;
    hasError?: boolean;
    help?: string;
    helpClasses?: string;
    hideHelp?: boolean;
    hideLabel?: boolean;
    label?: string;
    labelClasses?: string;
}

export class Formgroup extends React.Component<FromgroupProperties, any> {

    constructor() {
        super();
    }

    public render(): any {

        let groupClasses = new Array<string>("input-field");
        if (this.props.groupClasses) {
            this.props.groupClasses.split(" ").forEach((cls) => groupClasses.push(cls));
        }
        if (this.props.hasError) {
            groupClasses.push('has-error');
        }
        let labelClasses = new Array<string>();
        if (this.props.labelClasses) {
            this.props.labelClasses.split(" ").forEach((cls) => labelClasses.push(cls));
        }
        let helpClasses = new Array<string>();
        if (this.props.helpClasses) {
            this.props.helpClasses.split(" ").forEach((cls) => helpClasses.push(cls));
        }

        let label;
        if (!this.props.hideLabel) {
            label = <label className={labelClasses.join(" ")}>
                {this.props.label}
            </label>;
        }

        let help;

        if (!this.props.hideHelp) {
            help = <span className={helpClasses.join(" ")}>
                {this.props.help}
            </span>;
        }

        return (
            <div className="row">
                <div className={groupClasses.join(" ")}>
                    {this.props.children}
                    {label}
                    {help}
                </div>
            </div>
        );
    }
}