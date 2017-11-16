import React, { Component } from 'react';
import Highcharts from 'highcharts';
import ReactHighcharts from 'react-highcharts';
import TableRelatorio from "./TableRelatorio";

class ChartConsultores extends Component {


    render() {
        function isNumber( input ) {
            return !isNaN( input );
        }

        let categories = this.props.data.map(obj => obj.no_usuario);
        let receitas = () => this.props.data.map(a => a.relatorio.reduce((a, b) => {
            if (isNumber(a)) {
                return a + b.receita;
            } else {
                return a.receita + b.receita;
            }
        }));

        const custo_fixo = this.props.data.map(a => a.relatorio.reduce((a, b) => {
            if (isNumber(a)) {
                return a + b.custo_fixo;
            } else {
                return a.custo_fixo + b.custo_fixo;
            }
        }) / a.relatorio.length);

        let config = {
            chart: {
                zoomType: 'xy'
            },
            title: {
                text: 'Average Monthly Temperature and Rainfall in Tokyo'
            },
            subtitle: {
                text: ''
            },
            xAxis: [{
                categories: categories,
                crosshair: true
            }],
            yAxis: [{ // Primary yAxis
                labels: {
                    format: '{value} $',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                },
                title: {
                    text: 'Receita',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                }
            }, { // Secondary yAxis
                title: {
                    text: 'Receita',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                labels: {
                    format: '{value} $',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                opposite: true
            }],
            tooltip: {
                shared: true
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                x: 120,
                verticalAlign: 'top',
                y: 100,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
            },
            series: [{
                name: 'Consultores',
                type: 'column',
                yAxis: 1,
                data: receitas(),
                tooltip: {
                    valueSuffix: ' $'
                }

            },
            {
                name: 'Custo fixo medio',
                type: 'spline',
                yAxis: 1,
                data: custo_fixo,
                tooltip: {
                    valueSuffix: ' $'
                }
            }]
        };

        return (
            <ReactHighcharts config={config} />
        );
    };
}

export default ChartConsultores;

