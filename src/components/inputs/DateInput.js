import React, { Component } from 'react';

const DateInput = (props) => {
    return (
        <div className="col-sm-4">
            <div className="form-group">
                <div className="form-line">
                    <input type="text" className="datepicker form-control"
                           name={props.data.name}
                           placeholder={props.data.placeholder} />
                </div>
            </div>
        </div>

    );
};

export default DateInput;

