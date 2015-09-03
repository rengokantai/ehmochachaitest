/**
 * Created by Hernan Y.Ke on 2015/9/2.
 */
var uniqueRandomArray = require('unique-random-array');
var starWarsNames = require('./star.json');
module.exports = {
    all:starWarsNames,
    random:uniqueRandomArray(starWarsNames)
};