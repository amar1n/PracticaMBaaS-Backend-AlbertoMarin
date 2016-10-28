/**
 * Created by alberto on 28/10/16.
 */

var api = {
    get: function (req, res, next) {
        if (req.param.length < 0) {
            return next();
        }

        var context = req.azureMobile;
        var userId = context.user.id;
        console.log('...................userId: ' + userId);

        var query = {
            sql: "select * from Notas where autor = '" + userId + "'"
        };

        context.data.execute(query)
            .then(function (result) {
                res.json(result);
            });
    }

    //put: functi..
};

api.get.access = 'authenticated';

module.exports = api;