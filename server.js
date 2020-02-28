var express = require("express");

var PORT = process.env.PORT || 3000;
var path = require("path");
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
// var routes = require("./controllers/burger_controller");

app.use(express.static(__dirname + "/public/assets/css"));
app.use(express.static(__dirname + "/public/assets/javascript"));
app.use(express.static(__dirname + "/public/assets/images"));

console.log(__dirname + "/assets/css");
// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require("./routes/htmlRoutes.js")(app);
// require("./routes/author-api-routes.js")(app);
require("./routes/apiRoutes.js")(app);

// app.use(routes);
app.listen(PORT, function() {

    console.log("Server listening on: http://localhost:" + PORT);
});