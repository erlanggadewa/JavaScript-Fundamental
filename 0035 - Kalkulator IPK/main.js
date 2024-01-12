function main() {
  // "3 A" = 3 sks dengan nilai A
  const arrAngka = ["3 A", "2 B", "1 C"];
  ipk(arrAngka);
}

function ipk(arrAngka) {
  let total = 0, totalSKS = 0;

  for (let i = 0; i < arrAngka.length; i++) {
    const [sksStr, nilai] = arrAngka[i].split(' ');
    const sks = parseFloat(sksStr);
    total += sks * konversiNilai(nilai);
    totalSKS += sks;
  }

  console.log("\nSELAMAT IPK ANDA : " + total / totalSKS);
}

function konversiNilai(nilai) {
  switch (nilai.toLowerCase()) {
    case "a":
      return 4;
    case "ab":
      return 3.5;
    case "b":
      return 3;
    case "bc":
      return 2.5;
    case "c":
      return 2;
    case "d":
      return 1;
    case "e":
      return 0;
    default:
      return 0; // Default jika nilai tidak dikenali
  }
}

main();
