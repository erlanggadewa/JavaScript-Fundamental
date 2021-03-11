// ? MANIPULASI ELEMENT (1)

// * element.innerHTML -> Mengubah struktur HTML
// document.getElementById("judul").innerHTML = "DIUBAH OLLEH element.innerHTML";
// document.querySelector("section#a").innerHTML = "KEHAPUS HEHE";

// * element.style.<properties> -> mengedit CSS
// document.querySelector("#b").style.color = "red";

// * element.getAttribute() -> mengambil informasi attribut
// document.querySelector("#b").getAttribute("id"); // ! hanya bisa get 1 jenis attribute saja

// * element.setAttribute() -> mengSet attribute
// const sectionB = document.querySelector("#b");
// sectionB.setAttribute("id", "c"); // ! id = b berubah menjadi c
// sectionB.setAttribute("asal", "attribute asal"); // ! dapat mengSet attribute asal

// * element.removeAttribute() -> menghapus attribute
// document.getElementsByTagName("section")[0].removeAttribute("id"); // ! menghapus attribute id pada tag section index ke-0

// ? MANIPULASI ELEMENT (2)
// * document.createElement()
// * document.createTextNode()
// * parentNode.removeChild()
// * parentNode.replaceChild()

// * node.appendChild()
// const pBaruAkhir = document.createElement("p");
// const pBaruText1 = document.createTextNode(
//     "INI PARAGRAF BARU DENGAN appendChild()"
// );
// pBaruAkhir.appendChild(pBaruText1);
// document.getElementById("a").appendChild(pBaruAkhir);

// * node.insertBefore()
// const pBaruTengah = document.createElement("p");
// const pBaruText2 = document.createTextNode(
//     "INI PARAGRAF BARU DENGAN insertBefore()"
// );
// pBaruTengah.appendChild(pBaruText2);
// const p2 = document.querySelector("#container #a .p2");
// document.querySelector("#container #a").insertBefore(pBaruTengah, p2);

// * parentNode.removeChild()
// const parentRemove = document.getElementById("b");
// const p4 = document.querySelector("#b p");
// parentRemove.removeChild(p4); // ! paragraf p4 hilang

// * parentNode.replaceChild()
// const li2Replace = document.createElement("li");
// const li2Kalimat = document.createTextNode("INI item 2 yang direplace");
// li2Replace.appendChild(li2Kalimat);

// const li2 = document.querySelector("#b ul li:nth-child(2)");

// const parentReplace = document.querySelector("#b ul");

// parentReplace.replaceChild(li2Replace, li2);

// ? MANIPULASI KHUSUS CLASS

// * element.classList.add() -> menambah sebuah class
// document
//     .querySelector("#b")
//     .classList.add("class-tambahan-1", "class-tambahan-2"); // ! menambah lebih dari 1 class

// * element.classList.remove() -> menghapus class yang kita inginkan
// document.querySelector("#b").classList.remove("sectionB"); // ! menghapus class sectionB

// * element.classList.toggle() -> mentoggle class yang kita inginkan
// document.querySelector("#b").classList.toggle("toggle-class"); // ! mentoggle class toggle-class

// * element.classList.item() -> mengecek class pada index tertentu
// document.querySelector("#b").classList.item("2"); // ! mengecek class pada index ke-2

// * element.classList.contains() -> mencari apakah class yang kita input itu ada/tidak
// document.querySelector("#b").classList.contains("sectionB"); // ! memfind class sectionB pada tag yang ber id = "b" dan menghasilkan output true/false

// * element.classList.replace() -> mereplace class target dengan class yang kita inginkan
// document.querySelector("#b").classList.replace("sectionB", "class-replace"); // ! mereplace class = "sectionB" dengan class = "class-replace"
