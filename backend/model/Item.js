const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    shopId: { type: String, required: true },
    itemName: { type: String, required: true },
    itemType: { type: String },
    rate: { type: Number, required: true },
    brand: { type: String },
    description: { type: String },
    img_path: { type: String } 
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
