import express, { Router } from "express";

const router = express.Router();

const hewan = [
    {
        nama: "Mbapee",
        jenis: "Kura-kura",
        habitat: "Darat & Air",
        umur: 6,
        makanan: "Sayuran",
        reproduksi: "Bertelur",
    },
    {
        nama: "Willy",
        jenis: "Paus Orca",
        habitat: "Air",
        umur: 12,
        makanan: "Daging",
        reproduksi: "Beranak",
    },
    {
        nama: "Moly",
        jenis: "Kucing",
        habitat: "Darat",
        umur: 2,
        makanan: "Daging",
        reproduksi: "Beranak",
    },
];

router.get("/", (req,res) => {
    res.send(hewan);
});
export default router;
