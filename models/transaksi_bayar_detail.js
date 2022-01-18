const { Sequelize, DataTypes, Model } = require('sequelize');
var koneksi = require("../koneksi.js");


const Transaksi_Bayar_Detail = koneksi.define('transaksi_bayar_detail', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  id_transaksi_bayar: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  jumlah_bayar: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
}, {
    timestamps: true,
    freezeTableName: true
});

module.exports = Transaksi_Bayar_Detail;