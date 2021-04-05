// ! MANIPULASI ARRAY

// * Deklarasi array
// var arr = ["mangga", "tembok", 1, "joni"];
// console.log(arr);
// * End of Deklarasi array

// * 1. Menambah / menginput isi array
// var arr = [];
// arr[0] = "nama";
// arr[1] = "kunci";
// arr[2] = 1;
// console.log(arr);
// * End of Menambah / menginput isi array

// * 2. Menampilkan isi array dengan looping
// var arr = ["mangga", "tembok", 1, "joni"];
// for (var i = 0; i < arr.length; i++) {
//     console.log("array ke " + i + " adalah " + arr[i]);
// }
// * End of Menampilkan isi array dengan looping

// ! METHOD PADA ARRAY

// * 1. join -> menggabungkan kedalam sebuah string
// var arr = ["mangga", "tembok", 1, "joni"];
// console.log(arr.join(" - "));
// * End of join

// * 2. push -> menambahkan sebuah element di akhir array
// var arr = ["mangga", "tembok", 1, "joni"];
// arr.push("enak", "mantab");
// console.log(arr.join(" - "));
// * End of push

// * 3. pop -> memecahkan 1 element terakhir pada array
// var arr = ["mangga", "tembok", 1, "joni"];
// arr.pop();
// arr.pop();
// console.log(arr.join(" - "));
// * End of pop

// * 4. unshift -> menambahkan sebuah element di awal array
// var arr = ["mangga", "tembok", 1, "joni"];
// arr.unshift("erlangga", "dewa");
// console.log(arr.join(" - "));
// * End of unshift

// * 5. shift -> menghapus 1 element di awal array
// var arr = ["mangga", "tembok", 1, "join"];
// arr.shift();
// console.log(arr.join(" - "));
// * End of shift

// * 6. splice -> untuk menyambung ditengah
////? splice(index mulai, berapa yang dihapus(opt), apa yang ingin dimasukan); --> mengubah nilai asal
// var arr = ["mangga", "tembok", 1, "mobil", "anjay mabar", 1.555];
// console.log(arr.join(" - "));
// arr.splice(2, 2, "input1", 2);
// console.log(arr.join(" - "));
// * End of splice

// * 7. slice -> untuk memotong dan mengambil bagian yang dipilih
//// ? slice(index awal, index akhir) -> mengambil awal <= index < akhir --> tidak mengubah nilai asal
// var arr = ["mangga", "tembok", 1, "mobil", "anjay mabar", 1.555];
// var arr2 = arr.slice(2, 4);
// console.log(arr2.join(" - "));
// console.log(arr.join(" - "));
// * End of slice

// * 8. forEach -> for khusus array
//// ? array.forEach(function(currentValue, index(opt), arr(opt)), thisValue(opt)){ program kita});

//// ! codeX
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// arr.forEach(function (nilai, i) {
//     console.log("nilai index ke " + i + " adalah " + nilai);
// });
//// ! End of codeX"-"

//// ! codeX diatas dapat ditulis seperti ini
// var fungsiKu = function (nilai, i) {
//     console.log("nilai index ke " + i + " adalah " + nilai);
// };
// arr.forEach(fungsiKu);
//// ! End of codeX diatas dapat ditulis seperti ini
// * End of forEach

// * 9. map -> seperti forEach tapi mereturn dalam sebuah array
//// ! example 1
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// var arr2 = arr.map(function (nilai, i) {
//     return nilai * 20;
// });
// console.log(arr2.join(" - "));
//// ! End of example 1

//// ! example 2
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// var arr2 = arr.map(function (nilai, i) {
//     return nilai > 5;
// });
// console.log(arr2.join(" - "));
//// ! End of example 2
// * End of map

// * 10. sort -> untuk mensorting array
////  ? pada array yang berisi angka, yang disorting itu digit pertamanya

//// ! sorting ascending
// var arr = [40, 20, 30, 90, 60, 50, 70, 10, 80];
// console.log(arr.join(" - "));
// arr.sort(function (a, b) {
//     return a - b;
// });
// console.log(arr.join(" - "));
//// ! end of sorting ascending

//// ! sorting descending
// var arr = [40, 20, 30, 90, 60, 50, 70, 10, 80];
// console.log(arr.join(" - "));
// arr.sort(function (a, b) {
//     return b - a;
// });
// console.log(arr.join(" - "));
//// ! end of sorting descending
// * End of sort

// * filter -> untuk memfilter nilai array, mereturn dalam bentuk array dan tidak megubah nilai array target
//// ? array.filter(function(currentValue, index(opt), arr(opt)), thisValue(opt));
// var arr = [40, 20, 30, 90, 60, 50, 70, 10, 80];
// var arrFilter = arr.filter(function (nilai) {
//     return nilai > 30;
// });
// console.log(arrFilter.join(" - "));
// * End of filter

// * find -> untuk mencari 1 nilai pertama yang kita inginkan, mereturn bukan dalam bentuk array dan tidak mengubah nilai array target
//// ? array.find(function(currentValue, index(opt), arr(opt)), thisValue(opt));
// var arr = [40, 20, 30, 90, 60, 50, 70, 10, 80];
// var arrFind = arr.find(function (nilai) {
// return nilai > 90;
// });
// console.log(arrFind);
// * End of find

//  * reduce -> untuk mereduce array menjadi sebuah single array, dan tidak mengubah array target
// var arr = [40, 20, 30, 90, 60, 50, 70, 10, 80];
// var arrReduce = arr.reduce((total, sum) => (total += sum), 9); // ! ditambah dengan 9, default nilai jika kosong = 0
// console.log(arrReduce);
// * End of reduce

//  * method chaining -> metode berantai
//  ! cari angka >= 50 , kemudian bagi dengan 10, dan jumlahkan
// var arr = [40, 20, 30, 90, 60, 50, 70, 10, 80];
// var arrBaru = arr
//   .filter((x) => x >= 50)
//   .map((x) => x / 10)
//   .reduce((total, sum) => (total += sum));
// console.log(arrBaru);
