var express = require('express');
var router = express.Router();

// Require Schema model in our routes modul
var Category = require('../models/Category');
var Job = require('../models/Job');
var User = require('../models/User');
var Contact = require('../models/Contact');

// import controller from //controllers/index.js which contains all controllers
var controllers = require('../controllers')

// List all by resource type
router.get('/:resource', function(req, res, next){
	var resource = req.params.resource;	
	var controller = controllers[resource]

	if (controller == null){
		res.json({
			confirmation: 'fail',
			message: 'Invalid api resource request: ' + resource,
			avaiableResources: 'job, user, category, contact'
		})
		return
	}

	controller.find(req.query, function(err, results){
		if (err){
				res.json({ 
					confirmation: 'fail',
					resource: err
				})
			return;
		}
		// res.json({ confirmation: 'success',resource: results })
		res.json(results)
	})
})

// Find by id in resource type
router.get('/:resource/:id', function(req, res, next){
	var resource = req.params.resource;
	var id = req.params.id;
	console.log(id)
	var controller = controllers[resource]
	if (controller == null){
	res.json({
		confirmation: 'fail',
		message: 'Invalid api resource request: ' + resource
	})

	return
	}

	controller.findById(id, function(err, result){
		if (err){
			res.json({
				confirmation: 'fail',
				message: 'Id Not Found'
			})
			return
		}
		res.json(result)
	})
})

// Query region. Mainly for Jobs.
router.get('/:resource/region/:id', function(req, res, next){
	var resource = req.params.resource;
	var id = req.params.id;

	var controller = controllers[resource]
	if (controller == null){
	res.json({
		confirmation: 'fail',
		message: 'Invalid api resource request: ' + resource
	})

	return
	}

	controller.find({ "category.region" : new RegExp("^" + id, "i") }, function(err, result){
		if (err){
			res.json({
				confirmation: 'fail',
				message: 'Id Not Found'
			})
			return
		}
		res.json(result)
	})
})

// Query keyword. Mainly for Jobs.
router.get('/:resource/keyword/:id', function(req, res, next){
	var resource = req.params.resource;
	var id = req.params.id;

	var controller = controllers[resource]
	if (controller == null){
	res.json({
		confirmation: 'fail',
		message: 'Invalid api resource request: ' + resource
	})

	return
	}
	controller.find({ "category.keyword" : new RegExp("^" + id, "i") }, function(err, result){
		if (err){
			res.json({
				confirmation: 'fail',
				message: 'Id Not Found'
			})
			return
		}
		res.json(result)
	})
})

// Find and Update
router.post('/:resource', function(req, res, next){
	var resource = req.params.resource;
	// logic setup to read data.oauth for User model, name for Job model, and email for Contact model
	if (resource === 'contact') {
		var id = req.body.values.email
		req.body = req.body.values
	} else if (resource === 'job'){
		var id = req.body.values.name
		req.body = req.body.values
  } else if (resource === 'user') {
    var id = { _id: req.body._id };
	} else {
		var id = {'data.oauth':req.body.data.oauth}
	}
	// var id = req.body.data? req.body.data.oauth : req.body.values.name;
	console.log('id is',id)
	console.log("resource ", resource)
	console.log("values ", req.body)
	// adjust post request from Redux-form
	// if (resource == 'job') {
	// 	req.body = req.body.values
	// }
	var controller = controllers[resource]
	
	if (controller == null){
	res.json({
		confirmation: 'fail',
		message: 'Invalid api resource request: ' + resource
	})
	return
	}

	controller.findOneAndUpdate(id, req.body, function(err, result){
		if (err){
			res.json({
				confirmation: 'fail',
				message: err
			})
			return
		}
		res.json(result)
	})
})

// generate random listing
router.get('/:resource/featured/:count', function(req, res, next){
	var resource = req.params.resource;
	var count = parseInt(req.params.count);

	var controller = controllers[resource]
	if (controller == null){
	res.json({
		confirmation: 'fail',
		message: 'Invalid api resource request: ' + resource
	})

	return
	}
	controller.aggregate(count, function(err, result){
		if (err){
			res.json({
				confirmation: 'fail',
				message: 'Id Not Found'
			})
			return
		}
		res.json(result)
	})
})

// For adding application to User on Apply Jobs
router.post('/user/apply', function(req, res, next){
	var id = req.body.values.user
	req.body = req.body.values.input
	console.log('id is',id)
	console.log("values ", req.body)

	User.findOneAndUpdate({"_id":id}, {$push:{"data.applied" :req.body}}, function(err, result){
		if (err){
			res.json({
				confirmation: 'fail',
				message: err
			})
			return
		}
		res.json(result)
	})
})

module.exports = router;
