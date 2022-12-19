import express from "express"
import mongoose from "mongoose";

const PORT = process.env.PORT || 5000;
const app = express();

//connect to mongodb
const DB_USER = 'root'
const DB_PASSWORD = 'example'
const DB_PORT = 27017
const DB_HOST = 'mongo'

const URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`
mongoose.connect(URI).then(() => console.log("connected to mongodb ✅"))
    .catch((err) => console.log("fail to connect mongodb ⚠️"))

app.get('/', (req, res) => res.send('<h1>Hello rami!!! test!!</h1>'));

app.listen(PORT, () => console.log(`app is running on port ${PORT}`));