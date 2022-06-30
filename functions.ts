function square(num: number) {

        return num * num

}

const cube = (num) => {

    return num * num * num

}


const doSomething = (person:string, age: number, isFunny: boolean) => {}

doSomething("fsdf", 9, false);

function greet(person: string = "stranger") {

    return `hi there, ${person}`;

}

//defined param type AND return type

function sqaure(num: number): number {

        return num * num

}

const add = (x: number, y: number): number => {

    return x + y;

}

const colors = ["red", "orange", "yellow"];
//color is inferred no need for declaration
colors.map(color => {

    color.toUpperCase();

})

greet();
greet("tony")