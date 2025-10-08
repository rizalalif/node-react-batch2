console.log('No.1');

var data = [
    {
        nama: "Nanas",
        warna: "Kuning",
        "ada bijinya": "tidak",
        harga: 9000,
    },
    {
        nama: "Jeruk",
        warna: "Oranye",
        "ada bijinya": "ada",
        harga: 8000,

    },
    {
        nama: "Semangka",
        warna: "Hijau & Merah",
        'ada bijinya': 'ada',
        harga: 10000

    },
    {
        nama: "Pisang",
        warna: "Kuning",
        "ada bijinya": "tidak",
        harga: 5000,
    },

]

var filtered = data.filter((buah) => {
    return buah['ada bijinya'] == 'tidak'
})

console.log(filtered);
console.log('========================');
console.log('No.2');

var dataFilm = []
function tambahDataFilm(nama, durasi, genre, tahun) {
    dataFilm.push({
        nama, durasi, genre, tahun
    })
}

tambahDataFilm("LOTR", "2 jam", "action", "1999")
tambahDataFilm("avenger", "2 jam", "action", "2019")
tambahDataFilm("spiderman", "2 jam", "action", "2004")
tambahDataFilm("juon", "2 jam", "horror", "2004")
console.log(dataFilm);

console.log('========================');
console.log('No.3');

var people = [
    { name: "John", job: "Programmer", gender: "male", age: 30 },
    { name: "Sarah", job: "Model", gender: "female", age: 27 },
    { name: "Jack", job: "Engineer", gender: "male", age: 25 },
    { name: "Ellie", job: "Designer", gender: "female", age: 35 },
    { name: "Danny", job: "Footballer", gender: "male", age: 30 },
]

var up29 = people.filter((person) => person.age > 29)
console.log(up29);


console.log('========================');
console.log('No.4');

var people = [
    { name: "John", job: "Programmer", gender: "male", age: 30 },
    { name: "Sarah", job: "Model", gender: "female", age: 27 },
    { name: "Jack", job: "Engineer", gender: "male", age: 25 },
    { name: "Ellie", job: "Designer", gender: "female", age: 35 },
    { name: "Danny", job: "Footballer", gender: "male", age: 30 },
]

sum = 0
people.forEach((person) => {
    sum += person.age
})

console.log("Rata - rata : " + sum / people.length);

console.log('========================');
console.log('No.5');


var sorted = people.sort((a, b) => a.age - b.age)
sorted.forEach((person, i) => {
    console.log(i + 1 + '. ' + person.name);
})

// console.log(named);


console.log('========================');
console.log('No.6');

var phone = {
    name: "Samsung Galaxy Note 20",
    brand: "Samsung",
    colors: ["Black"],
    release: 2020
}

function addColors(color) {
    phone.colors.push(color)
}
addColors("Gold")
addColors("Silver")
addColors("Brown")
console.log(phone)








