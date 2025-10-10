var filterBooksPromise = require('./promise2.js')


filterBooksPromise(true, 50)
    .then((books) => {
        console.log(books);

    }).catch((e) => {
        console.log(e);

    })

async function fiftyNotColorfulBook() {
    try {
        const books = await filterBooksPromise(false, 250)
        console.log(books);

    } catch (error) {
        console.log(error);

    }
}

async function thirtyNotcolorfulBooks() {
    try {
        const books = await filterBooksPromise(true, 30)
        console.log(books);
    } catch (error) {
        console.log(error.message)
    }
    return true
}

fiftyNotColorfulBook()
thirtyNotcolorfulBooks()
