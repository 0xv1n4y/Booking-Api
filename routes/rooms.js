import express from "express";
const router=express.Router()
import { verifyAdmin } from "../utils/verfyToken.js";
import { createRoom,updateRoom,deleteRoom,getRoom,getRooms } from "../controllers/room.js";

// Create

router.post('/:hotelid',verifyAdmin,createRoom)

//Update

router.put('/:id',verifyAdmin,updateRoom)


 //Delete

 router.delete("/:id/:hotelid",verifyAdmin,deleteRoom)

 //get single Room

 router.get('/:id',getRoom)

 //get All Rooms

 router.get('/',getRooms)




export default router;