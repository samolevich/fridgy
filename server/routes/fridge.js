const express = require('express')
const route = express.Router()
const Product = require('../../immy's backend/models/products')

//MAIN PAGE

//1. render main fridge
//2. delete expired product from fridge
//3. add product to fridge
//4. 