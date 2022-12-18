import express from "express"

const PORT = process.env.PORT || 5000;
const app = express();

app.get('/', (req, res) => res.send('<h1>Hello rami!!!</h1>'));

app.listen(PORT, () => console.log(`app is running on port ${PORT}`));