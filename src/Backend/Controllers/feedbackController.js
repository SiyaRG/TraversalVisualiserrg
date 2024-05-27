const Feedback = require("../Models/feedBackModel.js");
const mongoose = require("mongoose");
const sendEmail = require("./sendEmail.js");

//Get All Feedbacks
const getAllFeedbacks = async (request, response) => {
	const feedbacks = await Feedback.find({}).sort({ createdAt: -1 });
	respsonse.status(200).json(feedbacks);
};

//Get Single FeedBack
const getSingleFeedback = async (request, response) => {
	const { id } = request.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return respsonse.status(404).json({ error: "Invalid Id" });
	}
	const feedback = await Feedback.findById(id);
	if (!feedback) {
		response.status(404).json({ error: "feedback not found" });
	} else {
		respsonse.status(200).json(feedback);
	}
};

//Create new FeedBack
const createFeedBack = async (request, response) => {
	const { name, email, comment } = request.body;

	try {
		const feedback = await Feedback.create(name, email, comment);

		//send email

		sendEmail(
			process.env.EMAIL,
			process.env.PASSWORD,
			email,
			"COMMENT RECEIVED",
			`Dear, ${name}.
		Your comment was succesfully received by Siyabonga B Soko. I look forward to reading it!`
		);
		response.status(200).json(feedback);
	} catch (error) {
		response.status(400).json({ error: error.message });
	}
};

//Upate Feedback
const updateSingleFeedback = async (request, response) => {
	const { id } = request.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return respsonse.status(404).json({ error: "Invalid Id" });
	}
	const feedback = await Feedback.findOneAndUpdate(
		{ _id: id },
		{ ...request.body }
	);
	if (!feedback) {
		response.status(404).json({ error: "feedback not found" });
	} else {
		respsonse.status(200).json(feedback);
	}
};
//Delete Feedback
const deleteSingleFeedback = async (request, response) => {
	const { id } = request.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return respsonse.status(404).json({ error: "Invalid Id" });
	}
	const feedback = await Feedback.findOneAndDelete({ _id: id });
	if (!feedback) {
		response.status(404).json({ error: "feedback not found" });
	} else {
		respsonse.status(200).json(feedback);
	}
};

module.exports = {
	createFeedBack,
	getAllFeedbacks,
	getSingleFeedback,
	deleteSingleFeedback,
	updateSingleFeedback
};
