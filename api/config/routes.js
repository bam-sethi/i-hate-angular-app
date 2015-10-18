var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser'); 
var methodOverride = require('method-override'); 

var hateAngularController = require('../controllers/hate-angular-controller.js');

router.route('/posts')
  //GET all posts
  .get(hateAngularController.getAll)

  //POST a new post
  .post(hateAngularController.createPost);



module.exports = router