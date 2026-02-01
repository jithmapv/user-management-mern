const asyncHandler =require ("express-async-handler");
const User =require("../models/userModel.js");
const generateToken = require("../utils/generateToken.js");

const registerUser = asyncHandler(async (req, res) => {
    const { name, email,address, gender, password, pic } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error("User already exists");
      }
    
      const user = await User.create({
        name,
        email,
        address,
        gender,
        password,
        pic,
      });
    
      if (user) {
        res.status(201).json({
          _id: user._id,
          name: user.name,
          email: user.email,
          address: user.address,
          gender: user.gender,
          isAdmin: user.isAdmin,
          pic: user.pic,
          token: generateToken(user._id)
         
        });
      } else {
        res.status(400);
        throw new Error("Error Occured!");
      }
    });

    const authUser = asyncHandler(async(req,res) =>{
        const{ email, password} = req.body;

        const user = await User.findOne({email});

        if(user && (await user.matchPassword(password))){
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                address: user.address,
                gender: user.gender,
                isAdmin: user.isAdmin,
                pic: user.pic,
                token: generateToken(user._id)
            });

        }else {
        res.status(400);
        throw new Error("Invalid Email or Password!");
      }
    });

    

    const updateUserProfile = asyncHandler(async (req, res) => {
      const user = await User.findById(res.json("_id"));

      if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.address = req.body.address || user.address;
        user.gender = req.body.gender || user.gender;
        user.pic = req.body.pic || user.pic;
        if (req.body.password) {
          user.password = req.body.password;
        }
    
        const updatedUser = await user.save();
    
        res.json({
          _id: updatedUser._id,
          name: updatedUser.name,
          email: updatedUser.email,
          address: updatedUser.address,
          gender: updatedUser.gender,
          pic: updatedUser.pic,
          token: generateToken(updatedUser._id),
        });
      } else {
        res.status(404);
        throw new Error("User Not Found");
      }
    });

   
    




module.exports = {registerUser , authUser , updateUserProfile};
  