'use strict';
const axios = require('axios');
const fruitsModel = require('../models/fruits.model');

const getItem = async (req, res) => {

    const url = "https://fruit-api-301.herokuapp.com/getFruit";

    const fruitsUrl = await axios.get(url);
    res.send(fruitsUrl.data)
}

const addToFruits = (req, res) => {
    console.log(req.body);
    const { name, image, price, email } = req.body
    const newFruite = new fruitsModel({
        name, image, price, email
    });
    newFruite.save();
    res.json(newFruite);

}

const getFruit = (req, res) => {
    fruitsModel.find({ email: req.query.email }, (err, data) => {
        res.send(data)
    })

}
const deleteFruit = (req, res) => {
    const fruitId = req.params.fruit_id;
    fruitsModel.deleteOne({ _id: fruitId }, (err, deleteData) => {
        res.json(deleteData)
    })
}
const updateFruit = (req, res) => {
    const { name, image, price, email } = req.body;
    const fruitId = req.params.fruit_id;
    fruitsModel.findByIdAndUpdate({ _id: fruitId }, { name, image, price, email }, { new: true }, (err, updateData) => {
        res.json(updateData)
    })
}

module.exports = { getItem, addToFruits, getFruit, deleteFruit, updateFruit }