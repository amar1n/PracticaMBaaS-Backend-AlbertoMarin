/**
 * Created by alberto on 29/10/16.
 */

var api = {
    get: function (req, res, next) {
        if (req.param.length < 0) {
            return next();
        }

        // var userId = context.user.id;
        // console.log('...................userId: ' + userId);

        var context = req.azureMobile;
        var query = {
            sql: "select * from Notas where deleted = 0"
        };

        context.data.execute(query)
            .then(function (result) {
                res.json(result);
            });
    },

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