var arrPenumpang = [];

function tambahPenumpang(nama, arrPenumpang) {
    // ! untuk mengisi bangku yang kosong terlebih dahulu
    for (var i = 0; i < arrPenumpang.length; i++) {
        if (arrPenumpang[i] == undefined) return (arrPenumpang[i] = nama);
    }
    arrPenumpang.push(nama);
}

function hapusPenumpang(nama, arrPenumpang) {
    if (arrPenumpang == 0 && nama == "") {
        return console.log("Angkot kosong");
    } else if (arrPenumpang == 0) {
        return console.log(
            "Angkot kosong dan penumpang dengan nama " +
                nama +
                " tidak ada di dalam angkot"
        );
    }
    for (var i = 0; i < arrPenumpang.length; i++) {
        if (arrPenumpang[i] == nama) {
            arrPenumpang[i] = undefined;
        } else if (i == arrPenumpang.length - 1 && nama != "") {
            return console.log(nama + " tidak ada di dalam angkot");
        }
    }
}
do {
    tambahPenumpang(prompt("input nama"), arrPenumpang);
    hapusPenumpang(prompt("hapus nama"), arrPenumpang);
    if (confirm("ingin keluar ? ")) break;
} while (true);
console.log("Isi penumpang angkot = " + arrPenumpang.join());
