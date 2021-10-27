const { Sequelize, DataTypes } = require('sequelize');
var koneksi = require('../koneksi.js');

const Transaksi_Bayar = koneksi.define('Transaksi_Bayar', {

}, {
    freezeTableName: true
}), Transaksi_Periksa = koneksi.define('Transaksi_Periksa', {
    biaya: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    freezeTableName: true
});

Transaksi_Bayar.belongsTo(Transaksi_Periksa, {foreignKey: 'id_transaksi_periksa'});

module.exports = Transaksi_Bayar;