const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const ProjectSchema = Schema({
    place: {type: mongoose.Schema.Types.Mixed},
    placeId: {type: String, required: true},
    loc: {
        type: {
            type: "String",
            required: true,
            enum: ['Point', 'LineString', 'Polygon'],
            default: 'Point'
        },
        coordinates: [Number]
    },
    name: { type: String, required: true },
    reviews: [{
        text: {
            type: String,
            maxLength: 50,
        },
        rating: Number,
        user_id: {type: ObjectId, ref: 'User'},
    }],

    valueRatings: [{
        rating: Number,
        user_id: ObjectId,
    }],
});

module.exports = mongoose.model('Project', ProjectSchema);