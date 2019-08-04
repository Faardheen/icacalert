import { Schema, model } from 'mongoose';

const AlertSchema = new Schema({
	type: {
		type: String,
		required: true,
		default: '',
	},
	description: {
		type: String,
		required: false,
		default: 'no description provided',
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
});

export default model('Alert', AlertSchema);
