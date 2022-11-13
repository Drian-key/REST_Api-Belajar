// Handle Promise Rejection
// Fetch adalah function yang return nya promise dan promise ada 3 keadaan yaitu, pending atau ketika baru di eksekusi / baru jalan, fulfilled ketika promise berhasil / success, terakhir rejected atau error
// sebelumnya saya menggunakan fetch di barengin dengan .then(), .then() itu cara untuk menghandle ketika fulfilled atau succes

fetch("https://pie.dev/get")
  .then(function (res) {
    return res.json();
  })
  .then(function (res) {
    console.log(res);
  })
  .catch(function () {
    console.log("error bang");
  });
// .catch() berfungsi untuk menghandle promise rejected atau error
// kalau misal req ke endpoin "https://pie.dev/get1321" akan mengembalikan html not found lalu di .then(function(res) {return res.json();}) seolah memparsing data html ke json maka terjadilah error lalu disinilah .catch() bekerja untuk menghandle kasus tersebut
