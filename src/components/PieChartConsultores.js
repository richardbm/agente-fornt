import React, { Component } from 'react';
import Highcharts from 'highcharts';
import ReactHighcharts from 'react-highcharts';

class PieChartConsultores extends Component {


    render() {
        function isNumber( input ) {
            return !isNaN( input );
        }

        let receitas = () => this.props.data.map(a => {
            return {
                name: a.no_usuario,
                y:a.relatorio.reduce((a, b) => {
                    if (isNumber(a)) {
                        return a + b.receita;
                    } else {
                        return a.receita + b.receita;
                    }
                })
            }
        });

        let config = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Receitas'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        }
                    }
                }
            },
            series: [{
                name: 'Consultores',
                colorByPoint: true,
                data: receitas()
            }]
        };

        return (
            <ReactHighcharts config={config} />
        );
    };
}

export default PieChartConsultores;

