const readBooks = require('./callback')

var books = [
    { name: 'LOTR', timeSpent: 3000 },
    { name: 'Fidas', timeSpent: 2000 },
    { name: 'Kalkulus', timeSpent: 4000 },
    { name: 'komik', timeSpent: 1000 }
]


// readBooks(10000, { name: 'LOTR', timeSpent: 3000 }, (timeSpare) => {
//     let i = 0

//     return timeSpare
// })
// console.log(...books);
// books.forEach((book) => {
//     readBooks(10000, ...books, (timeSpare) => {
//         return timeSpare
//     })
// })

function onReading(timespare, i = 0) {
    readBooks(10000, books[i], function (timeSpare) {
        if (i < books.length - 1) {
            onReading(timeSpare, i += 1)
        }
    })

}

onReading()