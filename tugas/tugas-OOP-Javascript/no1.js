class Animal {
    constructor(name) {
        this._name = name
        this._legs = 4
        this._cold_blooded = false

    }

    get name() {
        return this._name
    }

    set name(n) {
        this._name = n
    }

    get legs() {
        return this._legs
    }

    set legs(sum) {
        this._legs = sum
    }

    get cold_blooded() {
        return this._cold_blooded
    }

    set cold_blooded(blood) {
        this._cold_blooded = blood
    }
}


class Ape extends Animal {
    constructor(name) {
        super(name)
        this._legs = 2
    }

    yell() {
        console.log("Auooo");

    }
}

class Frog extends Animal {
    constructor(name) {
        super(name)
    }

    jump() {
        console.log("hop hop");

    }
}

console.log('=================');
console.log('Animal Class');

const sheep = new Animal("shaun")
console.log(sheep.name) // 4
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false
sheep.legs = 3
console.log(sheep.legs)


console.log('=================');
console.log('Kera Class');

var sungokong = new Ape('kera sakti')

sungokong.yell() // "Auooo"
sungokong.legs = 2
console.log(sungokong.name)
console.log(sungokong.legs)
console.log(sungokong.cold_blooded)

console.log('=================');
console.log('Kodok Class');


var kodok = new Frog('buduk')

kodok.jump() // "hop hop"
console.log(kodok.name)
console.log(kodok.legs)
console.log(kodok.cold_blooded)





function Clock({ template }) {

    var timer;

    function render() {
        var date = new Date();

        var hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        var mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        var secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        var output = template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    this.stop = function () {
        clearInterval(timer);
    };

    this.start = function () {
        render();
        timer = setInterval(render, 1000);
    };

}

// var clock = new Clock({ template: 'h:m:s' });
// clock.start();
// class Clock {
//     // Code di sini
// }

var clock = new Clock({ template: 'h:m:s' });
clock.start();


