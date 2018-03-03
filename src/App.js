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
      overflowOriginal: document.body.style.overflow,
      positionOriginal: document.body.style.position,
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
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
  }

  handleCloseModal = () => {
      this.setState({
          isModalOpen: false
      });
      document.body.style.overflow = this.state.overflowOriginal;
      document.body.style.position = this.state.positionOriginal;
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
