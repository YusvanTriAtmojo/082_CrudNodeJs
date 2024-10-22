import express from 'express';
import bodyParser from 'body-parser';
import mobilRoute from "./routes/Mobil.js";
import hewanRoute from "./routes/Hewan.js";

const app = express();
const PORT = 8000;

app.use(bodyParser.json());

app.use("/mobil", mobilRoute);
app.use("/hewan", hewanRoute);
app.get("/", (req,res) => {
    console.log(["GET ROUTE"]);
    res.send("Selamat Pagiiii");
});

app.listen(PORT, () => 
    console.log(
        `Server berjala di port : http://localhost:${PORT}`)
);
