/**
 * Created by alberto on 29/10/16.
 */

var api = {
    get: function (req, res, next) {
        console.log(".....................1");
        if (req.param.length < 0) {
            return next();
        }
        console.log(".....................2");

        var context = req.azureMobile;
        console.log(".....................3");
        var query = {
            sql: "update Notas set puntos = " + req.query.puntos
        };
        console.log(".....................4");

        context.data.execute(query)
            .then(function (result) {
                res.status(200).json({message: 'AMG'});
            });
    }
};

api.get.access = 'anonymous';

module.exports = api;