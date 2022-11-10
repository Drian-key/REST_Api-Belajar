function searchMovie() {
  $("#moviesList").html("");
  $.ajax({
    url: "https://www.omdbapi.com/",
    type: "get",
    dataType: "json",
    data: {
      apikey: "b860ad",
      s: $("#searchInput").val(),
    },
    success: function (result) {
      if (result.Response == "True") {
        let movies = result.Search;

        $.each(movies, function (i, data) {
          let poster;
          if (data.Poster == "N/A") {
            poster = "https://images.unsplash.com/photo-1586075574644-b6e4cb9df495?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";
          } else {
            poster = data.Poster;
          }

          $("#moviesList").append(`
            <div class="col-md-3 mb-3"> 
                <div class="card">
                    <img src="${poster}" class="card-img-top img-fluid">
                    <div class="card-body">
                    <h5 class="card-title">${data.Title}</h5>
                    <p class="card-text card-subtitle text-muted">Release date ${data.Year}</p>
                    <p class="card-text">Type ${data.Type}</p>
                    <a href="#" class="card-link seeDetail" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${data.imdbID}">See Detail</a>
                    </div>
                </div>
            </div>
          `);
        });

        $("#searchInput").val("");
      } else {
        $("#moviesList").html(`<h3>Movie not found :(</h3>`);
      }
    },
  });
}

$("#searchButton").on("click", function () {
  searchMovie();
});

$("#searchInput").on("keyup", function (event) {
  if (event.keyCode === 13) {
    searchMovie();
  }
});

$("#moviesList").on("click", ".seeDetail", function () {
  $.ajax({
    url: "https://www.omdbapi.com/",
    type: "get",
    dataType: "json",
    data: {
      apiKey: "b860ad",
      i: $(this).data("id"),
    },
    success: function (movie) {
      let poster;
      if (movie.Poster == "N/A") {
        poster = "https://images.unsplash.com/photo-1586075574644-b6e4cb9df495?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";
      } else {
        poster = movie.Poster;
      }

      if (movie.Response === "True") {
        $(".modal-body").html(`
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-4">
                        <img src="${poster}" class="card-img-top img-fluid">
                    </div>
                    
                    <div class="col-md-8">
                        <ul class="list-group">
                            <li class="list-group-item">${movie.Title}</li>
                            <li class="list-group-item">Year: ${movie.Year}</li>
                            <li class="list-group-item">Reted: ${movie.Rated}</li>
                            <li class="list-group-item">Released: ${movie.Released}</li>
                            <li class="list-group-item">Runtime: ${movie.Runtime}</li>
                            <li class="list-group-item">Genre: ${movie.Genre}</li>
                            <li class="list-group-item">Director: ${movie.Director}</li>
                            <li class="list-group-item">Writer: ${movie.Writer}</li>
                            <li class="list-group-item">Actor: ${movie.Actor}</li>
                            <li class="list-group-item">Plot: ${movie.Plot}</li>
                            <li class="list-group-item">Language: ${movie.Language}</li>
                            <li class="list-group-item">Country: ${movie.Country}</li>
                        </ul>
                    </div>
                </div>
            </div>
        `);
      }
    },
  });
});
