/**
 * Created by alberto on 29/10/16.
 */

var api = {
    post: function (req, res, next) {

        //this is how we access the table
        var tabla = req.azureMobile.tables('Notas');
        var query = {
            sql: "update Notas set puntos = 69"
        };

        tabla.update(query)
            .then(function (result) {
                res.json(result);
            });
    }
};

api.get.access = 'anonymous';

module.exports = api;