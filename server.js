const express = require("express");
const bodyParser = require("body-parser");
const events = require("./Routes/event-route");
const user = require("./Routes/user-route");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(events);
app.use(user);

app.set("view engine", "hbs");

app.listen(4000, () => {
  console.log("Server is running");
});
