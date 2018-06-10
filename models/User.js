const mongoose = require('mongoose');
const { schema } = mongoose;

const userSchema = new Schema({});

mongoose.model('users', userSchema);
