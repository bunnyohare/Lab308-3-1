// Part 1: Fizz Buzz

console.log("Part 1: Fizz Buzz")

for (let i=1; i<=100; i++){
    if (((i%3)==0)&&((i%5)==0)){
        console.log("Fizz Buzz")
    }
    else if ((i%3) == 0){
        console.log("Fizz");
    }else if((i%5)==0){
        console.log("Buzz")
    }else{
        console.log(i);
    }

}

// Part 2: Prime Time

console.log("Part 2: Prime Time")

let given = 21;
loop1:
    for(let i = given +1 ;; i++){
        let isPrime = true;
    loop2:
        for (let j = 2; ; j++) {
            if(i % j === 0) {
                isPrime = false;
                break;
            }
            if(isPrime) {
            console.log(`${i} is the next prime number.`)
            break loop1;
        } 
    }
}

// Part 3: Feeling Loopy

console.log("Part 3: Feeling Loopy")

let stringFromCSV = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"

let toBeParsed = stringFromCSV;

const seperator = ",";
const arrayFromCSV = stringFromCSV.split(/\n/);
let cellsFromArrayRow = [];

let cell1;
let cell2;
let cell3;
let cell4;

for (let i = 0; i < arrayFromCSV.length; i++){
    cellsFromArrayRow = arrayFromCSV[i].split(seperator);
    cell1 = cellsFromArrayRow[0];
    cell2 = cellsFromArrayRow[1];
    cell3 = cellsFromArrayRow[2];
    cell4 = cellsFromArrayRow[3];

    console.log(cell1, cell2, cell3, cell4);
}
 



