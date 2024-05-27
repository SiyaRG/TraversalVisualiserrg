const express = require("express");
const {
	createFeedBack,
	getAllFeedbacks,
	getSingleFeedback,
	deleteSingleFeedback,
	updateSingleFeedback
} = require("../Controllers/feedbackController.js");
const router = express.Router();

//get All
router.get("/", getAllFeedbacks);

//get Single
router.get("/:d", getSingleFeedback);

//Create Single
router.post("/:id", createFeedBack);

//Update Single
router.patch("/:id",updateSingleFeedback);

//Delete Single
router.delete("/:id",deleteSingleFeedback);

module.exports = router;
