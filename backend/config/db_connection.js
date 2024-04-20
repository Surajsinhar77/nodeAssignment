const mongoose = require('mongoose');

function connectionToDB(){
	try{
			mongoose.connect(process.env.MONGO_DB_URL).then(()=>{
			console.log("Database is sucessfull connected");
		}).catch((err)=>{
			console.log("Error in the connection ", err);
		})
	}catch(err){
		console.log("This error from connectionToDB : error is ". err);
	}
};

module.exports = connectionToDB;
