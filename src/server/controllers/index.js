var JobController = require('./JobController')
var UserController = require('./UserController')
var CategoryController = require('./CategoryController')

module.exports = {
	job: JobController,
	user: UserController,
	category: CategoryController
}