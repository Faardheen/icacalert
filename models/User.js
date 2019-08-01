import { Schema, model } from 'mongoose';
// import Alert from './Alert';

const UserSchema = new Schema({
	email: {
		type: String,
		unique: true,
	},
	password: String,
	phone: {
		type: Number,
		unique: true,
	},
});

export default model('User', UserSchema);
