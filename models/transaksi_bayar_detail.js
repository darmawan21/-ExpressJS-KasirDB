const { Sequelize, DataTypes } = require('sequelize');
var koneksi = require('../koneksi.js');
const Transaksi_Bayar = require('./transaksi_bayar.js');


const Transaksi_Bayar_Detail = koneksi.define('Transaksi_Bayar_Detail', {
  jumlah_bayar: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
    freezeTableName: true
});

Transaksi_Bayar_Detail.belongsTo(Transaksi_Bayar, {foreignKey: 'id_transaksi_bayar'});

module.exports = Transaksi_Bayar_Detail;