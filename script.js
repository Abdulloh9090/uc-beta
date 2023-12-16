// Foydalanuvchidan ismini so'raymiz
var ism = prompt("Ismingizni kiriting:", "Ismingizni yozing");

// Foydalanuvchining ismini ko'rsatamiz
alert("Salom, " + ism + "! Xush kelibsiz!");


// Foydalanuvchidan yoshni so'raymiz
var yosh = prompt("Yoshingizni kiriting:", "15");

// Kiritilgan yoshni raqama o'tkazamiz
var raqamYosh = parseInt(yosh);

// Yoshni 10 ga qo'shamiz va natijani ko'rsatamiz
alert("Sizning yoshingiz " + yosh +  " ga teng!");


if ( yosh<=10 ) {
    alert("Siz hali voyaga yetmagan ekansiz, saytdan chiqishingizni maslahat beraman!")
} else {
    alert("Siz UC sotuvchi saytidasiz, marhamat 'ok' ni bosing hamda UC sotib olib, mazza qilib o'ynang!")
}