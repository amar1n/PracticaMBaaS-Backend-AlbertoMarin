/**
 * Created by alberto on 20/10/16.
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
    }

    //put: functi..
};

api.get.access = 'anonymous';

module.exports = api;