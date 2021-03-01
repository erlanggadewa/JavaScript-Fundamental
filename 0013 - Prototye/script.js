function Mahasiswa(nama, energi) {
    this.nama = nama;
    this.energi = energi;
}
Mahasiswa.prototype.makan = function (porsi) {
    this.energi += porsi;
    console.log(`hallo ${this.nama}, selamat makan`);
    console.log(this.energi);
};
Mahasiswa.prototype.main = function (jam) {
    this.energi -= jam;
    console.log(`hallo ${this.nama}, selamat main`);
    console.log(this.energi);
};

let mahasiswa1 = new Mahasiswa("erlangga", 100);
