const usersModel = require('../model/users.model.js');
const bcrypt = require('bcrypt');
const serviceAuth = require('../service/serviceAuth.js');

async function signUpUser(req, res){
    try {
        const { name, email, password } = req.body;
        const isUserExist = await usersModel.findOne({ email: email });

        if (isUserExist) {
            return res.status(409).json({
                error: 'User already registered',
                message: 'The username or email is already taken',
                userExist: false
            });
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const token = serviceAuth.createUserToken({ name, email });

        const user = await new usersModel({
            name: name,
            email,
            password: hashPassword,
            accessToken: token,
        }) 

        //you can use with find function and select those which u don't want
        // .select('-password -accessToken');

        const result = await user.save();
        res.cookie('uid', token, { httpOnly: true });
        res.setHeader('Authorization', `Bearer ${token}`);

        const userResult = {
            name  : result.name,
            email : result.email,
            _id   : result._id
        }
        return res.status(201).json({ message: "User is sucessfull SignUp", userResult });
    } catch (err) {
        console.log("here is the errror ", err);
        return res.status(404).json({ message: err.message, err });
    }
};


async function loginUser(req, res){

    try {
        const { email, password } = req.body;
        const userExist = await usersModel.findOne({ email: email });
        if (!userExist) {
            return res.json({ message: "user doesn't Exist" });
        }
        const authToken = req.cookies?.uid;

        const resultUser = {
            _id  : userExist._id,
            name : userExist.name,
            email: userExist.email,          
        };
        if (!authToken) {
            const userExistInfo = await bcrypt.compare(password, userExist.password);
            if (userExistInfo) {
                const token = serviceAuth.createUserToken({ name: userExist.name, email });
                res.cookie('uid', token, { httpOnly: true, });

                return res.status(200).json({
                    message: "You are SuccessFull logged in",
                    result: resultUser, userExistInfo,
                    status : 200
                });
            }
            
            return res.status(404).json({ message: "Invalid Credintial", userExistInfo });
        }

        return res.json({ message: "You are allow to login ", UserVerification });
    } catch (err) {
        console.log(err);
        res.status(404).json({ message: "You are getting Error", errorMsg: err });
    }
};

module.exports = {
	signUpUser,
	loginUser,
}