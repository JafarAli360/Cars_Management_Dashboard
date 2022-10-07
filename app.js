const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const bodyParser = require("body-parser");
const fs = require("fs");
const methodOverride = require("method-override");
const cors = require("cors");
const FileUpload = require("express-fileupload");

// create express app
const app = express();

//middleware
app.use(cors());
app.use(FileUpload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressLayouts);
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(methodOverride("_method"));

//route
const routes = require("./routes/routes");
app.use("/", routes);
app.set("views", "./views");
app.set("view engine", "ejs");

//start server
app.listen(3000, () => {
  console.log("Server running on port http://localhost:3000");
});
