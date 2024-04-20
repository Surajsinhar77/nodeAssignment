const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
	name : {
		type : String,
		required : true,
	},

	email : {
		type : String,
		required : true,
		unique : true,
	},

	password : {
		type : String,
		required : true,
	},

	accessToken : {
		type : String,
		required : true,
		unique : true,
	}
});

const usersModel = mongoose.model('User',usersSchema );

module.exports = usersModel;