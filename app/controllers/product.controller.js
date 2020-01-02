/**
 * Kontrolery dostępu i modyfikacji danych w bazie
 * 
 * Możliwe, że nie będzie konieczne korzystanie z nich
 * gdyż chyba powinno to robić Sequelize
 */

 const db = require("../models");
 const Product = db.products;
 const Op = db.Sequelize.Op;

 //Tworzenie i zapis nowego produktu
 exports.create = (req, res) => {

 };

 //Wyciągnięcie wszystkich produktów z bazy
 exports.findAll = (req, res) => {

 };

 //Wyszukanie pojedynczego produktu przez ID
 exports.findOne = (req, res) => {

 };

 //Zmiana produktu przez ID
 exports.update = (req, req) => {

 };

 //usunięcie produktu
 exports.delete = (req, res) => {

 };

 //znalezienie wszystkich dostępnych produktów
 exports.findAllAvailable = (req, res) => {

 };