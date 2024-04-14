const mongoose = require('mongoose');

const commentsSchema = mongoose.Schema({
	user :{
		type : mongoose.Schema.Types.ObjectId,
		ref : 'usersModel',
		required : true,
	},

	post : {
		type : mongoose.Schema.Types.ObjectId,
		ref : 'postsModel',
		required : true,
	},

	commentInfo : {
		type : String,
		required : true,
	},

	like : {
		type : Number,
		required : true,
	}
});


const commentModel = mongoose.model('comments', commentsSchema);

module.export = commentModel;