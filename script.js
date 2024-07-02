// Daftar nama Khodam yang akan dipilih secara acak
const khodams = [
  "Khodam Jibril",
  "Khodam Mikail",
  "Khodam Israfil",
  "Khodam Izrail",
  "Khodam Raqib",
  "Khodam Atid",
  "Khodam Malik",
  "Khodam Ridwan",
  "Khodam Munkar",
  "Khodam Nakir",
  "Khodam Harut",
  "Khodam Marut",
  "Khodam Dzuljanah",
  "Khodam Ridjalul Ghaib",
  "Khodam Al-Barzakh",
  "Khodam Al-Jin",
  "Khodam Sya'ban",
  "Khodam Qarnain",
  "Khodam An-Nur",
  "Khodam Ashabul Kahfi",
];

// Daftar penjelasan untuk setiap Khodam
const explanations = {
  "Khodam Jibril":
    "Khodam Jibril adalah malaikat yang membawa wahyu dari Tuhan.",
  "Khodam Mikail":
    "Khodam Mikail adalah malaikat yang bertugas membagikan rezeki.",
  "Khodam Israfil":
    "Khodam Israfil adalah malaikat yang akan meniup sangkakala pada hari kiamat.",
  "Khodam Izrail":
    "Khodam Izrail adalah malaikat maut yang bertugas mencabut nyawa.",
  "Khodam Raqib":
    "Khodam Raqib adalah malaikat yang mencatat amal baik manusia.",
  "Khodam Atid":
    "Khodam Atid adalah malaikat yang mencatat amal buruk manusia.",
  "Khodam Malik": "Khodam Malik adalah malaikat penjaga neraka.",
  "Khodam Ridwan": "Khodam Ridwan adalah malaikat penjaga surga.",
  "Khodam Munkar":
    "Khodam Munkar adalah malaikat yang menanyai manusia di alam kubur.",
  "Khodam Nakir":
    "Khodam Nakir adalah malaikat yang menanyai manusia di alam kubur.",
  "Khodam Harut":
    "Khodam Harut adalah salah satu malaikat yang turun ke bumi untuk menguji manusia.",
  "Khodam Marut":
    "Khodam Marut adalah salah satu malaikat yang turun ke bumi untuk menguji manusia.",
  "Khodam Dzuljanah":
    "Khodam Dzuljanah adalah khodam yang dikenal sebagai pelindung dari serangan magis.",
  "Khodam Ridjalul Ghaib":
    "Khodam Ridjalul Ghaib adalah khodam yang dikenal sebagai penjaga alam gaib.",
  "Khodam Al-Barzakh":
    "Khodam Al-Barzakh adalah khodam yang mengawal manusia di alam kubur.",
  "Khodam Al-Jin": "Khodam Al-Jin adalah khodam dari golongan jin yang baik.",
  "Khodam Sya'ban":
    "Khodam Sya'ban adalah khodam yang dikenal memiliki kekuatan penyembuhan.",
  "Khodam Qarnain":
    "Khodam Qarnain adalah khodam yang dikenal sebagai pelindung dan penjaga rahasia.",
  "Khodam An-Nur":
    "Khodam An-Nur adalah khodam yang dikenal membawa cahaya dan pencerahan.",
  "Khodam Ashabul Kahfi":
    "Khodam Ashabul Kahfi adalah khodam yang dikenal sebagai pelindung bagi mereka yang beriman.",
};

// Fungsi untuk mendapatkan Khodam acak
function getRandomKhodam() {
  // Mengambil nilai dari input nama pengguna
  const userName = document.getElementById("userName").value.trim();

  // Memeriksa apakah nama pengguna telah diisi
  if (userName === "") {
    alert("Masukkan nama Anda terlebih dahulu.");
    return;
  }

  // Menghasilkan indeks acak dari 0 hingga panjang array 'khodams' dikurangi satu
  const randomIndex = Math.floor(Math.random() * khodams.length);
  // Mengambil Khodam acak dari array 'khodams' berdasarkan indeks acak yang dihasilkan
  const randomKhodam = khodams[randomIndex];
  // Mengambil penjelasan untuk Khodam acak yang dipilih
  const explanation = explanations[randomKhodam];
  // Menampilkan Khodam acak di elemen paragraf dengan ID "randomKhodam"
  document.getElementById(
    "randomKhodam"
  ).textContent = `${userName}, Khodam Anda adalah: ${randomKhodam}`;
  // Menampilkan penjelasan Khodam acak di elemen paragraf dengan ID "khodamExplanation"
  document.getElementById("khodamExplanation").textContent = explanation;
}

// Menambahkan event listener ke tombol dengan ID "randomizeButton"
document
  .getElementById("randomizeButton")
  .addEventListener("click", getRandomKhodam);

// Menambahkan event listener ke input nama untuk mendeteksi tekan tombol "Enter"
document
  .getElementById("userName")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      getRandomKhodam();
    }
  });
