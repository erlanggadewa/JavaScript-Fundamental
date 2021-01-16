// ! Membuat object secara literal
console.log("\n-- OBJECT LITERAL --");
var obj = { a: 15, nama: "erlangga" };
obj.hai = function () {
    console.log(this);
    console.log("hai bro");
};
obj.hai();
// * scope this pada object diatas berada dalam scope variable obj

// ! Membuat object dengan fungsi deklaratif
console.log("\n-- FUNCTION DECLARATION --");
function funcObj() {
    console.log(this);
    console.log("hai broo");
}
funcObj();
// * scope this pada object diatas adalah scope global

// ! Membuat object dengan constructor
console.log("\n-- CONSTRUCTOR --");
function FuncObj2() {
    console.log(this);
    console.log("Ini constuctor");
}
new FuncObj2();
// * scope this diatas berdada pada masing masing instance, jadi tidak sama
