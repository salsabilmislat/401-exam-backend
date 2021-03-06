'use strict';
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();
const server = express();
server.use(cors());
server.use(express.json());
const mongoose = require("mongoose");
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
mongoose.connect(MONGO_URL);
const {getItem,addToFruits,getFruit,deleteFruit,updateFruit}=require('./controllres/fruits.controller');
server.get('/allData',getItem);
server.post('/fruits',addToFruits);
server.get('/fruits',getFruit);
server.delete('/fruits/:fruit_id',deleteFruit);
server.put('/fruits/:fruit_id',updateFruit);

server.listen(PORT) ;