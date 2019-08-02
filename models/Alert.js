import { Schema, model } from 'mongoose';
import User from './User';

const AlertSchema = new Schema({
	type: {
		type: String,
		required: false,
		default: '',
	},
	description: {
		type: String,
		required: false,
		default: '',
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
});

export default model('Alert', AlertSchema);
