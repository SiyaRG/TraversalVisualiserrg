const nodemailer = require("nodemailer");

const sendEmail = (sender, password, receiver, subject, textBody) => {
	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: sender,
			pass: password
		}
	});

	const mailOptions = {
		from: sender,
		to: receiver,
		subject: subject,
		text: textBody
	};
	return transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			return error;
		}
	});
};

module.exports=sendEmail;
