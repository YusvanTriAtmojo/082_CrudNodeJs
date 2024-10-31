import express, { Router } from "express";

const router = express.Router();

const hewan = [
    {
        id : 1,
        nama: "Mbapee",
        jenis: "Kura-kura",
        habitat: "Darat & Air",
        umur: 6,
        makanan: "Sayuran",
        reproduksi: "Bertelur",
    },
    {
        id : 2,
        nama: "Willy",
        jenis: "Paus Orca",
        habitat: "Air",
        umur: 12,
        makanan: "Daging",
        reproduksi: "Beranak",
    },
    {
        id : 3,
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

router.post("/", (req, res) => {
    const newHewan = {
        id: hewan.length + 1,
        nama: req.body.nama,
        jenis: req.body.jenis,
        habitat: req.body.habitat,
        umur: req.body.umur,
        makanan: req.body.makanan,
        reproduksi: req.body.reproduksi,
    };

    hewan.push(newHewan);
    res.status(201).json(newHewan);
});

router.delete('/:id', (req, res) => {
    const hewanIndex = hewan.findIndex(t => t.id === parseInt(req.params.id));
    if (hewanIndex === -1) return res.status(404).json({ message: 'Hewan tidak ditemukan' });

    const deletedHewan = hewan.splice(hewanIndex, 1)[0]; //menghapus dan menyimpan hewan yang dihapus
    res.status(200).json({ message: `Hewan '${deletedHewan.nama}' telah dihapus`});
});

router.put('/:id', (req, res) => {
    const animal = hewan.find(t => t.id === parseInt(req.params.id));
    if (!animal) return res.status(404).json({ message: 'Hewan tidak ditemukan' });
    animal.nama = req.body.nama || animal.nama;
    animal.jenis = req.body.jenis || animal.jenis;
    animal.habitat = req.body.habitat || animal.habitat;
    animal.umur = req.body.umur || animal.umur;
    animal.makanan = req.body.makanan || animal.makanan;
    animal.reproduksi = req.body.reproduksi || animal.reproduksi;

    res.status(200).json({
        message: `Hewan dengan ID ${animal.id} telah diperbarui`,
        updatedHewan: animal
    });
});
export default router;
