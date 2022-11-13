// Handle Form With Fetch
const form = document.getElementById("form");
const output = document.getElementById("output");

async function sendToServer(data) {
  // data samadengan body
  const res = await fetch("https://pie.dev/post", {
    method: "POST",
    // method bisa di ganti sesuai kebutuhan
    body: JSON.stringify(data),
  });

  // cek apakah ada promise rejected
  if (!res.ok) return (output.innerHTML = "data gagal di kirim");

  const result = await res.json();

  // tampilkan hasil output
  output.innerHTML = `Nama saya: ${result.json.name}`;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // fungsi preventDefault() yaitu mencegah reload

  output.innerHTML = "Sending ...";

  const name = form.querySelector("[name='name']").value;

  sendToServer({ name });
  // name dikirim sebagai object dengan {name} atau sama saja dengan {name: name} karena key nya name dan dan nama variabelnya sama sama name jadi bisa di singkat menjadi {name}
});
