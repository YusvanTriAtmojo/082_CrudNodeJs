import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 8000;

app.use(bodyParser.json());
app.listen(PORT, () => 
    console.log(
        `Server berjala di port : http://localhost:${PORT}`)
);
