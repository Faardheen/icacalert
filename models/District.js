import { Schema, model } from 'mongoose';
import User from './User';

const DistrictSchema = new Schema({
    name: String
});

export default model('Alert', DistrictSchema);
