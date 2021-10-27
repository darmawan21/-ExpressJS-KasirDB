var express = require('express');
var router = express.Router();
var Transaksi_Bayar_Detail = require("../models/transaksi_bayar_detail");

/*TAMPIL DATA Transaksi Bayar Detail. */
router.get('/', function(req, res, next) {
Transaksi_Bayar_Detail.findAndCountAll().then(data => {
    res.json({
      status: true,
      pesan: "Berhasil Tampil",
      data:data.rows,
      count: data.count
    });
  }).catch(salahnya=>{
    res.json({
      status: false,
      pesan: "Gagal Tampil: " + salahnya.message,
      data: []
    });
  });
});

/* TAMBAH DATA Transaksi Bayar Detail. */
router.post('/', function(req, res, next) {
Transaksi_Bayar_Detail.create(req.body).then(data => {
    res.json({
      status: true,
      pesan: "Berhasil Ditambah",
      data:data
    });
  }).catch(salahnya=>{
    res.json({
      status: false,
      pesan: "Gagal Tampil: " + salahnya.message,
      data: req.body
    });
  });
});

/* UBAH DATA Transaksi Bayar Detail. */
router.put('/', function(req, res, next) {
Transaksi_Bayar_Detail.update(req.body, {
    where : {id:req.body.id}
  }).then(data => {
    res.json({
      status: true,
      pesan: "Berhasil Ubah",
      data:data
    });
  }).catch(salahnya=>{
    res.json({
      status: false,
      pesan: "Gagal Ubah: " + salahnya.message,
      data:req.body
    });
  });
});

/* HAPUS DATA Transaksi Bayar Detail. */
router.delete('/', function(req, res, next) {
Transaksi_Bayar_Detail.destroy({
    where : {id:req.body.id}
  }).then(data => {
    res.json({
      status: true,
      pesan: "Berhasil Hapus",
      data:data
    });
  }).catch(salahnya=>{
    res.json({
      status: false,
      pesan: "Gagal Hapus: " + salahnya.message,
      data:req.body
    });
  });
});

module.exports = router;
