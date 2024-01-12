let timeIteration = new Array()
async function binarySearch(arr, target) {

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // elemen ditemukan, kembalikan indeksnya
    } else if (arr[mid] < target) {
      left = mid + 1; // cari di sebelah kanan
    } else {
      right = mid - 1; // cari di sebelah kiri
    }
  }

  return -1; // elemen tidak ditemukan
}

async function runningIteration(total, target) {
  const arr = []
  for (let index = 1; index <= total; index++) {
    arr.push(index);
  }

  const start = performance.now();
  await binarySearch(arr, target)
  const end = performance.now();

  console.log(`Execution time: ${end - start} ms`);

  return end - start
}

(async function wrapperIteration() {
  await timeIteration.push(await runningIteration(10, 39))
  await timeIteration.push(await runningIteration(100, 39))
  await timeIteration.push(await runningIteration(1000, 39))
  await timeIteration.push(await runningIteration(10000, 39))
  await timeIteration.push(await runningIteration(100000, 39))
  await timeIteration.push(await runningIteration(1000000, 39))

})()
