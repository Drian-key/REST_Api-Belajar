// Handle Form With Fetch

// Upload file
const form = document.getElementById("form");
const output = document.getElementById("output");

async function sendToServer(image) {
  // Pertama buat formdatavariable
  const formData = new FormData();
  formData.append("image", image);

  const method = "post";

  // // data samadengan body
  const res = await fetch(`https://pie.dev/${method}`, {
    method: "POST",
    // method bisa di ganti sesuai kebutuhan
    body: formData,
  });

  // // cek apakah ada promise rejected
  if (!res.ok) return (output.innerHTML = "data gagal di kirim");

  const result = await res.json();

  console.log(result);

  // // tampilkan hasil output
  output.innerHTML = `<img width="100" src="${result.files.image}">`;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // fungsi preventDefault() yaitu mencegah reload

  output.innerHTML = "Uploading ...";

  const image = form.querySelector("[name='image']").files[0];

  sendToServer(image);
  // name dikirim sebagai object dengan {name} atau sama saja dengan {name: name} karena key nya name dan dan nama variabelnya sama sama name jadi bisa di singkat menjadi {name}
});
