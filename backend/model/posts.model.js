const mongoose = require('mongoose');

const postsSchema = mongoose.Schema({
	title : {
		type : String,
		required : true,
		unique : true,
	},

	discription : {
		type : String,
		required : true,
	},

	like : {
		type : Number,
		required : true,
		default : 0, 
	},

	user : {
		type : mongoose.Schema.Types.ObjectId,
		required : true,
		ref : 'usersModel',
	},

	comment : {
		type : mongoose.Schema.Types.ObjectId,
		required : true,
		ref : 'commentsModel',
	}
});

const postsModel = mongoose.model('posts', postsSchema);

module.exports = postsModel;