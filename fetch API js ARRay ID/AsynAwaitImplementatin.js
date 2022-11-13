// Asyncronous Await Implementation
async function dataFetch() {
  const res = await fetch("https://pie.dev/get");

  // caranya array id yaitu dengan mencegah code lain di jalankan ketika ada error
  if (!res.ok) return console.log("ada error euy, ini caranya array id");
  const json = await res.json();
  console.log(json);

  // menggunakan try box catch
  //   try {
  //     const json = await res.json();
  //     console.log(json);
  //   } catch {
  //     console.log("gagal parsing nih bang, btw ini pakai try catch");
  //   }

  // menggunakan .catch langsung
  // const json = await res.json().catch(function () {
  // console.log("gagal parsing bang");
  // });
}

dataFetch();
