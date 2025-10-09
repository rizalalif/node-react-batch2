console.log('No.1');

var dataPeserta = ["john", "laki-laki", "programmer", "30"]
var output = '';
console.log(`Halo, nama saya ${dataPeserta[0]}. saya ${dataPeserta[1]} berumur ${dataPeserta[3]} bekerja sebagai seorang ${dataPeserta[2]}`)

console.log('======');
console.log('No.1');

var sayuran = []
sayuran.push(...['Kangkung', 'Bayam', 'Buncis', 'Kubis', 'Timun', 'Seledri', 'Tauge'])
console.log('No.2');

console.log(sayuran);
console.log('======');

console.log('No.3');
sayuran.sort()
sayuran.sort().forEach((sayur, i) => {
    console.log(`${i + 1}. ${sayur}`);

})
console.log('======');

console.log('No.4');

var word = "car"

var result = []
for (let i = 0; i < word.length; i++) {
    result.push(word.substring(0, i + 1))

    if (i == word.length) {
        result.push(word.substring(1, i + 1))

    }


}
console.log(result);


console.log('No.5');
var numbers = [4, 5, 1, 4, 6, 8, 9, 21]
var sumNumbers = numbers.reduce((prev, next) => {
    return prev + next
})

console.log(sumNumbers);
console.log('========');


console.log('No.6');
var kumpulanAngka = [
    [1, 3, 5, 7, 8, 9],
    [4, 5, 6, 2, 3, 1],
    [6, 7, 8, 1, 3, 5],
]

var hasilSum = []
var sumKumpulan = kumpulanAngka.forEach((angka) => {
    hasilSum.push(angka.reduce((prev, sum) => prev + sum))
})
console.log(hasilSum);

console.log('========');





