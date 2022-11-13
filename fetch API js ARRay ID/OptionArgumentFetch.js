// fetch: adalah metode bawaan js es6 untuk mengelola data api dan di tampilkan ke web browser
// fetch("end poin / url nya")
// fetch menerima 2 argument yaitu end poin, dan option
fetch("https://pie.dev/post", {
  method: "POST",
  headers: {
    Authentication: "Mumbai sdjf",
    // mengatur auth (untuk perubahan cek di header network)
    "Content-Type": "appliction/json",
    // content-type mengganti jenis type content yang di kirim (application/json, text/plain, text/html)
  },
  body: JSON.stringify({
    name: "drian",
    age: 17,
  }),
})
  // di fetch kita bisa memberikan request init / argrument

  // cara tau proses fetch menggunakan .then()
  .then(function (res) {
    if (res.ok === false) {
      console.log("req gagal");
    }
    return res.json();
  })
  .then(function (res) {
    console.log(res);
  });

//
