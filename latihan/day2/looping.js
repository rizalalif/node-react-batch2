console.log("No.1");

var firstLoop = "I love coding"
var secondLoop = "I will become a MERN Stack developer"

var i = 2
console.log("LOOPING PERTAMA");
while (i <= 20) {
    console.log(`${i} - ${firstLoop}`);
    i += 2

}
i -= 2
console.log("LOOPING KEDUA");

while (i >= 2) {
    console.log(`${i} - ${secondLoop}`);
    i -= 2
}


console.log("===============================");


console.log("No.2");

for (let index = 1; index <= 20; index++) {
    if (index % 2 == 0) {

        console.log(`${index} - Angka Genap`);

    } else {
        console.log(`${index} - Angka Ganjil`);

    }

}
console.log("===============================");

console.log("No.3");

for (let index = 1; index <= 20; index++) {

    if (index % 2 != 0 && index % 3 == 0) {
        console.log(`${index} - I Love Coding`);
    } else if (index % 2 == 0 && index % 3 == 0) {
        console.log(`${index} - ToT`);
    }
    else if (index % 2 == 0) {

        console.log(`${index} - Berkualitas`);
    }
    else if (index % 2 != 0) {
        console.log(`${index} - Santai`);
    }
}


console.log("===============================");


console.log("No.4");

var segitiga = []
for (let i = 1; i < 7; i++) {
    // var bintang = []
    console.log('BELUM');


}
console.log("===============================");

console.log("No.5");
var sentence = "Fullstack Developer"

for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] != 'a' && sentence[i] != 'i' && sentence[i] != 'u' && sentence[i] != 'e' && sentence[i] != 'o' && sentence[i] != ' ') {
        console.log(sentence[i]);

    }
}
console.log("===============================");



