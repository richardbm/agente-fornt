import React, { Component } from 'react';

class InputRadio extends Component {

    constructor(props) {
        super(props);
        this.state = {radio: 'consultor'};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        let name = event.target.key;
        console.log("change");
        this.setState({
                radio: name
        });

    };

    render () {
        this.data = this.props.data;

        return (
            <span>
                <input value={this.data.name}
                       type="radio"
                       checked={this.state.radio === this.data.name}
                       onChange={this.handleChange}
                       className="with-gap"/>
                <label>{this.data.title}</label>
            </span>

        );
    };
}

export default InputRadio;

