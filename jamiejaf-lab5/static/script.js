document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    if (form) {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const commentInput = document.getElementById('comment');
        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        const commentError = document.getElementById('commentError');
        
        form.addEventListener('submit', function(event) {
            nameError.textContent = '';
            emailError.textContent = '';
            commentError.textContent = '';
            
            if (nameInput.value.trim() === '') {
                nameError.textContent = 'Name is required.';
                event.preventDefault(); // Prevent form submission
            }
            
            if (emailInput.value.trim() === '') {
                emailError.textContent = 'Email is required.';
                event.preventDefault(); // Prevent form submission
            }
            if (commentInput.value.trim() === '') {
                commentError.textContent = 'Comment is required.';
                event.preventDefault(); // Prevent form submission
            }
        });
    }
});

// Function to fetch and display random advice
function getAdvice() {
    // Update text to show loading state
    const adviceText = document.getElementById("adviceText");
    adviceText.innerText = "Loading advice...";
    
    // Fetch advice from the API
    fetch('https://api.adviceslip.com/advice')
        .then(response => {
            // Check if the request was successful
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Extract the advice from the response
            const advice = data.slip.advice;
            
            // Display the advice on the page
            adviceText.innerText = advice;
        })
        .catch(error => {
            // Handle any errors
            console.error('Error fetching advice:', error);
            adviceText.innerText = "Oops! Couldn't fetch advice. Please try again later.";
        });
}

// function showList() {
//     document.getElementById("funList").style.display = "block";
//     document.getElementById("showListBtn").style.display = "none";
// }

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

function findTheBanana(array, arrayName) {
    array.forEach(function(fruit) {
      if (fruit === "Banana") {
        alert("found banana in " + arrayName + "!");
      }
    });
}

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
    
    if (E) {
        E.innerHTML = greeting + E.innerHTML;
    } else {
        console.log(greeting);
    }
}

function addYear() {
    let currentYear = new Date().getFullYear();
    const yearElement = document.getElementById("copyYear");
    if (yearElement) {
        yearElement.textContent = `© ${currentYear}`;
    }
}

$(document).ready(function() {
    $("#readMoreBtn").click(function() {
        $("#extendedBio").slideDown();
        $("#readMoreBtn").hide();
        $("#readLessBtn").show();
    });
    
    $("#readLessBtn").click(function() {
        $("#extendedBio").slideUp();
        $("#readLessBtn").hide();
        $("#readMoreBtn").show();
    });
});