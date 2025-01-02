// Gizli kelime
const gizliKelime = "armut";
let mevcutSatir = 0;
const tablo = document.getElementById("oyun-tablosu");

// Oyun alanını oluştur
for (let i = 0; i < 30; i++) {
  const kutu = document.createElement("div");
  kutu.classList.add("harf-kutusu");
  tablo.appendChild(kutu);
}

// Kutuları güncelle
function tabloyuGuncelle(tahmin) {
  const kutular = tablo.children;
  for (let i = 0; i < 5; i++) {
    const kutu = kutular[mevcutSatir * 5 + i];
    const harf = tahmin[i];

    if (harf === gizliKelime[i]) {
      kutu.textContent = harf;
      kutu.classList.add("yesil");
    } else if (gizliKelime.includes(harf)) {
      kutu.textContent = harf;
      kutu.classList.add("sari");
    } else {
      kutu.textContent = harf;
      kutu.classList.add("gri");
    }
  }
  mevcutSatir++;
}

// Tahmini gönder
document.getElementById("gonder-tusu").addEventListener("click", () => {
  const girdisi = document.getElementById("tahmin-girdisi");
  const tahmin = girdisi.value.toLowerCase();

  if (tahmin.length === 5) {
    tabloyuGuncelle(tahmin);
    girdisi.value = "";

    // Oyun bitti mi kontrol et
    if (tahmin === gizliKelime) {
      setTimeout(() => alert("Tebrikler! Kelimeyi doğru bildiniz!"), 100);
    } else if (mevcutSatir >= 6) {
      setTimeout(() => alert(`Oyun Bitti! Doğru kelime: ${gizliKelime}`), 100);
    }
  } else {
    alert("Lütfen 5 harfli bir kelime girin.");
  }
});
