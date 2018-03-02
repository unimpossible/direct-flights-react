import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import AirportResultRow from './AirportResultRow';
import './AirportResults.css';

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
        <div className="component-airport-results">
            {this.props.airportData.map((airportData)=>
                <AirportResultRow
                    onClick= {(data) => this.props.onRowClick(data)}
                    key={airportData.iata}
                    iata={airportData.iata}
                    city={airportData.city}
                    country={airportData.country}
                    name={airportData.name}
                />
            )}
        </div>
        );
    }
}

AirportResults.propTypes = {
    airportData: PropTypes.array,
    onRowClick: PropTypes.func,
};
export default AirportResults;
