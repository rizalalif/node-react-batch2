var readBooksPromise = require('./promise.js')

var books = [
    { name: 'LOTR', timeSpent: 3000 },
    { name: 'Fidas', timeSpent: 2000 },
    { name: 'Kalkulus', timeSpent: 4000 }
]


function onReading(timeSpare, i = 0) {
    readBooksPromise(10000, books[i]).then((timeSpare) => {
        if (i < books.length - 1) {

            onReading(timeSpare, i += 1)
        }
    }).catch((e) => {
        console.log(e);

    })
}

onReading()


