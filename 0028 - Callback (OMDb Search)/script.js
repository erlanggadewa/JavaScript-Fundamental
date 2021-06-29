$(".btn-search").click(function (e) {
  let keyword = $(".keyword-search").val();
  fetchData(keyword);

  e.preventDefault();
});
function fetchData(keyword) {
  $.ajax({
    url: "http://www.omdbapi.com/?apikey=d206a142&s=" + keyword,
    success: (response) => {
      let card = "";

      response.Search.forEach((element) => (card += showCard(element)));

      $(".container-film").html(card);

      // * function when we click detail button and show detail text about the movie where selected
      $(".modal-detail-button").click(function (e) {
        $.ajax({
          url:
            "http://www.omdbapi.com/?apikey=d206a142&i=" +
            $(this).data("imdbid"),
          success: function (response) {
            const movieDetail = showDetail(response);

            $(".modal-body").html(movieDetail);
          },
        });
        e.preventDefault();
      });
    },
  });
}
function showCard(element) {
  return /*html*/ `<div class="col-12 col-sm-6 col-md-3 my-3">
    <div class="card">
      <img
        src="${element.Poster}"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">${element.Title}</h5>
        <p class="card-text text-muted">
            ${element.Year}
        </p>
        <a href="#!" class="btn btn-primary modal-detail-button" data-mdb-toggle="modal" data-mdb-target="#detailMovie" data-imdbid="${element.imdbID}">Button</a>
      </div>
    </div>
  </div>`;
}
function showDetail(response) {
  return /*html*/ `<div class="row">
            <div class="col-md-3">
              <img
                src="${response.Poster}"
                alt=""
                class="img-fluid"
              />
            </div>
            <div class="col-md">
              <ul class="list-group">
                <li class="list-group-item"><strong>Director : </strong>${response.Director}</li>
                <li class="list-group-item"><strong>Actors : </strong>${response.Actors}</li>
                <li class="list-group-item"><strong>Writer : </strong>${response.Writer}</li>
                <li class="list-group-item"><strong>Plot : </strong>${response.Plot}</li>
              </ul>
            </div>
          </div>`;
}
