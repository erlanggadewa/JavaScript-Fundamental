let data = { name: "Erlangga", age: 20, city: "purworejo" };
let myJSON = JSON.stringify(data); // merubah menjadi JSON
let parseJSON = JSON.parse(myJSON); // merubah dari JSON ke sebuah object

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

try {
  if (!parseJSON.name) throw new SyntaxError(`name is required`);
  if (!parseJSON.lokasi) throw new ValidationError(`lokasi is required`);
  errorCodeSengaja;

  console.log(parseJSON.name);
  console.log(parseJSON.age);
  console.log(parseJSON.city);
} catch (error) {
  if (error instanceof SyntaxError)
    return console.error(`JSON Error : ${error.message}`);

  if (error instanceof ValidationError)
    return console.log(`Invalid Data : ${error.message}`);

  if (error instanceof ReferenceError) return console.error(error);

  return console.log(error.stack);
} finally {
  console.log("Akan tetap dieksekusi");
}
