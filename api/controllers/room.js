import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";

// CREATE
export const createRoom = async (req, res, next) => {
  const hotelID = req.params.hotelID;
  const newRoom = new Room(req.body);
  try {
    const savedRoom = await newRoom.save();
    try {
      await Hotel.findByIdAndUpdate(hotelID, {
        $push: { rooms: savedRoom.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedRoom);
  } catch (err) {
    next(err);
  }
};
// UPDATE
export const updateRoom = async (req, res, next) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    ); //#set: MongoDB method.
    res.status(200).json(updatedRoom);
  } catch (err) {
    next(err);
  }
};
// DELETE
export const deleteRoom = async (req, res, next) => {
  const hotelID = req.params.hotelID;
  try {
    await Room.findByIdAndDelete(req.params.id);
    try {
      await Hotel.findByIdAndUpdate(hotelID, {
        $pull: { rooms: req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("Room has been deleted.");
  } catch (err) {
    next(err);
  }
};
//GET
export const getRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);
    res.status(200).json(room);
  } catch (err) {
    next(err);
  }
};
//GET ALL
export const getRooms = async (req, res, next) => {
  try {
    const room = await Room.find();
    res.status(200).json(room);
  } catch (err) {
    next(err);
  }
};
