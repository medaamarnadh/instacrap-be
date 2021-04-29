const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    profileUrl: { type: Schema.Types.String},
    fetchedBy: { type: Schema.Types.ObjectId, ref: 'Account'},
    isProcessed: { type: Schema.Types.Boolean }
});

module.exports = mongoose.model('InstaLink', schema);