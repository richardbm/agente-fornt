import React, { Component } from 'react';
import Moment from 'react-moment';
import 'moment/locale/pt';

import {
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';


class TableRelatorio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fixedHeader: true,
            fixedFooter: true,
            stripedRows: false,
            showRowHover: true,
            selectable: false,
            multiSelectable: false,
            enableSelectAll: false,
            deselectOnClickaway: false,
            showCheckboxes: false,
            height: 'auto',
        };
    }

    render() {

        let styleHeader = {
            textAlign: 'left',
            color: '000000'
        };
        let reduce = (field) => this.props.data.relatorio.map(a => a[field]).reduce((a, b) => a+b);
        return (
                <div className="body table-responsive" style={{marginDown: 30, marginTop: 30}}>
                    <Table
                        height={this.state.height}
                        fixedHeader={this.state.fixedHeader}
                        fixedFooter={this.state.fixedFooter}
                        selectable={this.state.selectable}
                        multiSelectable={this.state.multiSelectable}
                    >
                        <TableHeader
                            displaySelectAll={this.state.showCheckboxes}
                            adjustForCheckbox={this.state.showCheckboxes}
                            enableSelectAll={this.state.enableSelectAll}
                        >
                            <TableRow>
                                <TableHeaderColumn colSpan="3" tooltip="Consultor" style={styleHeader}>
                                    {this.props.data.no_usuario}
                                </TableHeaderColumn>
                            </TableRow>
                            <TableRow>
                                <TableHeaderColumn style={styleHeader} tooltip="Período">Período</TableHeaderColumn>
                                <TableHeaderColumn style={styleHeader} tooltip="Receita Líquida">Receita Líquida</TableHeaderColumn>
                                <TableHeaderColumn style={styleHeader} tooltip="Custo Fixo">Custo Fixo</TableHeaderColumn>
                                <TableHeaderColumn style={styleHeader} tooltip="Comissao">Comissao</TableHeaderColumn>
                                <TableHeaderColumn style={styleHeader} tooltip="Lucro">Lucro</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody
                            displayRowCheckbox={this.state.showCheckboxes}
                            deselectOnClickaway={this.state.deselectOnClickaway}
                            showRowHover={this.state.showRowHover}
                            stripedRows={this.state.stripedRows}
                        >
                            {this.props.data.relatorio.map((row, index) => (
                                <TableRow key={index}>
                                    <TableRowColumn>
                                        <Moment format={"MMMM YYYY"}>
                                            {row.date_month}
                                        </Moment>
                                    </TableRowColumn>
                                    <TableRowColumn>{row.receita}</TableRowColumn>
                                    <TableRowColumn>{row.custo_fixo}</TableRowColumn>
                                    <TableRowColumn>{row.comissao}</TableRowColumn>
                                    <TableRowColumn>{row.lucro}</TableRowColumn>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter
                            adjustForCheckbox={this.state.showCheckboxes}
                        >
                            <TableRow>
                                <TableRowColumn>Saldo</TableRowColumn>
                                <TableRowColumn>{reduce('receita')}</TableRowColumn>
                                <TableRowColumn>{reduce('custo_fixo')}</TableRowColumn>
                                <TableRowColumn>{reduce('comissao')}</TableRowColumn>
                                <TableRowColumn>{reduce('lucro')}</TableRowColumn>
                            </TableRow>
                        </TableFooter>
                    </Table>
                    <hr/>
            </div>
        );
    };
}

export default TableRelatorio;

