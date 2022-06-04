import express from "express";
import Hotel from "../models/Hotel";

const router = express.Router();

//CREATE
router.post('/', async (req, res) => {
  const newHotel = new Hotel(req.body)
  try {
    
  } catch (error) {
    res.status(500).json(error)
  }
})
//UPDATE
//DELETE
//GET
//GET ALL

export default router