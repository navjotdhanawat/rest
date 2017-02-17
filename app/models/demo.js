var mongoose = require('mongoose');

module.exports = mongoose.model('Demo', {
    text: {
        type: String,
        default: ''
    }
});