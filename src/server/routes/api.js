var express = require('express');
var router = express.Router();

// Require Schema model in our routes modul
var Category = require('../models/Category');
var Job = require('../models/Job');
var User = require('../models/User');

// import controller from //controllers/index.js which contains all controllers
var controllers = require('../controllers')

router.get('/:resource', function(req, res, next){
	var resource = req.params.resource;	
	var controller = controllers[resource]

	if (controller == null){
		res.json({
			confirmation: 'fail',
			message: 'Invalid api resource request: ' + resource,
			avaiableResources: 'job, user, category'
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
		res.json({ 
			confirmation: 'success',
			resource: results
		})
	})
})

router.get('/:resource/:id', function(req, res, next){
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

	controller.findById(id, function(err, result){
		if (err){
			res.json({
				confirmation: 'fail',
				message: 'Id Not Found'
			})
			return
		}
		res.json({
			confirmation: 'success',
			result: result
		})
	})
})

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

	controller.find({ "category.region" : id }, function(err, result){
		if (err){
			res.json({
				confirmation: 'fail',
				message: 'Id Not Found'
			})
			return
		}
		res.json({
			confirmation: 'success',
			result: result
		})
	})
})

router.post('/:resource', function(req, res, next){
	var resource = req.params.resource
	var controller = controllers[resource]
	if (controller == null){
		res.json({
			confirmation: 'fail',
			message: 'Invalid api resource request: ' + resource
		})
	}

	controller.create(req.body, function(err, result){
		console.log(req.body + ' input')
		if (err){
			res.json({
				confirmation: 'fail',
				message: err
			})
			return
		}

		res.json({
			confirmation: 'success',
			result: result
		})
	})
})

module.exports = router;