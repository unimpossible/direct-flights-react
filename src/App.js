import React, { PureComponent } from 'react';
import Header from './Header';
import SearchInput from './SearchInput';
import AirportResults from './AirportResults';
import filterAirport from './filterAirport';
import ResultsModal from './ResultsModal';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      filteredAirport: filterAirport('', 40),
    };
  }

  componentDidMount()
  {
  }

  handleSearchChange = (event) => {
    this.setState({
      filteredAirport: filterAirport(event.target.value, 40),
    });
  }

  handleRowClick = (data) => {
      this.setState({
          isModalOpen:true,
          currentAirport:data,
      });
  }

  handleCloseModal = () => {
      this.setState({
          isModalOpen: false
      });
  }

  render() {
    return (
      <div
        className="modal-container"
        onClick={this.handleClick}>
        <Header/>
        <ResultsModal
          isOpen={this.state.isModalOpen}
          iata={this.state.currentAirport}
          closeModal={this.handleCloseModal}
        />
        <SearchInput
          textChange={this.handleSearchChange}
        />
        <AirportResults
          onRowClick={(data) => this.handleRowClick(data)}
          airportData={this.state.filteredAirport}
        />
      </div>
    );
  }
}
export default App;
