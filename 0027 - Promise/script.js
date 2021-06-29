// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((wkwk) => wkwk.json())
//   .then((lol) => console.log(lol));

// * Promise
// ? Object that represent failure or succes an asynchronus event in the future
// ? janji (terpenuhi / diingkari)
// ? states (fulfilled / rejected / pending)
// ? callback (resolve / reject / finnal
// ? aksi (then / catch)

let status = false;
const janji1 = new Promise((resolve, reject) => {
  if (status) resolve(`Janji 1 ditepati -> ${resolve}`);
  else reject(`Janji 1 tidak ditepati -> ${reject}`);
});
console.log(`mulai janji 1`);
console.log(
  janji1
    .then((response) => console.log(response))
    .catch((response) => console.log(response))
    .finally(() => console.log(`Selesai menunggu`))
);
console.log(`akhir janji 1`);

// * Promise.all()

// const mhs = new Promise((resolve) =>
//   setTimeout(() => {
//     resolve([
//       {
//         name: "Erlangga",
//         age: 20,
//         city: "Purworejo",
//       },
//     ]);
//   }, 1000)
// );

// const cuaca = new Promise((resolve) =>
//   setTimeout(() => {
//     resolve([{ location: "purworejo", temp: 32, condition: "Cloudly" }]);
//   }, 500)
// );

// Promise.all([mhs, cuaca]).then((response) => console.log(response));
// Promise.all([mhs, cuaca]).then((response) => {
//   response.forEach((data) => console.log(data));
// });
