import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import directsList from './directs.json';
import airlineList from './airlines.json';
import airportList from './airports.json';
import './ResultsModal.css';
import sort from './sort.js';

var Modal = require('react-bootstrap').Modal
var Table = require('react-bootstrap').Table

var g_airportNames = null;
var g_airlineNames = null;

class ResultsModal extends PureComponent
{
    static getAirportNames()
    {
        var i;
        if (g_airportNames)
            return g_airportNames;

        g_airportNames = {};
        for (i = 0; i < airportList.length; i++)
        {
          var airport = airportList[i];
          g_airportNames[airport.iata] = airport;
        }

        return g_airportNames;

    }
    static getAirlineNames()
    {
        var i;
        if (g_airlineNames)
            return g_airlineNames;

        g_airlineNames = {};
        for (i = 0; i < airlineList.length; i++)
        {
          var airline = airlineList[i];
          g_airlineNames[airline.iata] = airline.airline;
        }

        return g_airlineNames;
    }

    componentDidMount()
    {
        // load initially on first startup
        ResultsModal.getAirlineNames();
        ResultsModal.getAirportNames();
    }
    compoenentWillUnmount()
    {
    }

    render()
    {
        const iata = this.props.iata;
        var unsorted = directsList[iata];
        var data = [];
        if (unsorted)
        {
            for (let item of unsorted)
            {
                item["name"] = g_airportNames[item.dst_iata]["name"];
                item["city"] = g_airportNames[item.dst_iata]["city"];
                item["airline_name"] = g_airlineNames[item.airline];
            }
            data = sort(unsorted, "city", true);
        }

        return (
            <div>
              <Modal
                show={this.props.isOpen}
                onHide={this.props.closeModal}
              >
            <Modal.Header closeButton>
              <Modal.Title>{this.props.iata} Direct Flights</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table className="table-striped modal-result-table" responsive>
                    <thead>
                    <tr>
                      <th>IATA</th>
                      <th>Destination</th>
                      <th>Airline</th>
                    </tr>
                   </thead>
                <tbody>
                {data.map((r) =>
                    <tr key={r.key}>
                        <td>{r.dst_iata}</td>
                        <td>{r.city} 
                          <span className="subtitle hidden-xs">{r.name}</span></td>
                        <td>{r.airline_name}</td>
                    </tr>
                )}
                </tbody>
                </Table>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
          </Modal>

        </div>
        );
              
    }
}

ResultsModal.propTypes = {
    isOpen: PropTypes.bool,
    iata: PropTypes.string,
    closeModal: PropTypes.func,
};
export default ResultsModal;
