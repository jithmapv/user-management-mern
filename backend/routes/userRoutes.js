const express = require("express");
const User =require("../models/userModel.js");
const { registerUser, authUser, updateUserProfile } = require("../controllers/userControllers");
//const {protect} = require("../middlewares/authMiddlewares");
const router = express.Router();

router.route("/").post(registerUser);
router.route("/login").post(authUser);
router.route("/profile").post(updateUserProfile);


router.route("/delete/:id").delete(async (req, res) =>
 {    let userid = req.params.id;
        await User.findByIdAndDelete(userid).then(() => {   
             res.status(200).send({ status: "Deleted Successfully!!!" })    }).catch((err) => {  
                   console.log(err.message)   
                  res.status(500).send({ status: "Error with the delete", error: err.message });  
              })})


module.exports = router;