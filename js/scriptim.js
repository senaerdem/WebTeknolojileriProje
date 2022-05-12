//Şehrim Sayfası Kontrolleri

function ac(i) {
  document.getElementById("yazi" + i).style.display = "block";
}
function kapat(i) {
  document.getElementById("yazi" + i).style.display = "none";
}
//İletişim Sayfası

const ad = document.getElementById("adi");
const soyad = document.getElementById("soyadi");
const cinsiyet = document.getElementsByName("cinsiyet");
const sehir = document.getElementById("sehir");
const eposta = document.getElementById("eposta");
const donustipi = document.getElementsByName("donustipi[]");
const ileti = document.getElementById("ileti");
const form = document.getElementById("iletisim-form");

var kontrol = 0;
form.addEventListener("submit", (e) => {
  let mesaj = [];
  var et = false;
  var nokta = false;
  if (ad.value === "" || ad.value == null) {
    mesaj.push("İsim boş bırakılamaz! \n ");
    ad.style.backgroundColor = "rgba(255, 116, 116, 0.767)";
  }
  if (soyad.value === "" || soyad.value == null) {
    mesaj.push("Soyisim boş bırakılamaz! \n");
    soyad.style.backgroundColor = "rgba(255, 116, 116, 0.767)";
  }
  if (cinsiyet[0].checked == false && cinsiyet[1].checked == false) {
    mesaj.push("Cinsiyet boş bırakılamaz! \n");
  }
  if (sehir.value == 0) {
    mesaj.push("Şehir seçiniz! \n");
  }
  if (eposta.value === "" || eposta.value == null) {
    mesaj.push("E-Posta boş bırakılamaz! \n");
    eposta.style.backgroundColor = "rgba(255, 116, 116, 0.767)";
  }
  for (var i = 0; i < eposta.value.length; i++) {
    if (eposta.value[i] == "@") {
      et = true;
    }
    if (eposta.value[i] == "." && et == true && eposta.value[i + 1] != null) {
      nokta = true;
    }
  }
  if (!(et && nokta)) {
    mesaj.push("E-Posta adresi geçerli değil.");
  }

  if (
    donustipi[0].checked == false &&
    donustipi[1].checked == false &&
    donustipi[2].checked == false &&
    kontrol == 0
  ) {
    alert(
      "Donüş tipi seçilmedi. Seçmezseniz dönüş yapılmayacaktır. Dönüş istemiyorsanız GÖNDER butonuna tekrar basın."
    );
    e.preventDefault();
    kontrol++;
  }
  if (ileti.value.length < 20 || ileti.value.length > 350) {
    mesaj.push("İleti en az 20 en çok 350 karakter olabilir.");
  }
  if (mesaj.length > 0) {
    e.preventDefault();
    alert(mesaj);
  }
});
