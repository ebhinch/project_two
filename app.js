require('dotenv').config();

//require express, bodyparser, methodoverride, mongoose...
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();

app.use(methodOverride('_method'))


const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true}); 

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Register Controllers


const indexController = require("./routes/indexController");
app.use("/", indexController);

const happeningController = require("./routes/happeningController");
app.use("/neighborhoods/:neighborhoodId/happenings", happeningController);

const neighborhoodController = require("./routes/neighborhoodController");
app.use("/neighborhoods", neighborhoodController);

const userController = require("./routes/userController");
app.use("/users", userController);

const adminController = require("./routes/adminController");
app.use("/admins", adminController);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
