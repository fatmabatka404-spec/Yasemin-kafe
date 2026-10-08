/* =====================================================
   MENÜ VE AYARLAR: sadece bu dosyayı düzenlemen yeterli.
   Ürün eklemek için bir satırı kopyala, değerleri değiştir.
   ad: ürün adı | aciklama: kısa açıklama | fiyat: sadece sayı
   foto: images/ klasöründeki dosya adı | favori: true yazarsan "Favori" rozeti çıkar
   Kategori eklemek için yeni bir "Kategori Adı": [ ... ] bloğu yaz.
   Dikkat: her satırın sonunda virgül olmalı (sonuncu hariç).
   ===================================================== */
const MENU = {
  "Kahveler": [
    {ad:"Espresso", aciklama:"Yoğun ve aromatik tek shot.", fiyat:70, foto:"espresso.jpg"},
    {ad:"Latte", aciklama:"İpeksi süt köpüğüyle yumuşak içim.", fiyat:110, foto:"latte.jpg", favori:true},
    {ad:"Flat White", aciklama:"Çift shot, ince dokulu süt.", fiyat:115, foto:"flatwhite.jpg"},
    {ad:"Filtre Kahve", aciklama:"Günün tek kökenli çekirdeği.", fiyat:90, foto:"filtre.jpg"}
  ],
  "Soğuk İçecekler": [
    {ad:"Iced Latte", aciklama:"Buz, espresso ve soğuk süt.", fiyat:120, foto:"icedlatte.jpg"},
    {ad:"Cold Brew", aciklama:"18 saat soğuk demlenir.", fiyat:125, foto:"coldbrew.jpg", favori:true},
    {ad:"Ev Yapımı Limonata", aciklama:"Taze nane ve limon.", fiyat:95, foto:"limonata.jpg"}
  ],
  "Tatlılar": [
    {ad:"San Sebastian Cheesecake", aciklama:"Kremsi, hafif yanık yüzey.", fiyat:170, foto:"cheesecake.jpg", favori:true},
    {ad:"Brownie", aciklama:"Bitter çikolata, ceviz.", fiyat:130, foto:"brownie.jpg"},
    {ad:"Tiramisu", aciklama:"Espresso ve mascarpone katmanları.", fiyat:160, foto:"tiramisu.jpg"}
  ],
  "Kahvaltı": [
    {ad:"Serpme Kahvaltı (2 kişilik)", aciklama:"Peynirler, zeytin, reçel, yumurta, sıcaklar.", fiyat:650, foto:"serpme.jpg", favori:true},
    {ad:"Menemen", aciklama:"Domates, biber ve tereyağıyla.", fiyat:190, foto:"menemen.jpg"},
    {ad:"Avokadolu Tost", aciklama:"Ekşi maya ekmeği, poşe yumurta.", fiyat:210, foto:"avokado.jpg"}
  ],
  "Atıştırmalıklar": [
    {ad:"Kaşarlı Tost", aciklama:"Çıtır ekmek, bol kaşar.", fiyat:140, foto:"tost.jpg"},
    {ad:"Tereyağlı Kruvasan", aciklama:"Her sabah fırından.", fiyat:95, foto:"kruvasan.jpg"},
    {ad:"Cookie", aciklama:"Çikolata parçacıklı, yumuşak.", fiyat:75, foto:"cookie.jpg"}
  ]
};

/* Galeri fotoğrafları (images/ klasöründen) */
const GALERI = ["galeri1.jpg","galeri2.jpg","galeri3.jpg","galeri4.jpg","galeri5.jpg","galeri6.jpg"];

/* Çalışma saatleri ("Şimdi açık" rozeti için). Sıra: Pazar, Pzt, Sal, Çar, Per, Cum, Cmt.
   Gece yarısını geçen kapanış için "00:00" veya "01:00" yazabilirsin. */
const SAATLER = [
  ["09:00","00:00"], ["08:00","23:00"], ["08:00","23:00"], ["08:00","23:00"],
  ["08:00","23:00"], ["08:00","23:00"], ["09:00","00:00"]
];
