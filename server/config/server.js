const express = require("express");
const path = require("path");
require("./db");
const cors = require("cors");
const helmet = require("helmet");
const logger = require("morgan");
const { env } = require("./config");
const routerMain = require("../routers");
const passport = require("passport");
const HttpError = require("http-errors");

// initializing the mongoose
require("./db")();

// get app
const app = express();

// setting logger
if (env === "development") {
  app.use(logger("dev"));
}

// get static folder path
const destinationDir = path.join(__dirname, "../../client/dist/client");

// stting static folder
app.use(express.static(destinationDir));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// secute app http
app.use(helmet());

// allow cors
app.use(cors());

// authentication
app.use(passport.initialize());

app.use("/api/v1", routerMain);

app.get("*", (req, res) => {
  return res.status(404).json({ message: "Invalid access" });
});

app.use((req, res, next) => {
  const error = new HttpError(404);
  return next(error);
});


app.use((err,req,res,next) => {
    res.status(500).json(err.status || 500).json({ message: err.message});
    next(err);
});

module.exports = app;
