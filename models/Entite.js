const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;


const entiteSchema = new mongoose.Schema({
    entite:{
        type: String,
        required: true,
    },
    description: {
        type: 'String',
        required: false,
    },
    territoire: {
        type: ObjectId,
        ref: 'Territoire',
        required: true,
    },
    longitude: {
        type: "String",
        required: true,
    },
    latitude: {
        type: "String",
        required: true,
    },
},{timestamps: true});

const Entite = mongoose.model('Entite', entiteSchema)

module.exports = Entite