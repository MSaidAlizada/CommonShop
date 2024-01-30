import express from 'express';
import mongoose, { connect } from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import ItemRoutes from './Routes/item.js';

dotenv.config()

const app = express();

app.use(express.urlencoded({
    extended: true,
    limit: '50mb'
}));
app.use("/", ItemRoutes);
app.use(cors());

const connectURL = 'mongodb+srv://commonshop:commonshop@cluster0.dl8lo6a.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(connectURL)
    .then(() => app.listen(5000))
    .catch((err) => console.log(err.message))