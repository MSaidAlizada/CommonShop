import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    title: {type : String, required : true},
    seller: {type : String ,required:true},
    price: {type : Number ,required:true},
    stock: {type : Number ,required:true},
    imageLink: {type : String ,required:true}
});

var Item = mongoose.model('Item', itemSchema);

export default Item;