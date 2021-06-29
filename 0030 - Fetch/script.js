document.querySelector(".btn-search").addEventListener("click", () => {
  let keyword = document.querySelector(".keyword-search").value;
  fetchData(keyword);
});

function fetchData(keyword) {
  fetch("http://www.omdbapi.com/?apikey=d206a142&s=" + keyword)
    .then((response) => response.json())
    .then((response) => {
      let card = "";
      response.Search.forEach((element) => (card += showCard(element)));
      document.querySelector(".container-film").innerHTML = card;

      detailButtonClick();
    })
    .catch((err) => console.log(err));
}
function detailButtonClick() {
  document.querySelectorAll(".modal-detail-button").forEach((element) =>
    element.addEventListener("click", function () {
      fetch("http://www.omdbapi.com/?apikey=d206a142&i=" + this.dataset.imdbid)
        .then((response) => response.json())
        .then(
          (response) =>
            (document.querySelector(".modal-body").innerHTML =
              showDetail(response))
        );
    })
  );
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
