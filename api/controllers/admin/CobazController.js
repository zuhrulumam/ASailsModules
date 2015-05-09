var adminModule = require('../../modules/admin/login.js');

module.exports = {

	_config: {
		actions: true, 
		shortcuts: true,
		rest: true
	},

	coba: function(req, res, next){
		// res.view('coba', {balance: 1000});
		adminModule.index(res);
	},

	coba2: function(req, res){
		res.view('admin/coba2', {balance: 781213});
	}
};