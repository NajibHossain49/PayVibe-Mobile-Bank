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

    // Get the current balance and add the money amount to it
    let currentBalance = getBalanceInputFieldValueById("balance");

    // Hardcoded PIN for validation
    const hardcodedPinNumber = 1234;


    if(isNaN(MoneyAmount)){
        alert("Amount must be a valid digit.");

        return;
    }


    // Check if the entered PIN is correct
    if (pinNumber === hardcodedPinNumber) {

        currentBalance = currentBalance + MoneyAmount;
        // Update the balance

        document.getElementById("balance").innerText = currentBalance;

        // Add to Transaction-History

        const p = document.createElement('p');
        p.textContent = `Added ${MoneyAmount} Tk. to balance. Current Balance ${currentBalance}`

        // Should be a Common Function
        document.getElementById("Transaction-Container").appendChild(p);

        alert("Money added successfully! New balance: " + currentBalance);
    }

    else {
        alert("Invalid PIN. Please try again.");
    }

});