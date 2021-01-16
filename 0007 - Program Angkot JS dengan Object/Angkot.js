function Angkot(namaSopir, trayek, penumpang, kas) {
    this.sopir = namaSopir;
    this.jurusan = trayek;
    this.penumpang = penumpang;
    this.jumlahKas = kas;
    this.penumpangNaik = function (namaPenumpangNaik) {
        return this.penumpang.push(namaPenumpangNaik);
    };
    this.penumpangTurun = function (namaPenumpangTurun, bayar) {
        if (this.penumpang.length == 0) {
            console.log("angkot kosong");
        } else {
            for (var i = 0; i < this.penumpang.length; i++) {
                if (this.penumpang[i] == namaPenumpangTurun) {
                    this.penumpang[i] = undefined;
                    this.jumlahKas += bayar;
                    return;
                }
                if (i == this.penumpang.length - 1) {
                    console.log(
                        "penumpang dengan nama = " +
                            namaPenumpangTurun +
                            " tidak ada"
                    );
                }
            }
        }
    };
    this.infoAngkot = function () {
        for (var i = 0; i < this.penumpang.length; i++) {
            if (this.penumpang[i] == undefined) {
                this.penumpang.splice(i, 1);
                i--;
            }
        }
        console.log("Nama sopir\t: " + this.sopir);
        console.log("Jurusan   \t: " + this.jurusan);
        console.log("Jumlah kas\t: " + this.jumlahKas);
        console.log("Penumpang\t: " + this.penumpang);
    };
}

var angkot1 = new Angkot("todi", ["A", "B"], [], 0);
angkot1.penumpangNaik("erlangga");
angkot1.penumpangNaik("dewa");
angkot1.penumpangNaik("sakti");
angkot1.penumpangTurun("sakti", 5000);
angkot1.penumpangTurun("nada", 5000);
angkot1.penumpangTurun("erlangga", 5000);
angkot1.penumpangNaik("diva");
console.log("\n--- Isi angkot 1 ---");
angkot1.infoAngkot();
