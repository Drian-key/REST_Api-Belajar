function tampilAllMenu() {
  $.getJSON("data/menu.json", (data) => {
    let menu = data.menu;
    $.each(menu, function (index, data) {
      $("#daftarMenu").append(
        `<div class="col-md-4 mb-4"><div class="card"><img src="${data.gambar}" class="card-img-top" /><div class="card-body"><h3 class="card-title">${data.nama}</h3><p class="card-text">${data.deskripsi}</p><h5 class="card-title">${data.harga}</h5><a href="#" class="btn btn-primary">Pesan sekarang</a></div></div></div>`
      );
    });
  });
}

tampilAllMenu();

$(".nav-link").on("click", function () {
  $(".nav-link").removeClass("active");
  $(this).addClass("active");

  let kategori = $(this).html();
  $("#kategori").html(kategori);

  if (kategori == "All Menu") {
    tampilAllMenu();
    return;
  }

  $.getJSON("data/menu.json", function (data) {
    let menu = data.menu;
    let content = "";

    $.each(menu, function (index, data) {
      if (data.kategori == kategori) {
        content += `<div class="col-md-4 mb-4"><div class="card"><img src="${data.gambar}" class="card-img-top" /><div class="card-body"><h3 class="card-title">${data.nama}</h3><p class="card-text">${data.deskripsi}</p><h5 class="card-title">${data.harga}</h5><a href="#" class="btn btn-primary">Pesan sekarang</a></div></div></div>`;
      }
    });

    $("#daftarMenu").html(content);
  });
});
