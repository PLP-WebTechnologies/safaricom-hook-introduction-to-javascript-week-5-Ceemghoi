// Part 1: JavaScript Basics
// 1. Variables and Data Types
const name = "John Doe";
const age = 25;
const isStudent = true;
const hobbies = ["reading", "coding", "gaming"];
const person = {
    firstName: "John",
    lastName: "Doe",
    occupation: "Developer"
};

// Log variables and their types
console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is student: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Hobbies: ${hobbies} (Type: ${typeof hobbies})`);
console.log(`Person: `, person, `(Type: ${typeof person})`);

// 2. Calculator Function
function calculate() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
    const operation = prompt("Choose an operation (+, -, *, /):");

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers!");
        return;
    }

    let result;
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert("Cannot divide by zero!");
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert("Invalid operation!");
            return;
    }

    alert(`Result: ${result}`);
}

// 3. Greeting Function
function greetUser(name) {
    const greeting = `Hello, ${name}! Welcome to our website.`;
    document.getElementById('greeting-output').textContent = greeting;
    return greeting;
}

// Part 2: Control Structures
// 1. Check Voting Eligibility
function checkVotingEligibility() {
    const userAge = parseInt(prompt("Please enter your age:"));
    const votingResult = document.getElementById('voting-result');
    
    if (isNaN(userAge)) {
        votingResult.textContent = "Please enter a valid age!";
    } else if (userAge >= 18) {
        votingResult.textContent = "You are eligible to vote!";
    } else {
        votingResult.textContent = "Sorry, you are not eligible to vote yet.";
    }
}

// 2. Display Numbers using Loop
function displayNumbers() {
    const numberList = document.getElementById('number-list');
    for (let i = 1; i <= 10; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = i;
        numberList.appendChild(listItem);
    }
}

// Part 3: DOM Manipulation
function modifyDOM() {
    // Change heading text
    const heading = document.querySelector('h1');
    heading.textContent = "JavaScript Assignment";

    // Add new paragraph
    const dynamicContent = document.getElementById('dynamic-content');
    const newParagraph = document.createElement('p');
    newParagraph.textContent = "This content was added dynamically using JavaScript.";
    dynamicContent.appendChild(newParagraph);
}

// Initialize everything when the page loads
window.onload = function() {
    // Run calculator
    calculate();
    
    // Demonstrate greeting function
    greetUser("John");
    
    // Check voting eligibility
    checkVotingEligibility();
    
    // Display numbers
    displayNumbers();
    
    // Modify DOM
    modifyDOM();
};