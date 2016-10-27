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
table.update.access = 'authenticated';
table.delete.access = 'authenticated';
table.insert.access = 'authenticated';

module.exports = table;
