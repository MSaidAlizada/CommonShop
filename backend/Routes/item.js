import { getItems, createItem, changeItemStock, deleteItem } from '../Controller/item.js';
import express from "express";

const router = express.Router();

router.get('/getitems', getItems);
router.post('/createitem', createItem);
router.patch('/changeitemstock', changeItemStock);
router.delete('/deleteitem', deleteItem);

export default router;