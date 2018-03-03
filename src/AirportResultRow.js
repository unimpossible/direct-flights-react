import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './AirportResultRow.css';

class AirportResultRow extends PureComponent {
    render() {
        return (
            <div
              onClick = {() => this.props.onClick(this.props.iata)}
              className="component-airport-result-row"
            >
            <span className="title">
                {this.props.iata}  -  {this.props.name}, {this.props.city}
            </span>
            <span className="subtitle hidden-xs">
                {this.props.country}
            </span>
            <span className="info">
                Click to get flights
            </span>
        </div>
        );
    }
}
AirportResultRow.propTypes = {
    iata: PropTypes.string,
    city: PropTypes.string,
    country: PropTypes.string,
    symbol: PropTypes.string,
    onClick: PropTypes.func,
};
export default AirportResultRow;
