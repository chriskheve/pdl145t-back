const mongoose = require('mongoose');


const provinceSchema = new mongoose.Schema({
    nom:{
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    chef_lieu: {
        type: String,
        required: false,
    },
},{timestamps: true});

const Province = mongoose.model('Province', provinceSchema)

module.exports = Province