var Airtable = require('airtable');
var base = new Airtable({apiKey:'keycXkSkSRAAK3Y8G'}).base('appSnNqlVecEKQS7x');

base('Table 1').find('reck6e6V3S7nAXIgQ', function(err, record) {
    if (err) { console.error(err); return; }
    console.log('Number of Arrival', record.get('Number'));
    var myElement = document.getElementById('naming');
    myElement.innerHTML = 'Number of Arrival ' + record.get('Number');

}, function done(err) {
    if (err) { console.error(err); return; }
});

base('Table 1').find('recjQHpPFSRIv9pMZ', function(err, record) {
    if (err) { console.error(err); return; }
    console.log('Number of Departure', record.get('Number'));
    var myElement = document.getElementById('naming2');
    myElement.innerHTML = 'Number of Departure ' + record.get('Number');

}, function done(err) {
    if (err) { console.error(err); return; }
});