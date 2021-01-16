// ! Membuat object literal
console.log("-- LITERAL --");
var mhs = {
    nama: "Erlangga Dewa Sakti",
    NIM: "6706201053",
    email: "erlanggadewa7@gmail.com",
    Jurusan: "D3 Informatika",
};
console.log(mhs);

// ! Membuat object dengan function declaration
console.log("\n-- FUNCTION DECLARATION --");
function mhsFunc(nama, NIM, email, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.NIM = NIM;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}
console.log(
    mhsFunc(
        "Erlangga Dewa Sakti",
        "6706201053",
        "erlanggadewa7@gmail.com",
        "D3IF 44-03"
    )
);

// ! Membuat object dengan constructor
console.log("\n--CONSTRUCTOR--");
function Mahasiswa(nama, NIM, email, jurusan) {
    this.nama = nama;
    this.NIM = NIM;
    this.email = email;
    this.jurusan = jurusan;
}
console.log(
    new Mahasiswa(
        "Erlangga Dewa Sakti",
        "6706201053",
        "erlanggadewa7@gmail.com",
        "D3IF 44-03"
    )
);
