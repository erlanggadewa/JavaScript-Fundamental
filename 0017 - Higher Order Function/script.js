// * Ambil elemen video dan ubah dari nodeList menjadi array
const allVideo = document.querySelectorAll("[data-duration]");
const selectedVideo = Array.from(allVideo);

//  * Pilih yang "JAVASCRIPT LANJUTAN"
const jsLanjut = selectedVideo.filter((target) =>
  target.textContent.includes("JAVASCRIPT LANJUTAN")
);

//  * Ambil Durasi Video
const duration = jsLanjut.map((duration) => duration.dataset.duration);

//  * ubah durasi menjadi detik
const totalMenitPerVideo = duration.map((menit) => {
  const part = menit.split(":").map((part) => parseFloat(part));
  return part[0] * 60 + part[1];
});

// * total semua durasi dan konversi ke jam / menit
const totalDetik = totalMenitPerVideo.reduce((total, part) => (total += part));
const jam = Math.floor(totalDetik / 3600);
const menit = Math.floor((totalDetik - jam * 3600) / 60);
const detik = Math.floor(totalDetik - (menit * 60 + jam * 3600));

//  * Eksekusi ke dalam DOM
const totalDurasi = document.querySelector(".total-durasi");
totalDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik`;

const jumlahVideo = document.querySelector(".jumlah-video");
jumlahVideo.textContent = `${jsLanjut.length} video`;
