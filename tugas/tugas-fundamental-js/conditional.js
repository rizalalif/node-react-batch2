console.log('No.1');
var sentence = "Saya Sangat Senang Sekali Belajar Programming dan Saya Juga Senang Belajar Javascript";

var arrWord = sentence.split(' ')

var pendek = []
var sedang = []
var panjang = []
arrWord.forEach((word) => {
    if (word.length < 10) {
        pendek.push(word)
    } else if (word.length >= 10 && word.length <= 30) {
        sedang.push(word)
    } else if (word.length > 30) {
        panjang.push(word)
    }
})
console.log(`Pendek : ${pendek}`);
console.log(`Sedang : ${sedang}`);
console.log(`Panjang : ${panjang}`);

console.log('=========================');
console.log('No.2');

var nilai = 90;
var indexNilai;
if (nilai >= 80) {
    indexNilai = 'A'
} else if (nilai >= 70 && nilai < 80) {
    indexNilai = 'B'
} else if (nilai >= 60 && nilai < 70) {
    indexNilai = 'C'
} else if (nilai >= 50 && nilai < 60) {
    indexNilai = 'D'
} else if (nilai < 50) {
    indexNilai = 'B'
}

console.log('Index : ' + indexNilai);
console.log('=========================');
console.log('No.3');

var tanggal = 31;
var bulan = 7;
var tahun = 2003;

var month;
switch (bulan) {
    case 1:
        month = 'Januari'
        break;
    case 2:
        month = 'Februari'
        break;
    case 3:
        month = 'Maret'
        break;
    case 4:
        month = 'April'
        break;
    case 5:
        month = 'Mei'
        break;
    case 6:
        month = 'Juni'
        break;
    case 7:
        month = 'Juli'
        break;
    case 8:
        month = 'Agustus'
        break;
    case 9:
        month = 'September'
        break;
    case 10:
        month = 'Oktober'
        break;
    case 11:
        month = 'November'
        break;
    case 12:
        month = 'Desember'
        break;
    default:
        break;
}
var formatted = `${tanggal} ${month} ${tahun}`
console.log(formatted);

