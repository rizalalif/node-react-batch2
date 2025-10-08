console.log('No.1');

var i = 0
var firstLoop = 'I love coding'
var secondLoop = 'I will become a MERN Stack developer'
console.log('LOOPING PERTAMA');
while (i < 20) {
    i += 2
    console.log(`${i} - ${firstLoop}`);
}
console.log('LOOPING KEDUA');
while (i >= 2) {
    console.log(`${i} - ${secondLoop}`);
    i -= 2
}

console.log('===================');
console.log('No.2');

for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(`${i} - Angka Genap`);
    } else {
        console.log(`${i} - Angka Ganjil`);

    }

}
console.log('===================');
console.log('No.3');

var desc
for (let i = 1; i <= 20; i++) {
    if (i % 3 == 0 && i % 2 != 0) {
        desc = 'I Love Coding'
    } else if (i % 3 == 0 && i % 2 != 0) {
        desc = 'ToT'
    } else if (i % 2 == 0) {
        desc = 'Berkualitas'
    } else {
        desc = 'Santai'
    }
    console.log(`${i} - ${desc}`);
}

console.log('===================');
console.log('No.4');


for (let i = 0; i < 7; i++) {
    var pagar = '';
    for (let j = i; j <= 7; j++) {
        pagar += '#'
        console.log(pagar);
        console.log('');
    }
    break
}

console.log('===================');
console.log('No.5');

var sentence = "Fullstack Developer"

for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== 'a' && sentence[i] !== 'i' && sentence[i] !== 'u' && sentence[i] !== 'e' && sentence[i] !== 'o' && sentence[i] !== ' ') {
        console.log(sentence[i]);
    }

}

console.log('===================');
