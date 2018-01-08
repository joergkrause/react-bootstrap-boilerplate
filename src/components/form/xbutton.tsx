import * as React from 'react';
import * as ReactDOM from 'react-dom';
//import { Button, Icon } from 'react-materialize';

class ButtonProperties {
    children?: Node;
    disabled?: boolean;
    inputClasses?: string;
    submitIcon?: boolean;
    name?: string;
    onClick?: React.EventHandler<React.MouseEvent<HTMLButtonElement>>;
    type?: string;
    value?: string
}


export class XButton extends React.Component<ButtonProperties, any> {

    constructor() {
        super();
    }

    handleClick(event: React.MouseEvent<HTMLButtonElement>): void {
        console.log("xbutton click");
        if (this.props.onClick){
            this.props.onClick(event);
        }
    }

    public render(): any {
        // merge default classes with additional once
        let inputClasses = new Array<string>("btn waves-effect waves-light");
        if (this.props.inputClasses) {
            this.props.inputClasses.split(" ").forEach((cls) => inputClasses.push(cls));
        }
        return (
            <button
                type={this.props.type}
                className={inputClasses.join(" ")}
                name={this.props.name}
                value={this.props.value}
                disabled={this.props.disabled}
                onClick={(e) => this.handleClick(e)}>
                {this.props.children}
                {this.props.submitIcon ? <i className="material-icons right">send</i> : ''}
            </button>
        )
    }
}

/**
 
            <Button waves='light'
                    effect='waves'
                    type={this.props.type}
                    className={inputClasses.join(" ")}
                    disabled={this.props.disabled}
                    onClick={this.props.onClick}>
                    {this.props.children}
                </Button>
                );

 */