import React, { Component } from 'react';
import DateRange from "./inputs/DateRange";
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';
import Select from'react-select';


const styles = {
    block: {
        maxWidth: 250,
    },

    radioButton: {
        marginBottom: 16,
        float: "left",
        display: "flex"
   },
};

class Filters extends Component {
    constructor(props) {
        super(props);
        this.minDate = new Date();
        this.maxDate = new Date();
        this.minDate.setFullYear(this.minDate.getFullYear() - 12);
        this.minDate.setHours(0, 0, 0, 0);
        this.maxDate.setFullYear(this.maxDate.getFullYear());
        this.maxDate.setHours(0, 0, 0, 0);
        this.state = {value: '', minDate: this.minDate, maxDate: this.maxDate};
        this.handleSelect = this.handleSelect.bind(this);
        this.handleRadio = this.handleRadio.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleSelect(val) {
        this.setState({
            value: val
        });
    };

    handleRadio(event) {
        let name = event.target.value;
        console.log("change");
        this.setState({
            radio: name
        });
    };

    handleFormSubmit(event) {
        event.preventDefault();
        let users = [];
        for (let user of this.state.value) {
            users.push(user.value);
        }
        let min_date = this.state.minDate.toISOString().split('T')[0];
        let max_date = this.state.maxDate.toISOString().split('T')[0];
        let filters = `?consultor_id=${users}&min_date=${min_date}&max_date=${max_date}`;
        let url = `http://localhost:8000/relatorio/${filters}`;
        fetch(url).then((response) => {
            return response.json()
        }).then((json) => {
            this.props.controlFunc(json);

        });

    }

    render () {
        this.dataPeriodDate = {
            title:"Período",
            inputFrom: {
                placeholder: "De",
                name: "dateDe",
                minDate: this.state.minDate,
                handleChange: (event, date) => {
                    this.setState({
                        minDate: date,
                    });
                }
            },
            inputTo: {
                placeholder: "Até",
                name: "dateAte",
                maxDate: this.state.maxDate,
                handleChange: (event, date) => {
                    this.setState({
                        maxDate: date,
                    });
                }
            }
        };


        const getOptions = () => {
            return fetch(`http://localhost:8000/consultor/`)
                .then((response) => {
                    return response.json();
                }).then((json) => {
                    let result = json.map(obj =>  {
                        return {
                            value: obj.co_usuario,
                            label: obj.no_usuario
                        }
                    });
                    return { options: result };
                });
        };


        return (
            <div className="filter">
                <div className="container">

                            <DateRange data={this.dataPeriodDate}
                            onChange={this.handleRadio}
                            />
                            <div className="body">
                                <div className="row">
                                    <div className="col-sm-2">
                                        <RadioButtonGroup
                                            style={styles.block}
                                            name="typeUser"
                                            onChange={this.handleRadio}
                                            defaultSelected="consultor">
                                            <RadioButton
                                                value="consultor"
                                                label="Por consultor"
                                                style={styles.radioButton}
                                            />
                                            <RadioButton
                                                value="cliente"
                                                label="Por cliente"
                                                style={styles.radioButton}
                                            />
                                        </RadioButtonGroup>
                                    </div>
                                    <div className="col-sm-4">
                                        <Select.Async
                                            placeholder={"Consultores"}
                                            name="selectConsultor"
                                            loadOptions={getOptions}
                                            value={this.state.value}
                                            onChange={this.handleSelect}
                                            multi={true}
                                        />
                                    </div>
                                    <div className="col-sm-4">
                                        <RaisedButton
                                            onClick={this.handleFormSubmit}
                                         label="Consultar"
                                         primary={true}/>
                                    </div>
                                </div>
                            </div>
                </div>
            </div>
        );
    };
}

export default Filters;

