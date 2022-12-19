import express from "express"
import mongoose from "mongoose";
import { createClient } from 'redis';

//init app
const PORT = process.env.PORT || 5000;
const app = express();

//connect to redis
const REDIS_PORT = 6379
const REDIS_HOST = 'redis'
// const redisClient = createClient();
const redisClient = createClient({
    url: `redis://${REDIS_HOST}:${REDIS_PORT}`
});
redisClient.on('error', (err) => console.log('Redis Client Error ⛔', err));
await redisClient.on('connect', () => console.log('Connected to redis ✅'));
await redisClient.connect();

//connect to mongodb
const DB_USER = 'root'
const DB_PASSWORD = 'example'
const DB_PORT = 27017
const DB_HOST = 'mongo'

const URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`
mongoose.connect(URI).then(() => console.log("connected to mongodb ✅"))
    .catch((err) => console.log("fail to connect mongodb ⛔"))

app.get('/', (req, res) => {
    redisClient.set('products', 'Products ...🔥')
    res.send('<h1>Hello rami!!! test!!</h1>')
});

app.get('/data', async (req, res) => {
    const products = await redisClient.get('products')
    res.send(`<h1>Hello rami!!! test!!</h1><h2>${products}</h2>`)
});

app.listen(PORT, () => console.log(`app is running on port ${PORT}`));