console.log('No.1');
function introduce(name, gender, job, age) {
    var awalan = gender == 'perempuan' ? 'perempuan' : 'laki-laki'
    return `${awalan} ${name} adalah seorang ${job} yang berusia ${age} tahun`
}


var john = introduce("John", "laki-laki", "penulis", "30")
var sarah = introduce("Sarah", "perempuan", "model", "28")

console.log(john);
console.log(sarah);
console.log('===========');
console.log('No.2');

var text = "Super Bootcamp Fullstack Dev 2022"
var lowerTxt = text.toLowerCase()
function findUnique(input = 'A') {
    var result = '';
    for (let i = 0; i < input.length; i++) {
        const element = input[i]
        if (input.indexOf(element) == input.lastIndexOf(element)) {
            result += element
        }
    }
    console.log(result);
}
findUnique(lowerTxt)
console.log('===========');
console.log('No.3');

var angka = [2, 3, 1, 9, 12, 8, 9, 7]
function top(num = []) {
    var big = num.reduce((prev, curr) => prev > curr ? prev : curr)
    var small = num.reduce((prev, curr) => prev < curr ? prev : curr)

    return { big, small }
}
const { big, small } = top(angka)
console.log(`Angka terbesar adalah ${big} dan angka terkecil adalah ${small}`);

console.log('===========');
console.log('No.4');

function arrangeString(str = '') {
    var result = ''
    var arrAlph = str.split('')
    arrAlph.sort().forEach((alph) => result += alph)
    return result
}

console.log(arrangeString("bahasa"))
console.log(arrangeString("similikiti"))
console.log(arrangeString("sanbercode"))
console.log(arrangeString(""))

console.log('===========');
console.log('No.4');


function palindrome(kata) {
    var reverse = ''
    var arrKata = kata.split('')
    // console.log(arrKata[0]);



    for (let i = 0; i < arrKata.length; i++) {
        reverse += arrKata[arrKata.length - i - 1]
    }

    if (kata === reverse) {
        return true
    } else {
        return false
    }
}
console.log(palindrome('malam'));
console.log('===========');
console.log('No.5');

function angkaPalindrome(angka) {
    var newAngka = angka;
    while (true) {
        var reverse = newAngka.toString().split('').reverse().join('')
        if (newAngka == reverse) {
            return newAngka
        }
        newAngka++
        // console.log(newAngka);
    }

}top


console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
