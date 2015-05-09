module.exports = {
	index: function(res){
		// console.log('lalalal');
		User.create({name : "umam"}, function(err, user){
			res.redirect('admin/user');
		});
	}
};