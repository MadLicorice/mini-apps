const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bowlingScores');

const Schema = mongoose.model('another', {name: String, score: Number});

module.exports.another = Schema;

/*
const Schema = mongoose.model('collectionTwo', {poop: String, score: Number})


*/

















//const Schema = mongoose.model('newCol', {name: String, birth: String, age: Number});