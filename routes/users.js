import express from "express";

import { deleteUser,updateUser,getUser,getUsers } from "../controllers/user.js";

const router=express.Router()

import { verifyToken, verifyUser,verifyAdmin } from "../utils/verfyToken.js";

//Token Verfication

// router.get('/checkauthentication',verifyToken,(req,res,next)=>{
//     res.send("Hello user You are Loggedin!")
// })


// router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
//   res.send("hello user, you are logged in and you can delete your account")
// })

// router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
//   res.send("hello admin, you are logged in and you can delete all accounts")
// })



//Update

router.put('/:id',verifyUser,updateUser)


 //Delete

 router.delete("/:id",verifyUser,deleteUser)

 //get single User

 router.get('/:id',verifyUser,getUser)

 //get All Users

 router.get('/',verifyAdmin,getUsers)


export default router;
