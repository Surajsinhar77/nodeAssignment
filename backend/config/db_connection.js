const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB_URL).then(()=>{
	console.log("Database is sucessfull connected");
}).catch((err)=>{
	console.log("Error in the connection ", err);
})
