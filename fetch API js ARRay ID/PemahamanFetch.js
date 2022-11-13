// fetch: adalah metode bawaan js es6 untuk mengelola data api dan di tampilkan ke web browser
// fetch("end poin / url nya")
fetch("https://pie.dev/get")
  // cara tau proses fetch menggunakan .then()
  .then(function (res) {
    // tampilkan proses dengan console res
    console.log(res);
    if (res.ok === false) {
      // cek apakah res.ok bernilai true atau false jika false tampilkan req gagal
      console.log("req gagal");
    }
    return res.json();
    // return res.json() untuk mengebalikan nilai json / respon body dan di tampilkan pada proses selanjutnya
  })
  .then(function (res) {
    // tampilkan isi res json
    console.log(res);
  });
