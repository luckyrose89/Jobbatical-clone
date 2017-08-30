var JobController = require('./JobController')
var UserController = require('./UserController')
var CategoryController = require('./CategoryController')
var ContactController = require('./ContactController')

module.exports = {
	job: JobController,
	user: UserController,
	category: CategoryController,
	contact: ContactController
}