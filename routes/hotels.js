
import express from "express";

import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verfyToken.js";
const router=express.Router()

// Create

router.post('/',verifyAdmin,createHotel)

//Update

router.put('/:id',verifyAdmin,updateHotel)


 //Delete

 router.delete("/:id",verifyAdmin,deleteHotel)

 //get single hotel

 router.get('/:id',getHotel)

 //get All Hotels

 router.get('/',getHotels)




export default router;