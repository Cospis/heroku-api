const express = require("express");
const router = express.Router();
const {
  getCount,
  setCount,
  updateCount,
  deleteCount,
} = require("../controller/goalController");

router.route("/").get(getCount).post(setCount);
router.route("/:id").put(updateCount).delete(deleteCount);

module.exports = router;
