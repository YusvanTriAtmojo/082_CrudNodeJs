import express, { Router } from "express";

const router = express.Router();

const mobil = [
    {
        merk: "Toyota",
        model: "Avanza",
        warna: "Hitam",
        tahun: 2021,
    },
    {
        merk: "Porshe",
        model: "Sport",
        warna: "Kuning",
        tahun: 2024,
    },
];
router.get("/", (req,res) => {
    res.send(mobil);
});
export default router;
