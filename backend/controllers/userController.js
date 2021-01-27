import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

// @desc  Auth user & get token
// @route  POST /api/user/login
// @access  Public
const authUser = asyncHandler(async(req,res) =>{
    const {email, password} = req.body

    res.send({email,password})
})

export {authUser}