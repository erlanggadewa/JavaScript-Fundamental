// * Dom Selection

// * document.getElementById() -> Element
// const judul = document.getElementById("judul");
// judul.style.color = "red"; // ! -> merubah teks menjadi merah

// * document.getElementsByTagName() -> HTMLCollection -> dalam bentuk array
// const p = document.getElementsByTagName("p");
// for (let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = "aqua";
// }
// p[2].style.color = "red";
// p[2].style.fontSize = "45px";

// * document.getElementsByClassName() -> HTMLCollection -> dalam bentuk array
// const p1 = document.getElementsByClassName("p1")[0];
// p1.innerHTML = "KATA PADA TAG P INI DIUBAH OLEH JAVASCRIPT";

// * document.querySelectorAll() -> NodeList
// const li = document.querySelectorAll("#container li");
// for (let i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = "red";
// }

// * document.querySelector() -> Element
// const item2 = document.querySelector("#container #b ul li:nth-child(2)");
// item2.style.backgroundColor = "green";

// * Mempersempit scope DOM Selection
// const section2 = document.getElementById("b");
// const li3 = section2.querySelector("ul li:nth-child(3)");
// ! code diatas dapat ditulis seperti ini
// const li3 = document.querySelector("#b").querySelector("ul li:nth-child(3)");
// li3.innerHTML = "diubah oleh li3";
