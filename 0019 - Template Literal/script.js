//  * Looping
// const mhs = [
//   { nama: "erlangga Dewa sakti", nim: 6706201053 },
//   { nama: "kaloka radya nanda", nim: 723432383 },
//   { nama: "adhikari narendra alit", nim: 988231223 },
// ];

// const el = `<div class="mhs">
//     <h1>Daftar mahasiswa</h1>
//     <ul>
//         ${mhs
//           .map(
//             (x) =>
//               `<li>${x.nama}</li>
//               <li>${x.nim}</li>`
//           )
//           .join("<br>")}
//     </ul>
// </div>`;
// * End of Looping

//  * Ternary
// const lagu = [
//   { penyanyi: "Isyana Sarasvati", judul: "Tetap dalam jiwa" },
//   {
//     penyanyi: "Isyana Sarasvati",
//     judul: "Kau adalah",
//     feat: "Rayi Putra",
//   },
// ];
// const el = `<div class="lagu">
//     <h1>Detail Music</h1>
//     <ul>
//       ${lagu
//         .map(
//           (x) =>
//             `<li>Penyanyi : ${x.penyanyi}</li>
//           <li>Penyanyi : ${x.judul} ${x.feat ? `(feat ${x.feat})` : ""}</li>`
//         )
//         .join("<br>")}
//     </ul>
//   </div>`;
//  * End of Ternary

document.body.innerHTML = el;
