var sentence = "Saya Sangat Senang Sekali Belajar Programming dan Saya Juga Senang Belajar Javascript"

var arrSentence = sentence.split(' ')
var pendek = []
var sedang = []
var panjang = []
arrSentence.forEach((word) => {
    if (word.length < 10) {
        pendek.push(word)
    } else if (word.length > 10 && word.length > 10) {
        sedang.push(word)
    } else if (word.length > 10) {
        panjang.push(word)
    }
})

console.log("No.1");
console.log(`Kategori pendek  : ${pendek}`);
console.log(`Kategori sedang  : ${sedang}`);
console.log(`Kategori panjang :${panjang}`);
console.log("===============================");


var nilai = 89
var indeks = ' '
if (nilai >= 80) {
    indeks = 'A'
} else if (nilai >= 70 && nilai < 80) {
    indeks = 'B'
} else if (nilai >= 60 && nilai < 70) {
    indeks = 'C'
} else if (nilai >= 50 && nilai < 60) {
    indeks = 'D'
} else if (nilai < 50) {
    indeks = 'E'
} else {
    indeks = "??"
}
console.log("No.2");
console.log("Indeksnya adalah : " + indeks);
console.log("===============================");

var tanggal = 31;
var bulan = 7;
var tahun = 2003;

var strBulan
switch (bulan) {

    case 1:
        strBulan = 'Januari'
        break
    case 2:
        strBulan = 'Februari'
        break
    case 3:
        strBulan = 'Maret'
        break
    case 4:
        strBulan = 'April'
        break
    case 5:
        strBulan = 'Mei'
        break
    case 6:
        strBulan = 'Juni'
        break
    case 7:
        strBulan = 'Juli'
        break
    case 8:
        strBulan = 'Agustus'
        break
    case 9:
        strBulan = 'September'
        break
    case 10:
        strBulan = 'Oktober'
        break
    case 11:
        strBulan = 'November'
        break
    case 12:
        strBulan = 'Desember'
        break
    default:
        strBulan = 'Purnama'
        break;
}
var formatted = `${tanggal} ${strBulan} ${tahun}`

console.log("No.3");
console.log(formatted);
console.log("===============================");












