const express = require('express')
const port = 3000

const app = express()

app.get('/', (req, res) => {
    res.send('tugas express');

})

app.get('/lingkaran-tabung', (req, res) => {
    let { r, t } = req.query

    const volume = volumeTabung(r, t)
    const keliling = kelilingAlas(r)



    let outHtml = `
        <h1> jari-jari: ${t} <h1>
        <h1> tinggi: ${t} <h1>
        <h1> volume tabung: ${volume} <h1>
        <h1> keliling alas tabung: ${keliling} <h1>
    `
    res.send(outHtml);

})

app.get('/data-orang', findPersonBy)
app.get('/data-orang/:id', findPersonById)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})





function findPersonBy(req, res) {
    const { age, gender } = req.query


    let dataOrang = [
        { id: 1, name: "John", umur: 30, pekerjaan: "Penulis", jenisKelamin: "L" },
        { id: 4, name: "Benzema", umur: 34, pekerjaan: "Pemain Bola", jenisKelamin: "L" },
        { id: 5, name: "Sarah", umur: 27, pekerjaan: "Model", jenisKelamin: "P" },
        { id: 9, name: "Shohei Ohtani", umur: 28, pekerjaan: "Pemain Baseball", jenisKelamin: "L" },
        { id: 11, name: "Maria Sharapova", umur: 35, pekerjaan: "Petenis", jenisKelamin: "P" }
    ]

    let filtered = [];

    if (age && gender) {
        filtered = dataOrang.filter((person) => person.umur >= age && person.jenisKelamin.toLowerCase() == gender.toLowerCase())
    } else if (age) {
        filtered = dataOrang.filter((person) => person.umur >= age)

    } else if (gender) {
        filtered = dataOrang.filter((person) => person.jenisKelamin.toLowerCase() == gender.toLowerCase())

    }

    let formatted = '';

    filtered.forEach((person, i) => {
        formatted += `${i + 1}. ${person.name} - Pekerjaan: ${person.pekerjaan} - Umur: ${person.umur} Tahun <br></br>`
    })


    res.send(formatted)


}

function findPersonById(req, res) {
    const { id } = req.params


    let dataOrang = [
        { id: 1, name: "John", umur: 30, pekerjaan: "Penulis", jenisKelamin: "L" },
        { id: 4, name: "Benzema", umur: 34, pekerjaan: "Pemain Bola", jenisKelamin: "L" },
        { id: 5, name: "Sarah", umur: 27, pekerjaan: "Model", jenisKelamin: "P" },
        { id: 9, name: "Shohei Ohtani", umur: 28, pekerjaan: "Pemain Baseball", jenisKelamin: "L" },
        { id: 11, name: "Maria Sharapova", umur: 35, pekerjaan: "Petenis", jenisKelamin: "P" }
    ]

    const founded = dataOrang.find((person) => person.id == id)
    let result;

    if (founded == undefined) {
        result = 'Maaf data tidak ditemukan'
    } else {
        result = `${founded.jenisKelamin == 'P' ? 'Bu' : 'Pak'} ${founded.name} adalah seorang ${founded.pekerjaan} yang berusia ${founded.umur} tahun`
    }
    res.send(result)
}






function volumeTabung(r, t) {
    let phi = 3.14
    if (r % 7 === 0) {
        phi = 22 / 7
    }
    return phi * r * r * t
}

function kelilingAlas(r) {
    let phi = 3.14
    if (r % 7 === 0) {
        phi = 22 / 7
    }
    return 2 * phi * r
}