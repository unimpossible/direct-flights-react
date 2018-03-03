import airportList from './airports.json';
import sortResults from './sort.js';

export default function filterAirport(searchText, maxResults) {
  var l = airportList.filter((airport) => {
      var query = searchText.toLowerCase();
    if (airport.iata.startsWith('\\'))
        return false;
    if (airport.name.toLowerCase().includes(query)) {
      return true;
    }
    if (airport.iata.toLowerCase().includes(query)) {
      return true;
    }
    if (airport.city.toLowerCase().includes(query))
    {
      return true;
    }
    return false;
  });
  return sortResults(l, 'iata', true).slice(0, maxResults);
}
