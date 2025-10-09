console.log('No.1');

const luasLingkaran = (r) => {
    let phi = 3.14;
    if (r % 7 == 0) {
        phi = 22 / 7
    }
    return phi * r * r
}
const kelilingLingkaran = (r) => {
    let phi = 3.14
    if (r % 7 == 0) {
        phi = 22 / 7
    }
    return phi * 2 * r


}


console.log(luasLingkaran(7));
console.log(kelilingLingkaran(7));

console.log('====================');
console.log('No.2');

const introduce = (...atribut) => {
    var awalan = atribut[2].toLocaleLowerCase() == 'perempuan' ? 'Bu' : 'Pak'
    return `${awalan} ${atribut[0]} adalah seorang ${atribut[2]} yang berusia ${atribut[1]} tahun`
}

const perkenalanJohn = introduce("john", "30", "Laki-Laki", "penulis")
console.log(perkenalanJohn);
const perkenalanSarah = introduce("sarah", "28", "Perempuan", "guru")
console.log(perkenalanSarah)
console.log('========================');
console.log('No.3');

const newFunction = (firstName, lastName) => {
    return {
        firstName,
        lastName,
        fullName: () => {
            console.log(`${firstName} ${lastName}`)
        }
    }
}
console.log(newFunction("John", "Doe").firstName)
console.log(newFunction("Richard", "Roe").lastName)
newFunction("William", "Imoh").fullName()

console.log('========================');
console.log('No.4');

let phone = {
    name: "Galaxy Note 20",
    brand: "Samsung",
    year: 2020,
    colors: ["Mystic Bronze", "Mystic White", "Mystic Black"]
}

const { name: phoneName, brand: phoneBrand, year } = phone
const [colorBronze, colorWhite, colorBlack] = phone.colors

console.log(phoneBrand, phoneName, year, colorBlack, colorBronze)

console.log('========================');
console.log('No.5');

let warna = ["biru", "merah", "kuning", "hijau"]


let dataBukuTambahan = {
    penulis: "john doe",
    tahunTerbit: 2020
}


let buku = {
    nama: "pemograman dasar",
    jumlahHalaman: 172,
    warnaSampul: ["hitam"]
}


const [biru, merah, kuning, hijau] = warna

buku.warnaSampul = [...buku.warnaSampul, ...warna]

buku = { ...buku, ...dataBukuTambahan }
console.log(buku);

console.log('========================');
console.log('No.6');

const addProducts = (products, newProducts) => {
    let added = [...newProducts, ...products.products]

    return added


    // products.products = [...products.products, ...newProducts]
    // return 
}

let samsung = {
    name: "Samsung",
    products: [
        { name: "Samsung Galaxy Note 10", colors: ["black", "gold", "silver"] },
        { name: "Samsung Galaxy Note 10s", colors: ["blue", "silver"] },
        { name: "Samsung Galaxy Note 20s", colors: ["white", "black"] }
    ]
}

let newProducts = [
    { name: "Samsung Galaxy A52", colors: ["white", "black"] },
    { name: "Samsung Galaxy M52", colors: ["blue", "grey", "white"] }
]

samsung = addProducts(samsung, newProducts)

console.log(samsung);


console.log('========================');
console.log('No.7');


const objectConversion = (nama, domisili, umur) => {
    return { nama, domisili, umur }
}

let data = ["Bondra", "Medan", 25]

const [nama, domisili, umur] = data

const newObj = objectConversion(nama, domisili, umur)
console.log(newObj);

console.log('========================');
console.log('No.8');


const graduate = (data) => {
    // let adonis = data.filter((d) => d.class == "adonis")
    // let vuejs = data.filter((d) => d.class == "vuejs")
    // let laravel = data.filter((d) => d.class == "laravel")
    // let react = data.filter((d) => d.class == "react ")
    // let agile = data.filter((d) => d.class == "agile ")
    console.log(data);

    let result = {};
    data.map((d, i) => {

        if (d.class == 'adonis') {
            result.adonis = [data[i].name]
        }
    })
    return result
}

const data1 = [
    { name: "Ahmad", class: "adonis" },
    { name: "Regi", class: "laravel" },
    { name: "Bondra", class: "adonis" },
    { name: "Iqbal", class: "vuejs" },
    { name: "Putri", class: "laravel" }
]

const data2 = [
    { name: "Yogi", class: "react" },
    { name: "Fikri", class: "agile" },
    { name: "Arief", class: "agile" }
]


console.log(graduate(data1))
