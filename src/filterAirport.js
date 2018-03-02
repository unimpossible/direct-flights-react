import airportList from './airports.json';

function sortResults(arr, prop, asc)
{
    return arr.sort(function(a, b) {
        if (asc)
            return a[prop] > b[prop] ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
        else
            return b[prop] > a[prop] ? 1 : ((b[prop] < a[prop]) ? -1 : 0);

    });
}

export default function filterAirport(searchText, maxResults) {
  var l = airportList.filter((airport) => {
    if (airport.iata.startsWith('\\'))
        return false;
    if (airport.name.toLowerCase().includes(searchText.toLowerCase())) {
      return true;
    }
    if (airport.iata.toLowerCase().includes(searchText)) {
      return true;
    }
    return false;
  });
  return sortResults(l, 'iata', true).slice(0, maxResults);
}
