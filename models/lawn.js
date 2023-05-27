const mongoose = require('mongoose');

const ApplicationSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    amount: {
        type: Number,
        required: true
    }
});

const LawnSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    size: {
        type: Number,
        required: true
    },
    applications: [ApplicationSchema]
});

const Lawn = module.exports = mongoose.model('Lawn', LawnSchema);

module.exports.getAllLawns = (callback) => {
    Lawn.find(callback);
}

module.exports.getLawn = (id, callback) => {
    Lawn.findById(id, callback);
}

module.exports.addLawn = (newLawn, callback) => {
    newLawn.save(callback);
}

module.exports.updateLawn = (id, lawn, callback) => {
    Lawn.findByIdAndUpdate(id, lawn, callback);
}

module.exports.deleteLawn = (id, callback) => {
    Lawn.findByIdAndRemove(id, callback);
}
