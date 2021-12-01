const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
	{
		username: { type: String, required: true, unique: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		isAdmin: {
			type: Boolean,
			default: false,
		},
		img: { type: String },
	},
	{ timestamps: true },
);

UserSchema.methods.toJSON = function () {
	const userDocument = this;
	const userObject = userDocument.toObject();
	delete userObject.password;
	return userObject;
};
module.exports = mongoose.model('User', UserSchema);
