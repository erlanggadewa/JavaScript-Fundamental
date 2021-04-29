let data = { name: "Erlangga", age: 20, city: "purworejo" };
let myJSON = JSON.stringify(data); // merubah menjadi JSON
let parseJSON = JSON.parse(myJSON); // merubah dari JSON ke sebuah object

try {
  if (!parseJSON.name) {
    throw new SyntaxError(`name is required`);
  }

  errorCodeSengaja;

  console.log(parseJSON.name);
  console.log(parseJSON.age);
} catch (error) {
  if (error instanceof SyntaxError) return console.error(error);
  if (error instanceof ReferenceError) return console.error(error);
  return console.log(error.stack);
} finally {
  console.log("Akan tetap dieksekusi");
}
