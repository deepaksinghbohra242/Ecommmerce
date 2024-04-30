const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
    shopName: { type: String, required: true },
    shopkeeperName: { type: String, required: true },
    shopId: { type: String, unique: true, required: true },
    address: { type: String, required: true },
    img_path: { type: String } // Add img_path field for the image path
});

const Shop = mongoose.model('Shop', shopSchema);

module.exports = Shop;
