import React, { Component } from 'react';
import Loader from './components/Header';
import Header from './components/Loader';
import './App.css';
import Menu from "./components/Menu";
import Filters from "./components/Filters";
import TabPanel from "./components/TabPanel";
import {teal500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: teal500,
        primary2Color: teal500,
        primary3Color: teal500,
        pickerHeaderColor: teal500,
    }
});

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {relatorio: []}
        this.handleResponse = this.handleResponse.bind(this);

    }

    handleResponse(json) {
        this.setState({
            relatorio: json
        });
        console.log(this.state.relatorio);
    }


  render() {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
            <div className="main">
                <Loader/>
                <Header/>
                <Menu/>
                <section className="content">
                    <div className="container-fluid">

                        <div className="row clearfix">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="card">
                                    <Filters
                                     data={this.props}
                                     controlFunc={this.handleResponse}/>

                                    <TabPanel data={this.state.relatorio}/>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </MuiThemeProvider>
        );
  }
}

export default App;
