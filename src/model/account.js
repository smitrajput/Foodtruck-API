import mongoose from 'mongoose';
import passLocMon from 'passport-local-mongoose';

const Schema = mongoose.Schema;

let Account = new Schema({
  email: String,
  password: String
});

Account.plugin(passLocMon);
module.exports = mongoose.model('Account', Account);
