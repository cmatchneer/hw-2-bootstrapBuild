var path = require("path");
module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // app.get("/contact", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/contact.html"));
    // });

    app.get("/portfolio", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/portfolio.html"));
    });
    // app.get("/dashboard", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/dashboard.html"));
    // });
    // app.get("/profile", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/profile.html"));
    // });

    // app.get("/login", function(req, res) {
    //     // If the user already has an account send them to the members page
    //     if (req.user) {
    //         res.redirect("/members");
    //     }
    //     res.sendFile(path.join(__dirname, "../public/login.html"));
    // });
};