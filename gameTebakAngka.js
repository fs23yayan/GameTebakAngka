// Game Tebak Angka
let angkaBenar = Math.floor(Math.random() * 10) + 1; // Angka acak 1-10
let kesempatan = 3;

while (kesempatan > 0) {
  let tebakan = parseInt(prompt(`Tebak angka dari 1 sampai 10 (Sisa kesempatan: ${kesempatan}):`));

  if (isNaN(tebakan)) {
    alert("Masukkan angka yang valid!");
    continue; // Tidak mengurangi kesempatan
  }

  if (tebakan === angkaBenar) {
    alert("Selamat! Tebakan kamu benar 🎉");
    break;
  } else if (tebakan < angkaBenar) {
    alert("Terlalu rendah!");
  } else if (tebakan > angkaBenar) {
    alert("Terlalu tinggi!");
  }

  kesempatan--;
}

if (kesempatan === 0) {
  alert(`Maaf, kamu gagal. Angka yang benar adalah ${angkaBenar}.`);
}
