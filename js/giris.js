//İletişim Sayfası

const sifre = document.getElementById("sifre");
const kullaniciadi = document.getElementById("kullaniciadi");
const kullaniciForm = document.getElementById("form");
kullaniciForm.addEventListener("submit", (ev) => {
  var et = false;
  var nokta = false;
  let donus = [];
  if (kullaniciadi.value === "" || kullaniciadi.value == null) {
    donus.push("E-Posta boş bırakılamaz!");
  }
  for (var i = 0; i < kullaniciadi.value.length; i++) {
    if (kullaniciadi.value[i] == "@") {
      et = true;
    }
    if (
      kullaniciadi.value[i] == "." &&
      et == true &&
      kullaniciadi.value[i + 1] != null
    ) {
      nokta = true;
    }
  }
  if (!(et && nokta)) {
    donus.push("E-Posta edresi geçerli değil.");
  }

  if (sifre.value === "" || sifre.value == null) {
    donus.push("Şifre boş bırakılamaz!");
  }
  if (donus.length > 0) {
    ev.preventDefault();
    alert(donus);
  }
});
