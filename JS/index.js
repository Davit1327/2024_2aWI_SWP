console.log("Hello World - how are you ");


// 1. keyword: let
// 2. variable: result
// 3. expression (Ausdruck, Term): 1 + 2
// 4. assignment(zuweisung): =
// 5. terminator (Abschluss eines Befehls): ;
// ==> Statement let result = 1 + 2 ;
let result = 1 + 2; //3

// 7. argument: result
// 8. terminator: ;
// ==> statement: console.log(result);
console.log(result);


// Code blocks (Codeblöcke): statements beloging toghether
{
    // 1.keyword: let
    // 2. variable: a
    // 3. assignment: =
    // 4. constand: 10
    // 5. terminator: ; 
    let a = 10;
    let b = 20;

    let c = a + b;
    console.log(c);
}


// calculations


let a1;
let b1;

a1 = 7
b1 = 3

// addition
let sum = a1 + b1; //10

// subraction
let difference = a1 - b1; //4

// multiplication
let product = a1 * b1; //21

// division
let quotient = a1 / b1; // 2.3333

// modulo
let remeindar = a1 % b1; //1

// exponnentiation (Potenzierung)
let power = a1 ** b1; // 343 

// expression
let expression = (a1 + b1) * b1;

// if statment

a1 = 13;
b1 = 42;

console.log("a1:" + a1);
console.log("b1:" + b1);

if (a1 < b1) {
    console.log("a1 is smaller than b1");
}

// if - else statement 

if (a1 == b1) {
    console.log("a1 equals b1");
} else if (a1 < b1) {
    console.log("a1 is smaller than b1");
} else {
    console.log("a1 is greater than b1");
}

// comparision operators

// equal to
console.log(1 == 1); // true

// not equal (nicht gleich)
console.log(1 != 1); // false

// greather than (größer als)
console.log(1 > 1);

// greather than or equal to(größer oder gleich)
console.log(1 >= 1);

// less than (kleiner als)
console.log(1 < 1);

// less than or equal to (kleiner oder gleich)
console.log(1 <= 1);


//Values and Types

// primitive Data types (primitive Datentypen)
let intenger = 213; // Ganzzahl
let floatingPoint = 3.14415926; // Gleitkommazahl
let boolean = true; // Wahrheitswert (True oder false)

// strings (Zeichenketten)
let string1 = "Hello World "; // Zeichenkette
let string2 = "it is great"; // Zeichenkette
let string3 = "it's great"; // Zeichenkette
let string4 = string1 + string2;

// concatentation (Verkettung)of Strngs
console.log(string1);
console.log(string2);
console.log(string3);
console.log(string4);

// concatentation of Strng and numbers
// side note: 
//             a1 and b1 as well as result are declared and initalizied  above
//              so we do not need to do it again
a1 = 10;
b1 = 20;
result = a1 + b1;
console.log("The result is:" + result)



// loops (Schleifen)
// for loop

console.log("Davit")
console.log("Davit")
console.log("Davit")

for (let i = 0; i < 10; i++) {  // i++ bedeutet i = i + 1
    console.log("Davit");
    console.log("Durchlauf:" + i)
}

let i = 1;
console.log(i);


for (let i = 0; i < 10; i = i + 1) {  // i++ bedeutet i = i + 1
    console.log("Davit");
    console.log("Durchlauf:" + i)
}
