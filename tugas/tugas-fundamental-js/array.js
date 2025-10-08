console.log('No.1');

var dataPeserta = ["john", "laki-laki", "programmer", "30"]
var output;
console.log(`Halo, nama saya ${dataPeserta[0]}. saya ${dataPeserta[1]} berumur ${dataPeserta[3]} bekerja sebagai seorang ${dataPeserta[2]}`);

var sayuran = []

var arrSayur = ['Kangkung', 'Bayam', 'Buncis', 'Kubis', 'Timun', 'Seledri', 'Tauge']

arrSayur.forEach((sayur) => sayuran.push(sayur))
console.log('===================');
console.log('No.2');
console.log(arrSayur);
console.log('===================');
console.log('No.3');

// sortedSayuran = sayuran.sort()
for (let i = 0; i < sayuran.length; i++) {
    console.log(`${i + 1}. ${sayuran.sort()[i]}`);
}

console.log('===================');
console.log('No.5');

var numbers = [4, 5, 1, 4, 6, 8, 9, 21]

var sumNumber = numbers.reduce((a, b) => a + b)

console.log(sumNumber);

console.log('===================');
console.log('No.6');

var kumpulanAngka = [
    [1, 3, 5, 7, 8, 9],
    [4, 5, 6, 2, 3, 1],
    [6, 7, 8, 1, 3, 5],
]

var result = []

kumpulanAngka.forEach((angka) => {
    var sumAngka = angka.reduce((a, b) => a + b)
    result.push(sumAngka)
})

console.log(result);