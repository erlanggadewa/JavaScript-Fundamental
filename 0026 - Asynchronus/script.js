// * Asynchronus callback
// function getData(url, succes, error) {
//   let xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = () => {
//     if (xhr.readyState == 4 && xhr.status === 200) succes(xhr.responseText);
//     if (xhr.status === 404 && xhr.readyState == 4) error(xhr.resposeText);
//   };
//   xhr.open("get", url);
//   xhr.send();
// }
// getData(
//   "data.jso",
//   (succes) => {
//     const cake = JSON.parse(succes);
//     cake.forEach((cake) => console.log(cake.name));
//   },
//   (error) => console.log(error)
// );

// *  Asynchronus callback jQuery
// console.log("mulai");
// $.ajax({
//   url: "data.json",
//   success: (data) => data.forEach((cake) => console.log(cake.name)),
//   error: (e) => {
//     console.log(e.responseText);
//   },
// });
// console.log("selesai");
