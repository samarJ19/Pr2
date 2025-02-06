const express = require("express");
const { PrismaClient } = require("@prisma/client");
const jwt = require("jsonwebtoken");
const prisma = new PrismaClient();
const router = express.Router();
const JWT_PASSWORD = process.env.JWT_PASSWORD;
router.post('/signup', async (req,res)=>{
    
    const body = req.body;
    console.log("Got the body: ",body);
    if(!body.first_name||!body.last_name||!body.email||!body.password){
        console.error({message:"Invalid credentails  ",
            error: err});
        res.status(511).json({message:"Signup failed !"}); 
    }
    try{
        let user = await prisma.user.findFirst({
            where:{
                email: body.email
            }
        })
        if(user){
            console.log({message:"User already exist with same emailId"})
            res.status(511).json({ message: "User already exist with same emailId" });
            return;
        }
         user = await prisma.user.create({
            data: {
                first_name:body.first_name,
                last_name:body.last_name,
                email: body.email,
                password: body.password,
            },
        });
        const userId = user.id;
        const token = jwt.sign({ userId: userId }, JWT_PASSWORD);
        res.cookie("token", token);
        res.json({ message: "signup successful !" });

    } catch(err){
        console.error({message:"Got the error while signing up ",
            error: err});
        res.status(511).json({message:"Signup failed !"});    
    }
})

router.post('/signin', async (req,res)=>{

    const body = req.body;
    console.log("Got the body: ",body);
    if(!body.email||!body.password){
        console.error({message:"Invalid credentails  ",
            error: err});
        res.status(511).json({message:"Signup failed !"}); 
    }
    try{
        const user = await prisma.user.findFirst({
            where: {
                email: body.email,
                password: body.password,
            }
        });
        if (user) {
            const token = jwt.sign({ userId: user.id }, JWT_PASSWORD);
            res.cookie("token", token);
            res.json({ message: "signin successful !" });
        } else {
            console.log({message:"User not found, check the credentials"})
            res.status(411).json({ message: "User not found !" });
        }

    } catch(err){
        console.error({message:"Got the error while signing up ",
            error: err});
        res.status(511).json({message:"Signup failed !"});    
    }
})
module.exports=router;