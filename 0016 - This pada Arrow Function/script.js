// * KONSEP THIS PADA ARROW FUNCTION
// ? method -> object
// ? function -> global

// * Constructor Function
// ! tidak ada bedanya this arrow function pada constructor function
function Mahasiswa1() {
  this.nama = "erlangga";
  this.sayHello = function () {
    console.log(`Hallo nama saya ${this.nama}`);
  };
}

function Mahasiswa2() {
  this.nama = "erlangga";
  this.sayHello = () => {
    console.log(`Hallo nama saya ${this.nama}`);
  };
}
const cek1 = new Mahasiswa1();
const cek2 = new Mahasiswa2();

// * Object Literal
const mahasiswa3 = {
  nama: "erlangga",
  sayHello: function () {
    console.log(`Hallo nama saya ${this.nama}`);
  },
};
// ! pada arrow function karena tidak ada konsep this maka this.nama akan berisi undefined
const mahasiswa4 = {
  nama: "erlangga",
  sayHello: () => {
    console.log(`Hallo nama saya ${this.nama}`);
    console.log(this);
  },
};

// * Contoh kasus
const Mahasiswa5 = function () {
  this.nama = "erlangga";
  this.umur = 20;

  this.tambahUmur = setInterval(() => {
    console.log(`umur ${this.nama} = ${this.umur++} tahun`);
  }, 500);
};
// const cek5 = new Mahasiswa5(); //! tidak akan error karena tidak ada konsep this pada arrow function maka this akan dicari di lexical scope

const Mahasiswa6 = function () {
  this.nama = "erlangga";
  this.umur = 20;

  this.tambahUmur = setInterval(function () {
    console.log(`umur ${this.nama} = ${this.umur++} tahun`);
  }, 500);
};
// const cek6 = new Mahasiswa6(); //! error karena this pada fungsi tersebut merujuk pada global scope
