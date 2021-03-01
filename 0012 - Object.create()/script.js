// * fungsi kegiatan
const kegiatan = {
    makan: function (porsi) {
        this.energi += porsi;
        console.log(`hallo ${this.nama}, selamat makan`);
        console.log(this.energi);
    },
    main: function (jam) {
        this.energi -= jam;
        console.log(`hallo ${this.nama}, selamat main`);
        console.log(this.energi);
    },
};
function Mahasiswa(nama, energi) {
    // * object.create fungsi kegiatan yang ada diatas
    const mahasiswa = Object.create(kegiatan);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
    return mahasiswa;
}

let mahasiswa1 = new Mahasiswa("erlangga", 100);
