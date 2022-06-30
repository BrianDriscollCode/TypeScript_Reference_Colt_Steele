function printName(person) {
    console.log("".concat(person.first, " ").concat(person.last));
}
;
printName({ first: "Thomas", last: "Jenkins" });
//printName({ first: "Mick", last: "Jagger", age: 473}) // not allowed when passed directly
var singer = { first: "Mick", last: "Jagger", age: 273 };
printName(singer); //allows the extra property when passingin defined object
// alias defines shape of the object
// type Point = {
//     x: number;
//     y: number;
// }
var coordinate = { x: 34, y: 2 };
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
function doublePoint(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
function calculatePayout(song) {
    return song.numStreams * 0.0033;
}
function printSong(song) {
    console.log("".concat(song.title, " - ").concat(song.artist));
}
var mySong = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 1259491,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North"
    }
};
calculatePayout(mySong);
printSong(mySong);
var myPoint = { x: 1, y: 3 };
var user = {
    id: 12837,
    username: "catgurl"
};
console.log(user.id);
//shows colorfulCircle result
var happyFace = {
    radius: 4,
    color: "yellow"
};
var christy = {
    numLives: 7,
    breed: "Husky",
    age: 9
};
var dune = {
    title: "Dune",
    originalTitle: "Dune Part One",
    director: "Denis Villeneuve",
    releaseYear: 2021,
    boxOffice: {
        budget: 165000000,
        grossUS: 108327830,
        grossWorldwide: 400671789
    }
};
var cats = {
    title: "Cats",
    director: "Top Hooper",
    releaseYear: 2019,
    boxOffice: {
        budget: 95000000,
        grossUS: 27166770,
        grossWorldwide: 73833348
    }
};
var getProfit = function (movie) {
    console.log(movie.boxOffice.grossWorldwide - movie.boxOffice.budget);
    return movie.boxOffice.grossWorldwide - movie.boxOffice.budget;
};
getProfit(dune);
getProfit(cats);
