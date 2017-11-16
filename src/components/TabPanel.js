import React, { Component } from 'react';
import Highcharts from 'highcharts';
import ReactHighcharts from 'react-highcharts';
import TableRelatorio from "./TableRelatorio";
import ChartConsultores from "./ChartConsultores";
import PieChartConsultores from "./PieChartConsultores";


class TabPanel extends Component {

    focus() {
        this.tabActive.focus();
    }

    render() {

        return (
            <div className="body">

                <ul className="nav nav-tabs tab-nav-right" role="tablist">
                    <li role="presentation" className="active">
                        <a href="#home_only_icon_title" data-toggle="tab">
                            <i className="material-icons">playlist_add_check</i>
                            <span className="hidden-xs">RELATÓRIO</span>
                        </a>
                    </li>
                    <li role="presentation">
                        <a href="#profile_only_icon_title" data-toggle="tab">
                            <i className="material-icons">insert_chart</i>
                            <span className="hidden-xs">GRÁFICO</span>
                        </a>
                    </li>
                    <li role="presentation">
                        <a href="#messages_only_icon_title" data-toggle="tab">
                            <i className="material-icons">pie_chart</i>
                            <span className="hidden-xs">PIZZA</span>
                        </a>
                    </li>
                </ul>


                <div className="tab-content">
                    <div role="tabpanel" className="tab-pane fade active in" id="home_only_icon_title">

                        {this.props.data.map((consultor, index) => (
                            <TableRelatorio key={index} data={consultor}/>
                        ))}
                    </div>
                    <div role="tabpanel" className="tab-pane fade" id="profile_only_icon_title">
                        {this.props.data &&
                            <ChartConsultores data={this.props.data}/>
                        }
                    </div>
                    <div role="tabpanel" className="tab-pane fade" id="messages_only_icon_title">
                        {this.props.data &&
                        <PieChartConsultores data={this.props.data}/>
                        }
                    </div>
                </div>
            </div>
        );
    };
}

export default TabPanel;

