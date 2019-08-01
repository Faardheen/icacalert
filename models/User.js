import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    email: String,
    password: String,
    phone: Number
});

export default model('User', UserSchema);
