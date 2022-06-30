function printName(person: { first: string; last: string }): void {

    console.log(`${person.first} ${person.last}`)

};

printName({ first: "Thomas", last: "Jenkins" });


//printName({ first: "Mick", last: "Jagger", age: 473}) // not allowed when passed directly

const singer = { first: "Mick", last: "Jagger", age: 273 }; 
printName(singer) //allows the extra property when passingin defined object


// alias defines shape of the object
// type Point = {

//     x: number;
//     y: number;

// }


let coordinate: Point = { x: 34, y: 2 };

function randomCoordinate(): Point {

    return { x: Math.random(), y: Math.random() };

}

function doublePoint(point: Point): {x: number, y: number}{

    return { x: point.x * 2, y: point.y * 2 }


}

type Song = {

    title: string;
    artist: string;
    numStreams: number;
    credits: { producer: string; writer: string}

}

function calculatePayout(song:Song): number {

    return song.numStreams * 0.0033;

}

function printSong(song: Song): void {

    console.log(`${song.title} - ${song.artist}`);

}

const mySong: Song = {

    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 1259491,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North"
    }


}

calculatePayout(mySong);
printSong(mySong)



type Point = {

    x: number;
    y: number;
    z?: number; // question mark makes this optional

}

const myPoint: Point = { x: 1, y: 3};


type User = {

    readonly id: number,
    username: string

};

const user: User = {
    id: 12837,
    username: "catgurl"
}

console.log(user.id)
//user.id = 238974

type Circle = {

    radius: number;

}

type Colorful = {

    color: string;

}

type ColorfulCircle = Circle & Colorful; //joins the circle and colorful types to form another type

//shows colorfulCircle result
const happyFace: ColorfulCircle = {
    radius: 4,
    color: "yellow",
}

type Cat = {
    numLives: number
}
type Dog = {
    breed: string
}

//CatDog is = to the cat, dog, and {age: number} types
type CatDog = Cat & Dog & {
    age: number;
}

const christy: CatDog = {
    numLives: 7,
    breed: "Husky",
    age: 9,
}

//*** MOVIES */

type Movie = {
    readonly title: string,
    originalTitle?: string,
    director: string,
    releaseYear: number,
    boxOffice: {
        budget: number,
        grossUS: number,
        grossWorldwide: number
    }

}

const dune: Movie = {

    title: "Dune",
    originalTitle: "Dune Part One",
    director: "Denis Villeneuve",
    releaseYear: 2021,
    boxOffice: {
        budget: 165000000,
        grossUS: 108327830,
        grossWorldwide: 400671789,
    },
};

const cats: Movie = {

    title: "Cats",
    director: "Top Hooper",
    releaseYear: 2019,
    boxOffice: {
        budget: 95000000,
        grossUS: 27166770,
        grossWorldwide: 73833348,

    },
};

const getProfit = (movie: Movie): number => {

    console.log(movie.boxOffice.grossWorldwide - movie.boxOffice.budget)
    return movie.boxOffice.grossWorldwide - movie.boxOffice.budget;

}

getProfit(dune);
getProfit(cats);
