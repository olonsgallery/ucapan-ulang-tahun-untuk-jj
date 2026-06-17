// --- FITUR PASSWORD ---
const layarPassword = document.getElementById("layarPassword");
const inputPassword = document.getElementById("inputPassword");
const btnPassword = document.getElementById("btnPassword");
const pesanError = document.getElementById("pesanError");

// GANTI TEKS DI BAWAH INI DENGAN PASSWORD RAHASIAMU
// Gunakan huruf kecil semua agar lebih mudah divalidasi
const sandiRahasia = "jeje'16081995";

btnPassword.addEventListener("click", function () {
  const tebakan = inputPassword.value.toLowerCase().trim();

  if (tebakan === sandiRahasia) {
    // Jika benar, hilangkan layarnya dengan animasi
    layarPassword.style.opacity = "0";
    setTimeout(() => {
      layarPassword.style.display = "none";
    }, 500); // Menunggu animasi memudar selesai (0.5 detik)
  } else {
    // Jika salah, tampilkan pesan error yang lucu
    pesanError.innerText = "Sandi salah! 😜 Coba lagi.";
    inputPassword.value = ""; // Mengosongkan kolom input

    // Hilangkan pesan error setelah 3 detik
    setTimeout(() => {
      pesanError.innerText = "";
    }, 3000);
  }
});

const tombolKejutan = document.getElementById("tombolKejutan");
const pesanRahasia = document.getElementById("pesanRahasia");
const musikUlangTahun = document.getElementById("musikUlangTahun");

const fotoKecil = document.getElementById("fotoKecil");

const daftarFotoDewasa = [
  document.getElementById("fotoDewasa1"),
  document.getElementById("fotoDewasa2"),
  document.getElementById("fotoDewasa3"),
  document.getElementById("fotoDewasa4"),
  document.getElementById("fotoDewasa5"),
];
// Variabel untuk melacak urutan foto ke berapa yang sedang tayang (Mulai dari 0)
let indeksFotoSaatIni = 0;

tombolKejutan.addEventListener(
  "click",
  function () {
    fotoKecil.classList.add("foto-jelas");

    musikUlangTahun.play().catch(function (error) {
      console.log("Musik diputar!");
    });

    tombolKejutan.innerHTML = "Yeey! Selamat Ulang Tahun! 🎉";
    tombolKejutan.classList.add("btn-sukses");
    buatHujanHati();

    // Tunda transisi awal selama 1.5 detik
    setTimeout(function () {
      fotoKecil.classList.add("foto-pudar-kecil");
      daftarFotoDewasa[indeksFotoSaatIni].classList.add("foto-aktif");
      pesanRahasia.classList.add("pesan-box-aktif");

      // BARIS BARU: Menggulir layar otomatis ke arah kotak pesan dengan mulus
      pesanRahasia.scrollIntoView({ behavior: "smooth", block: "nearest" });

      // Mulai loop otomatis
      setTimeout(mulaiLoopFoto, 3000);
    }, 1500);
  },
  { once: true },
);

// --- FUNGSI LOOP YANG BARU ---
function mulaiLoopFoto() {
  setInterval(function () {
    // a. Sembunyikan foto yang sedang tampil saat ini
    daftarFotoDewasa[indeksFotoSaatIni].classList.remove("foto-aktif");

    // b. Pindah ke urutan foto berikutnya
    // (Rumus % panjang array ini membuat urutan kembali ke 0 jika sudah sampai foto terakhir)
    indeksFotoSaatIni = (indeksFotoSaatIni + 1) % daftarFotoDewasa.length;

    // c. Tampilkan foto yang baru
    daftarFotoDewasa[indeksFotoSaatIni].classList.add("foto-aktif");
  }, 4000); // Berganti setiap 4 detik
}

const tombolMusik = document.getElementById("tombolMusik");

// Saat tombol kejutan pertama diklik, buat tombol musik ikut berputar
tombolKejutan.addEventListener(
  "click",
  function () {
    // ... (kode motong kejutanmu yang lain) ...
    tombolMusik.classList.add("musik-berputar");
  },
  { once: true },
);

// Logika klik tombol musik secara manual (bisa play/pause sendiri)
tombolMusik.addEventListener("click", function () {
  if (musikUlangTahun.paused) {
    musikUlangTahun.play();
    tombolMusik.classList.add("musik-berputar");
  } else {
    musikUlangTahun.pause();
    tombolMusik.classList.remove("musik-berputar");
  }
});

function buatHujanHati() {
  const pilihanEmoji = ["❤️", "💖", "✨", "🌸", "🦋"];

  for (let i = 0; i < 40; i++) {
    setTimeout(function () {
      const hati = document.createElement("div");

      const emojiAcak =
        pilihanEmoji[Math.floor(Math.random() * pilihanEmoji.length)];
      hati.innerText = emojiAcak;

      hati.classList.add("hati-efek");
      hati.style.left = Math.random() * 100 + "vw";
      hati.style.animationDuration = Math.random() * 3 + 2 + "s";
      hati.style.fontSize = Math.random() * 20 + 15 + "px";

      document.body.appendChild(hati);

      setTimeout(function () {
        hati.remove();
      }, 5000);
    }, i * 150);
  }
}
// Fitur ganti judul tab saat ditinggal
document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    document.title = "Ih, kok ditinggal sih? 🥺💖";
  } else {
    document.title = "Selamat Ulang Tahun, Sayangkuuh 💗";
  }
});

// Efek memunculkan hati saat layar di-klik/di-tap
document.body.addEventListener("click", function (elemen) {
  // Membuat elemen hati baru
  const klikHati = document.createElement("div");
  klikHati.innerText = "💖";
  klikHati.style.position = "fixed";

  // Menentukan posisi pas di bekas klik jari
  klikHati.style.left = elemen.clientX + "px";
  klikHati.style.top = elemen.clientY + "px";

  klikHati.style.fontSize = "24px";
  klikHati.style.pointerEvents = "none";
  klikHati.style.zIndex = "99999";

  // Menggunakan animasi jatuhEfek yang sudah kamu punya, tapi kita balik arahnya di CSS nanti,
  // atau kita buatkan animasi terbang singkat sendiri:
  klikHati.style.animation = "terbangKeAtas 1s ease-out forwards";

  document.body.appendChild(klikHati);

  // Hapus dari HTML setelah 1 detik
  setTimeout(() => {
    klikHati.remove();
  }, 1000);
});
