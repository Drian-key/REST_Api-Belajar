<?php
$datas = file_get_contents('data/menu.json');
$menus = json_decode($datas, true);
$menus = $menus["menu"];

?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Drian MCD</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous" />
    <link rel="shortcut icon" href="img/MC.png" type="image/x-icon">
  </head>
  <body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="img/MC.png" alt="MC" width="80" />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </div>
        </div>
      </div>
    </nav>

    <div class="container">
      <div class="row mt-3">
        <div class="col">
          <h1>All Menu</h1>
        </div>
      </div>
      <div class="row">
        <?php foreach($menus as $menu) : ?>
        <div class="col-md-4 mb-4">
          <div class="card">
            <img src="<?= $menu["gambar"]; ?>" class="card-img-top" />
            <div class="card-body">
              <h3 class="card-title"><?= $menu["nama"]; ?></h3>
              <p class="card-text"><?= $menu["deskripsi"]; ?></p>
              <h5 class="card-title"><?= $menu["harga"]; ?></h5>
              <a href="#" class="btn btn-primary">Pesan sekarang</a>
            </div>
          </div>
        </div>
        <?php endforeach; ?>
      </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
  </body>
</html>
