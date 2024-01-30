import Item from '../Models/item.js';

export async function getItems(req, res) {
    const items  = await Item.find({})
    res.status(200).json(items);
}

export async function createItem(req, res) {
    console.log(req.body)
    const title = req.body.title;
    const seller = req.body.seller;
    const price = req.body.price;
    const stock = req.body.stock;
    const imageLink = req.body.imageLink;
    const newItem = new Item({title: title, seller : seller, price : price, stock : stock, imageLink : imageLink})
    await newItem.save();
    res.status(201).json(newItem);
}

export async function changeItemStock(req, res){
    const newStock = req.body.newStock;
    const title = req.body.title;
    const updatedItem = await Item.findOneAndUpdate({ title: title }, { stock: newStock }, {
        returnOrginal: false
    });
    res.json(updatedItem);
}

export async function deleteItem(req, res){
    const title = req.body.title;
    const deleteditem = await Item.deleteOne({ title: title });
    res.json(deleteditem);
}