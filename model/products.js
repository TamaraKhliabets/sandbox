let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ProductsSchema = new Schema({
    key: String,
    url: String,
    price: String,
    currencyId: String,
    categoryId: String,
    picture: String,
    store: String,
    pickup: String,
    delivery: String,
    local_delivery_cost: String,
    name: String,
    vendor: String,
    description: String,
    sales_notes: String,
    manufacturer_warranty: String,
    country_of_origin: String,
    barcode: String,
    weight: String,
    dimensions: String
});

module.exports = mongoose.model('Product', ProductsSchema);