const express = require("express");

const router = express.Router();

router.post('/signup', async (req,res)=>{
    
    const body = req.body;
    console.log("Got the body: ",body);
    try{
        
    } catch(err){
        console.error({message:"Got the error while signing up ",
            error: err});
        res.status(511).json({message:"Signup failed !"});    
    }
})
module.exports=router;