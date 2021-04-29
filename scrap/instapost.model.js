const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    sourceInfo: { type: Object, required: true},
    created: { type: Date, default: Date.now },
    fetchedAt: { type: Date, default: Date.now },
    updated: Date,
    fetchedBy: { type: Schema.Types.ObjectId, ref: 'Account'},
    isProcessed: { type: Schema.Types.Boolean }
});

module.exports = mongoose.model('InstaPost', schema);