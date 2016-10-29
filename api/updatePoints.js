/**
 * Created by alberto on 29/10/16.
 */

var api = {
    get: function (req, res, next) {
        if (req.param.length < 0) {
            return next();
        }

        var context = req.azureMobile;
        var query = {
            sql: "update Notas set puntos = " + req.query.puntos + " where id = '" + req.query.id + "'"
        };

        context.data.execute(query)
            .then(function (result) {
                res.status(200).json({result: result});
            });
    }
};

api.get.access = 'anonymous';

module.exports = api;