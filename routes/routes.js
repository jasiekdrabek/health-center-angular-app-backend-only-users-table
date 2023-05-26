const express = require("express");
const router = express.Router();

const {
  auth,
  addUser,
  deleteUser,
  getAllUsers,
} = require("../controllers/userController");

router.post("/adduser", addUser);
router.get("/auth", auth);
router.delete("/deleteuser/:id", deleteUser);
router.get("/getallusers", getAllUsers);

module.exports = {
  routes: router,
};