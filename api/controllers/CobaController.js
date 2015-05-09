
module.exports = {
	index: function(req, res, next){
		var actionModule = require('./admin/'+req.params.module+'Module');
		var actionController = req.params.controller;
		var action = req.params.action;

		// console.log(actionController);

		// actionModule.index();

		// actionModule.actionController.action(req, res, next);


	}
};