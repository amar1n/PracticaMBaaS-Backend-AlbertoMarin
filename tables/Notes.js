/**
 * Created by alberto on 27/10/16.
 */

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

table.insert(function (context) {
    context.item.author = context.user.id;
    return context.execute();
});

table.read(function (context) {
    context.query.where( { author : context.user.id } );
    return context.execute();
});

table.read.access = 'authenticated';
table.update.access = 'authenticated';
table.delete.access = 'authenticated';
table.insert.access = 'authenticated';

module.exports = table;
