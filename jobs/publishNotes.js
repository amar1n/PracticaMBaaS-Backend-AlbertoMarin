var sql = require('mssql');

sql.connect("mssql://amarin:Qwe99Asd@amarin-scoops.database.windows.net:1433/amarin-scoops?encrypt=true")
    .then(function() {

        new sql.Request().query("UPDATE Notas SET estado = 1")
            .then(function(recordset) {
                console.log("All news published");
            }).catch(function(err) {
            console.error(err);
        });

    }).catch(function(err) {
    console.error(err);
});