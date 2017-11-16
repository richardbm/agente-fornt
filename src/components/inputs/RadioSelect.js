import React, { Component } from 'react';

class RadioSelect extends Component {

    constructor(props) {
        super(props);
    }



    render () {
        const data = this.props.data;
        const radioList = data.map((item, index) =>


            <span key={index}>
                <input value={item.value}
                       name="typeUser"
                       type="radio"
                       defaultChecked={item.value === "consultor"}
                       className="with-gap"/>
                <label>{item.title}</label>
            </span>
        );

        return (
            <div className="demo-radio-button hidden-xs">

                {radioList}

            </div>

        );
    };
}

export default RadioSelect;

