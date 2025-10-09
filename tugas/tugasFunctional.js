console.log('No.1');


function compute2(p, l) {
    console.log(p * l);

}

const hitungPersegiPanjang = (p, l) => compute2(p, l);
const hitungPersegi = (s) => compute2(s, s);

hitungPersegi(8)

hitungPersegiPanjang(12, 7)

console.log('===================================');
console.log('No.2');

function compute3(p, l, t) {
    console.log(p * l * t);

}

const hitungBalok = (p, l, t) => compute3(p, l, t);
const hitungKubus = (s) => compute3(s, s, s);

hitungKubus(2)

hitungBalok(12, 7, 5)

console.log('===================================');
console.log('No.3');

function sorting(data, i = 0) {

    console.log(`${i + 1}. ${data[i].name}`);

    if (i < data.length - 1) {
        sorting(data, i += 1)

    }

}

var people = [
    { name: "John", job: "Programmer", gender: "male", age: 30 },
    { name: "Sarah", job: "Model", gender: "female", age: 27 },
    { name: "Jack", job: "Engineer", gender: "male", age: 25 },
    { name: "Ellie", job: "Designer", gender: "female", age: 35 },
    { name: "Danny", job: "Footballer", gender: "male", age: 30 },
]

sorting(people)

console.log('===================================');
console.log('No.4');

function findPhone(colour, i = 0) {


    var phones = [
        { name: "Samsung Galaxy A52", brand: "Samsung", year: 2021, colors: ["black", "white"] },
        { name: "Redmi Note 10 Pro", brand: "Xiaomi", year: 2021, colors: ["white", "blue"] },
        { name: "Redmi Note 9 Pro", brand: "Xiaomi", year: 2020, colors: ["white", "blue", "black"] },
        { name: "Iphone 12", brand: "Apple", year: 2020, colors: ["silver", "gold"] },
        { name: "Iphone 11", brand: "Apple", year: 2019, colors: ["gold", "black", "silver"] },
    ]

    const sorted = phones.sort((a, b) => a.name.localeCompare(b.name))


    let tes = sorted[i].colors.findIndex((color) => color == colour)
    if (tes >= 0) {
        console.log(`${phones[i].name}, colors available: ${phones[i].colors} `);
    }

    if (i < phones.length - 1) {
        findPhone(colour, i += 1)


    }



}



findPhone("black")
