const name = ["erlangga", "dewa", "sakti"];

const arrayMap = (array, func) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(func(array[i]));
  }
  return newArray;
};

const name2 = arrayMap(name, (x) => `${x} tampan`);

console.log(name2);

console.log(Boolean(1));
