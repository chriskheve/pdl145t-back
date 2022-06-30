const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;


const territoireSchema = new mongoose.Schema({
    nom:{
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    province: {
        type: ObjectId,
        ref: 'Province',
        required: true,
    },
},{timestamps: true});

const Territoire = mongoose.model('Territoire', territoireSchema)

module.exports = Territoire