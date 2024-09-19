// document.getElementById("add-money").addEventListener("click", function (event) {
//     event.preventDefault(); // Prevents the page from reloading

//     // Hardcoded PIN for validation
//     const hardcodedPinNumber = "1234";

//     // Get the value of the Money Amount and convert it to a float
//     const MoneyAmount = parseFloat(document.getElementById("add-money-amount").value);

//     // Get the value of the PIN Number 
//     const pinNumber = document.getElementById("pinNumber").value;

//     // Check if the entered PIN is correct
//     if (pinNumber === hardcodedPinNumber) {

//         // Get the current balance and add the money amount to it
//         let currentBalance = parseFloat(document.getElementById("balance").innerText);

//         currentBalance = currentBalance + MoneyAmount;


//         // Update the balance
//         document.getElementById("balance").innerText = currentBalance;

//         alert("Money added successfully! New balance: " + currentBalance);

//     }

//     else {
//         alert("Invalid PIN. Please try again.");
//     }
// });



// Add click event listener to the button with id 'add-money'
document.getElementById("add-money").addEventListener("click", function (event) {
    event.preventDefault(); // Prevents the default action 

    // Call the function to get the money amount and store the result
    const MoneyAmount = getInputFieldValueById("add-money-amount");

    const pinNumber = getInputFieldValueById("pinNumber");
    

    // Log the value to the console (you can use it elsewhere in your code as well)
    console.log(MoneyAmount , pinNumber);
});