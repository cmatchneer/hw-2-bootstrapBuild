const sendmail = require('sendmail')();

module.exports = function(app) {

    app.post("/api/email", function(req, res) {


        sendmail({
            from: req.body.email,
            to: 'cmatchneer@yahoo.com',
            subject: req.body.companyName,
            html: req.body.fullName + " " + req.body.questions,
        }, function(err, reply) {
            console.log(err && err.stack);
            console.dir(reply);
        });
        res.json("done");
    });
}