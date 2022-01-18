var express = require('express');
var router = express.Router();
const axios = require('axios');
var TransaksiBayar = require('../models/transaksi_bayar');
var TransaksiBayarDetail = require('../models/transaksi_bayar_detail');

router.get('/', function(req, res, next) {
	TransaksiBayarDetail.findAll({raw:true}).then( async data=> {
	
	  await Promise.all(data.map( async (item)=>{
		// baca Transaksi Periksa
		const transaksi_bayar = await TransaksiBayar.findByPk(item.id_transaksi_bayar);
	
		// update itemTampil
		item['biaya_transaksi_penunjang'] =  transaksi_bayar.id_transaksi_bayar;
	  }));
	
	  res.json({
		status:true,
		pesan: "Berhasil Tampil",
		data:data
	  });
	
	}).catch ( err => {
	  res.json({
		status:false,
		pesan: "Gagal tampil: " + err.message,
		data:[]
	  })
	});
});

router.post('/',function(req,res,next){

    TransaksiBayarDetail.create(req.body).then( data=>{
        res.json({
            status:true,
            pesan:"Berhasil Tambah",
            data:data
        });
    }).catch( err=>{
        res.json({
            status: false,
            pesan: "Gagal Tambah: " + err.message,
            data:[]
        });
    });

});

router.put('/',function(req,res,next){
	TransaksiBayarDetail.update(req.body,{
		where:{id:req.body.id}
	}).then( ()=>{
		res.json({
			status:true,
			pesan:"Berhasil Ubah",
			data:[]
		});
	}).catch( err=>{
		res.json({
			status: false,
			pesan: "Gagal Ubah: " + err.message,
			data:[]
		});
	});
});

router.delete('/',function(req,res,next){
	TransaksiBayarDetail.destroy({
		where:{id:req.body.id}
	}).then( ()=>{
		res.json({
			status:true,
			pesan:"Berhasil Hapus",
			data:[]
		});
	}).catch( err=>{
		res.json({
			status: false,
			pesan: "Gagal Hapus: " + err.message,
			data:[]
		});
	});
});

module.exports = router;