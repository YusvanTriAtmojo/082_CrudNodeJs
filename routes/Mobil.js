import express, { Router } from "express";

const router = express.Router();

const mobil = [
    {
        id: 1,
        merk: "Toyota",
        model: "Avanza",
        warna: "Hitam",
        tahun: 2021,
    },
    {
        id: 2,
        merk: "Porshe",
        model: "Sport",
        warna: "Kuning",
        tahun: 2024,
    },
];
router.get("/", (req,res) => {
    res.send(mobil);
});

router.post("/", (req, res) => {
    const newMobil = {
        id: mobil.length + 1,
        merk: req.body.merk,
        model: req.body.model,
        warna: req.body.warna,
        tahun: req.body.tahun,
    };

    mobil.push(newMobil);
    res.status(201).json(newMobil);
});

router.delete('/:id', (req, res) => {
    const mobilIndex = mobil.findIndex(t => t.id === parseInt(req.params.id));
    if (mobilIndex === -1) return res.status(404).json({ message: 'Mobil tidak ditemukan' });

    const deletedMobil = mobil.splice(mobilIndex, 1)[0]; //menghapus dan menyimpan hewan yang dihapus
    res.status(200).json({ message: `Mobil '${deletedMobil.merk}' telah dihapus`});
});

router.put('/:id', (req, res) => {
    const car = mobil.find(t => t.id === parseInt(req.params.id));
    if (!car) return res.status(404).json({ message: 'Mobil tidak ditemukan' });
    car.merk = req.body.merk || car.merk;
    car.model = req.body.model || car.model;
    car.warna = req.body.warna || car.warna;
    car.tahun = req.body.tahun || car.tahun;

    res.status(200).json({
        message: `Mobil dengan ID ${car.id} telah diperbarui`,
        updatedMobil: car
    });
});

export default router;
