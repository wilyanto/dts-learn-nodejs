// import modul momentjs
var moment = require('moment')
var salam = require("./salam")

// menggunakan modul momentjs
console.log("Sekarang: " + moment().format("D MMMM YYYY, HH:mm:ss A"))

// menggunakan modul salamjs
console.log(salam.salamPagi())