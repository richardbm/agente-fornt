import React, { Component } from 'react';
import DatePicker from 'material-ui/DatePicker';
import Toggle from 'material-ui/Toggle';

const optionsStyle = {
    maxWidth: 255,
    marginRight: 'auto',
    marginLeft: 15,
    float: "left"
};

class DateRange extends Component {

    constructor(props) {
        super(props);
        this.state = {
            minDate: props.data.minDate,
            maxDate: props.data.maxDate,
            autoOk: false,
            disableYearSelection: false,
        };
    }

    render() {
        return (
            <div className="header">
                <h2>{this.props.data.title}</h2>
                <div className="row" >
                    <DatePicker style={optionsStyle}
                        onChange={this.props.data.inputFrom.handleChange}
                        autoOk={this.state.autoOk}
                        floatingLabelText="De"
                        defaultDate={this.props.data.inputFrom.minDate}
                        openToYearSelection={true}
                        locale={"pl"}
                    />
                    <DatePicker style={optionsStyle}
                        onChange={this.props.data.inputTo.handleChange}
                        autoOk={this.state.autoOk}
                        floatingLabelText="Até"
                        defaultDate={this.props.data.inputTo.maxDate}
                        openToYearSelection={true}
                        locale={"pl"}
                        hintText="pl locale"
                    />
                </div>
            </div>

        );
    }
}

export default DateRange;

