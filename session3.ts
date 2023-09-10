let requiredAge: number = 18 ;
let userAge: number = 15 ;

userAge > requiredAge ? console.log("Welcome!") :  console.log("You are not allowed.")


// calculate your score

let grade: number = 69 ;

if ( grade > 100 && grade < 100 )  {
    console.log("Enter valid number")
}

if ( grade >= 90 ) {
    console.log ("A")
}else if ( grade >= 80 ) {
    console.log ("B")
}else if ( grade >= 70 ) {
    console.log ("C")
}else if ( grade >= 60 ) {
    console.log ("D")
}else if ( grade >= 50 ) {
    console.log ("E")
}else  {
    console.log ("F")
};


// check the light

// let currentColor:string = "red"
let currentColor:string = prompt("enter color:").toLowerCase()

// if ( currentColor === "red" ) {
//     console.log("The next color is green!")
// } else if ( currentColor === "yellow" ) {
//     console.log("The next color is red!")
// } else if ( currentColor === "green" ) {
//     console.log("The next color is yellow!")
// }

switch (currentColor) {
    case "red" :
        console.log("The next color is green!")
        break;
    case "yellow" :
        console.log("The next color is red!")
        break;
    case "red" :
        console.log("The next color is yellow!")
        break; 
}

