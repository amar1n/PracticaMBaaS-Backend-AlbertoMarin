/**
 * Created by alberto on 20/10/16.
 */

var api = {
    get: function (req, res, next) {
        if (req.param.length < 0) {
            return next();
        }

        var context = req.azureMobile;
        // Las notas que están activas (deleted = 0) y que están publicadas (estado = 1)
        var query = {
            sql: "select * from Notas where deleted = 0 and estado = 1"
        };

        context.data.execute(query)
            .then(function (result) {
                res.json(result);
            });
    }

    //put: functi..
};

api.get.access = 'anonymous';

module.exports = api;