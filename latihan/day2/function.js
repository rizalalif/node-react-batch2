console.log('No.1');


function introduce(name, gender, job, age) {
    var awalan = gender == 'perempuan' ? 'Bu' : 'Pak'
    return `${awalan} ${name} adalah seorang ${job} yang berusia ${age} tahun`
}

var john = introduce("John", "laki-laki", "penulis", "30")
console.log(john)

var sarah = introduce("Sarah", "perempuan", "model", "28")
console.log(sarah)
console.log('=========');

console.log('No.2');




var text = "Super Bootcamp Fullstack Dev 2022"




console.log(findUnique(text));



console.log('=========');