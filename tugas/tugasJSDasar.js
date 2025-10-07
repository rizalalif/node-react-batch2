// no 1
var perkenalan = 'Nama saya adalah'
var nama = 'Rizal Alif'
var kata1 = 'saya'
var kata2 = 'berharap'
var kata3 = 'untuk'
var kata4 = 'menjadi'
var kata5 = 'seorang'
var kata6 = 'software'
var kata7 = 'engineer'

var gabungan = [' ', kata1, ' ', kata2, ' ', kata3, ' ', kata4, ' ', kata5, ' ', kata7]
var kalimat = perkenalan.concat(...gabungan)
console.log("No1.\n" + kalimat);
// End no 1

// no2
var abjad = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var angka = "0123456789"

var password1 = abjad[19] + abjad[4] + abjad[18] + abjad[19] + angka[1] + angka[2] + angka[3]
var password2 = abjad[1] + abjad[4] + abjad[1] + abjad[10]
console.log("No.2");
console.log("password ke satu :" + password1);
console.log("password ke dua :" + password2);
// end no2

// no3
var sentence2 = "wow JavaScript is so cool"

var exampleFirtstWord2 = sentence2.substring(0, 3)
var secondWord2 = sentence2.substring(4, 14)
var thirdWord2 = sentence2.substring(15, 17)
var fourthWord2 = sentence2.substring(18, 20)
var fiftheWord2 = sentence2.substring(21)

console.log("No.3");
console.log("First Word :" + exampleFirtstWord2);
console.log("Second Word :" + secondWord2);
console.log("Third Word :" + thirdWord2);
console.log("Fourth Word :" + fourthWord2);
console.log("Fifth Word :" + fiftheWord2);
// end no3

// no4

var sentence3 = "wow JavaScript is so cool"

var exampleFirtstWord3 = sentence3.substring(0, 3)
var secondWord3 = sentence3.substring(4, 14)
var thirdWord3 = sentence3.substring(15, 17)
var fourthWord3 = sentence3.substring(18, 20)
var fiftheWord3 = sentence3.substring(21)

console.log("No.4");
console.log("First Word :" + exampleFirtstWord3 + " with length " + exampleFirtstWord3.length);
console.log("Second Word :" + secondWord3 + " with length " + secondWord3.length);
console.log("Third Word :" + thirdWord3 + " with length " + thirdWord3.length);
console.log("Fourth Word :" + fourthWord3 + " with length " + fourthWord3.length);
console.log("Fifth Word :" + fiftheWord3 + " with length " + fiftheWord3.length);
// end no4

// no5
var kode1 = abjad.indexOf("H") + "-" + abjad.indexOf("E") + "-" + abjad.indexOf("L") + "-" + abjad.indexOf("L") + "-" + abjad.indexOf("O")
var kode2 = abjad.indexOf("W") + "-" + abjad.indexOf("O") + "-" + abjad.indexOf("R") + "-" + abjad.indexOf("L") + "-" + abjad.indexOf("D")
var kode3 = abjad.indexOf("I") + "-" + abjad.indexOf("M") + "-" + abjad.indexOf("R") + "-" + abjad.indexOf("E") + "-" + abjad.indexOf("A") + "-" + abjad.indexOf("D") + "-" + abjad.indexOf("Y")



console.log("No5");
console.log("kode 1:" + kode1);
console.log("kode 2:" + kode2);
console.log("kode 3:" + kode3);

// no6
var pertama = "saya";
var kedua = "senang";
var ketiga = "belajar";
var keempat = "javascript";
var spertama = pertama.replace('s', 'S')
var skedua = kedua.replace('s', 'S')
var ekedua = skedua.replace('g', 'G')
var sketiga = ketiga.replace('b', 'B')
var eketiga = sketiga.replace('r', 'R')
var sempat = keempat.toUpperCase()
var kalimat6 = [' ', ekedua, ' ', eketiga, ' ', sempat]
console.log('No.6');

console.log(spertama.concat(...kalimat6));
// no7

var panjang = "12"
var lebar = "7"
var alas = "6"
var tinggi = "13"

var persegiPanjang = parseInt(panjang) * parseInt(lebar)
var segitiga = 0.5 * parseInt(alas) * parseInt(tinggi)

console.log("No.7");
console.log(persegiPanjang);
console.log(segitiga);

// no8
var sisi = " 1 2 ";
var jariJari = "7.5";

var sisiInt = Number(sisi.replaceAll(" ", ""))
var jari = parseFloat(jariJari)

var persegi = sisiInt * sisiInt
var lingkaran = 3.14 * jari * jari

console.log("No.8");
console.log("persegi :" + persegi);
console.log("lingkaran :" + lingkaran);
