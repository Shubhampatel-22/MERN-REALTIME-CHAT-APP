const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/login", authUser);
router.post("/", registerUser);
router.get("/", protect, allUsers);

module.exports = router;
