import { Schema, model } from 'mongoose';
import User from './User';

const AlertSchema = new Schema({
	type: String,
	users: [User],
});

export default model('Alert', AlertSchema);
