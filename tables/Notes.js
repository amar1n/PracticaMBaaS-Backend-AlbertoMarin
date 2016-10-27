var azureMobileApps = require('azure-mobile-apps');

var table = azureMobileApps.table();
table.columns = {
    "title": "string",
    "text": "string",
    "photoUrl": "string",
    "author": "string",
    "points": "number",
    "votes": "number",
    "latitude": "number",
    "longitude": "number",
    "state": "number"
};

table.dynamicSchema = false;

table.read.access = 'anonymous';
table.update.access = 'anonymous';
table.delete.access = 'anonymous';
table.insert.access = 'anonymous';

module.exports = table;
