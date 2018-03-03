
function sortResults(arr, prop, asc)
{
    return arr.sort(function(a, b) {
        if (asc)
            return a[prop] > b[prop] ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
        else
            return b[prop] > a[prop] ? 1 : ((b[prop] < a[prop]) ? -1 : 0);

    });
}

export default sortResults;
