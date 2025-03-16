let x = 5;
let y = 7;
let z = x + y;
console.log(z);

let A = "Hello ";
let B = "world!";
let C = A + B;
console.log(C);

function SumNPrint(x1, x2) {
    let x3 = x1 + x2;
    console.log(x3);
}

SumNPrint(x, y);
SumNPrint(A, B);

if (C.length > z) {
    console.log(C);
} else if (C.length < z) {
    console.log(z);
} else {
    console.log("good job!");
}

let L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
let L2 = ["Apple", "Banana", "Kiwi", "Orange"];

// function findTheBanana(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === "Banana") {
//             alert("Banana found in the array!");
//         }
//     }
// }

// findTheBanana(L1);
// findTheBanana(L2);

function findTheBanana(array, arrayName) {
    array.forEach(function(fruit) {
      if (fruit === "Banana") {
        alert("found banana in " + arrayName + "!");
      }
    });
  }
  
  // Call the forEach version with both arrays
  findTheBanana(L1, "first array");
  findTheBanana(L2, "second array");

function greetingFunc() {
    let d = new Date();
    let h = d.getHours();
    let E = document.getElementById("greetingMessage");

    let greeting = "";
    if (h < 12) {
        greeting = "Good morning";
    } else if (h >= 12 && h < 18) {
        greeting = "Good afternoon";
    } else if (h >= 18 && h < 20) {
        greeting = "Good evening";
    } else {
        greeting = "Good night";
    }
    E.innerHTML = greeting + E.innerHTML;
}

greetingFunc();







