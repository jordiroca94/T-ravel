const router = require("express").Router();
const User = require("../models/User");

//SIGNUP

router.post("/signup", async(req,res)=>{
    try{
        //new password 
        //27

        //new user 


        // save user and send response

    }catch(err){
        res.status(500).json(err)
    }
}

// LOGIN



module.exports = router 