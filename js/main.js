const $ = (s) => document.querySelector(s);
const tabs = $("#tabs"), grid = $("#menu-grid");

function kartOlustur(u){
  const kart = document.createElement("article");
  kart.className = "card";
  kart.innerHTML = `<div class="ph" role="img" aria-label="${u.ad}" style="background-image:url(images/${u.foto})">${u.favori?'<span class="fav">Favori</span>':''}</div>
    <div class="card-body"><div class="card-top"><h3>${u.ad}</h3><span class="price">${u.fiyat} ₺</span></div><p>${u.aciklama}</p></div>`;
  return kart;
}

function kategoriGoster(ad){
  grid.replaceChildren(...MENU[ad].map(kartOlustur));
  tabs.querySelectorAll(".tab").forEach(t => t.setAttribute("aria-selected", t.dataset.k === ad));
}

Object.keys(MENU).forEach(ad => {
  const b = document.createElement("button");
  b.className = "tab"; b.dataset.k = ad; b.textContent = ad; b.setAttribute("role","tab");
  b.addEventListener("click", () => kategoriGoster(ad));
  tabs.appendChild(b);
});
kategoriGoster(Object.keys(MENU)[0]);

$("#gallery").append(...GALERI.map(f => {
  const d = document.createElement("div");
  d.style.backgroundImage = `url(images/${f})`;
  d.setAttribute("role","img"); d.setAttribute("aria-label","Kafe galerisi");
  return d;
}));

/* Mobil menü */
const burger = $("#burger"), nav = $("#nav");
function menuToggle(ac){
  nav.classList.toggle("open", ac);
  burger.setAttribute("aria-expanded", ac);
  document.body.style.overflow = ac ? "hidden" : "";
  document.body.classList.toggle("nav-open", ac);
}
burger.addEventListener("click", () => menuToggle(!nav.classList.contains("open")));
nav.addEventListener("click", e => { if (e.target.tagName === "A") menuToggle(false); });

/* Kaydırınca üst bar rengi */
const header = $("#header");
addEventListener("scroll", () => header.classList.toggle("solid", scrollY > 40), {passive:true});

/* Hafif görünme animasyonu */
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target);} }), {threshold:.15});
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

$("#yil").textContent = new Date().getFullYear();

/* "Şimdi açık / kapalı" rozeti (SAATLER'e göre) */
function dk(s){const [h,m]=s.split(":").map(Number);return h*60+m;}
function durum(){
  const n=new Date(), g=n.getDay(), t=n.getHours()*60+n.getMinutes();
  const [a,k]=SAATLER[g]; let ac=dk(a), ka=dk(k); if(ka<=ac) ka+=1440;
  const [pa,pk]=SAATLER[(g+6)%7]; const dun=dk(pk)<=dk(pa) ? dk(pk) : 0;
  const acik=(t>=ac && t<ka) || t<dun;
  const kap=(t<dun)?dun:ka;
  const el=$("#durum"); if(!el) return;
  el.classList.toggle("on",acik);
  const sa=(m)=>String(Math.floor(m/60)%24).padStart(2,"0")+":"+String(m%60).padStart(2,"0");
  el.textContent=acik?`Şimdi açık · ${sa(kap)}'e kadar`:`Şu an kapalı · ${a}'da açılıyoruz`;
}
durum();

/* ===== İletişim bağlantılarını AYARLAR'dan oluştur ===== */
(function(){
  const A = AYARLAR;
  const adresQ = encodeURIComponent(A.adres);
  const wa = "https://wa.me/" + A.whatsapp.replace(/\D/g,"") + "?text=" + encodeURIComponent(A.whatsappMesaj);
  const harita = A.haritaBaglantisi || ("https://www.google.com/maps/search/?api=1&query=" + adresQ);
  const ig = "https://instagram.com/" + A.instagram.replace("@","");
  const set = (sel, attr, val) => document.querySelectorAll(sel).forEach(e => e.setAttribute(attr, val));
  set("[data-wa]", "href", wa);
  set("[data-maps]", "href", harita);
  set("[data-ig]", "href", ig);
  set("[data-tel]", "href", "tel:" + A.telefon);
  document.querySelectorAll("[data-ig-text]").forEach(e => e.textContent = "@" + A.instagram.replace("@",""));
  document.querySelectorAll("[data-tel-text]").forEach(e => e.textContent = A.telefonGorunen);
  document.querySelectorAll("[data-adres]").forEach(e => e.textContent = A.adres);
  const f = $("#harita"); if (f) f.src = "https://www.google.com/maps?q=" + adresQ + "&output=embed";
  // Arama motorları için yapılandırılmış veriyi de güncelle
  const ld = document.querySelector('script[type="application/ld+json"]');
  if (ld) try {
    const d = JSON.parse(ld.textContent);
    d.telephone = A.telefon; d.address.streetAddress = A.adres; d.sameAs = [ig];
    ld.textContent = JSON.stringify(d);
  } catch(e) {}
})();
