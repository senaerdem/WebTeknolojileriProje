<?php
session_start();
if(!isset($_SESSION["login"])){
echo "Hatalı giriş yaptınız.";
}else{
echo "Giriş işlemi başarılıdır Hoşg geldiniz G211210029 <br>";
echo "<a href=logout.php>Çıkış Yap</a>";
}
?>