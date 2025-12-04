import {Request, Response} from "express";
import User from  "../models/User";
import jwt from  "jsonwebtoken";
import bcrypt from "bcrypt";

export const register = async (req:Request, res:Response)=>{
    try {
        const {name, email, password, role} = req.body;

        // exist user
        const userExist = await User.findOne({email});
        if(userExist){
            return res.status(400).json({status: false, message: "User already exist"});
        }
        // hash passowrd
        const hashedPassword = await bcrypt.hash(password,10);

        // save data
        const newUser = await User.create({name,email,password:hashedPassword,role});

        return res.status(201).json({
            status:true,
            message:"User created successfully",
            data:newUser
        })
    } catch (error) {
        return res.status(500).json({
            status:false,
            message:"Something went wrong",
            error
        })
    }
}


export const login = async (req:Request, res:Response)=>{
    try{
        const {email,password} = req.body;

        // Find user
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json({status: false, message: "User not found"});
        }

        // compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({status: false, message: "Invalid password"});
        }

        // create jwt token
        const token = jwt.sign(
            {id:user._id,role:user.role}, 
            process.env.JWT_SECRET_KEY!, 
            {expiresIn:"7d"}
        );

        return res.status(201).json({
            status:true,
            message:"User logged in successfully",
            token:token,
            user:user
        })
    }catch(error){
        return res.status(500).json({
            status:false,
            message: "Server error",
            error
        })
    }
}