const mongoose = require('mongoose');

const VtuberSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    gen: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
}, {collection: 'vtuberwordle'});

VtuberSchema.index({first_name:1},{last_name:1});


VtuberSchema.virtual('name').get(function () {
    let fullname = '';
    if (this.first_name && this.last_name) {
        fullname = `${this.last_name}, ${this.first_name}`;
    }
    return fullname;
})



module.exports = mongoose.model('Vtuber', VtuberSchema);