var routeList = require('./src/routes.json');
var airportList = require('./src/airports.json');
var airlineList = require('./src/airlines.json');

var get_directs = function()
{
    var allDirects = {};

    for (i = 0; i < airportList.length; i++)
    {
        airport = airportList[i];
        directs = []
        if (airport.iata.startsWith("\\"))
            continue;

        for (j = 0; j < routeList.length; j++)
        {
            route = routeList[j];
            var row = {};

            if (route.airport_src != airport.iata.trim())
                continue;

            if (route.stops != 0)
            {
                continue;
            }

            if (route.codeshare != '')
                continue;

            //if (route.active!='Y')
            //    continue;

            row["key"] = j;
            row["dst_iata"] = route.airport_dst;
            row["airline"] = route.airline;
            row["equipment"] = route.equipment;
            directs.push(row);
        }

        allDirects[airport.iata] = directs;

    }
    return JSON.stringify(allDirects);
}

directs = get_directs();
console.log(directs);
