//server.js
'use strict'
//first we import our dependencies…
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Comment = require('./model/comments')
//and create our instances
var app = express();
var router = express.Router();
//set our port to either a predetermined port number if you have set
//it up, or 3001
var port = process.env.API_PORT || 3001;
// mongodb tei holboh
mongoose.connect('mongodb://tugu11:emeeuvuubisaa3@ds111748.mlab.com:11748/mongo')


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
//and remove cacheing so we get the most recent comments
 res.setHeader('Cache-Control', 'no-cache');
 next();
});
app.use('/api', router);

router.get('/', function (req, res) {
  res.json({message: "API ajillaj bn"})
})

router.route('/comments')
  .get(function (req, res) {
    Comment.find(function (err, comments) {
      if (err) {
        res.send(err)
      };
      res.json(comments)
    })
  })
  .post(function (req, res) {
    var comment = Comment();
    comment.author = req.body.author;
    comment.text = req.body.text;
    comment.save(function (err) {
      if (err) {
        res.send(err)
      } else {
        res.json({message: "Comment nemegldee"})
      }
    })
  })



app.listen(port, function () {
  console.log(`API ${port} port deer ajillaj bn`);
})
