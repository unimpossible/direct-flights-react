import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './AirportResults.css';

var Table = require('react-bootstrap').Table

class AirportResults extends PureComponent
{
    componentDidMount()
    {
    }
    compoenentWillUnmount()
    {
    }

    render()
    {
        return(
        <Table responsive className="table-striped component-airport-results">
          <thead>
            <th>IATA</th>
            <th>City</th>
            <th>Name</th>
            <th className="hidden-xs">Country</th>
          </thead>
          <tbody>
            {this.props.airportData.map((airportData)=>
                <tr
                    onClick= {() => this.props.onRowClick(airportData.iata)}
                    key={airportData.iata}
                >
                <td>{airportData.iata}</td>
                <td className="title">{airportData.city}</td>
                <td>{airportData.name}</td>
                <td className="hidden-xs">{airportData.country}</td>
                </tr>
            )}
          </tbody>
        </Table>
        );
    }
}

AirportResults.propTypes = {
    airportData: PropTypes.array,
    onRowClick: PropTypes.func,
};
export default AirportResults;
