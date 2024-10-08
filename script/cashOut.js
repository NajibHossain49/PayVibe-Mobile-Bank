// document.getElementById("cash-out-button").addEventListener("click", function (event) {
//     event.preventDefault(); // Prevents the page from reloading

//     // Hardcoded PIN for validation
//     const hardcodedPinNumber = "1234";

//     // Get the value of the Cash Out Amount and convert it to a float
//     const cashOutAmount = parseFloat(document.getElementById("cash-out-amount").value);

//     // Get the value of the PIN Number
//     const pinNumber = document.getElementById("cash-out-pin").value;

//     // Check if the entered PIN is correct
//     if (pinNumber === hardcodedPinNumber) {
//         // Get the current balance and convert it to a float
//         let currentBalance = parseFloat(document.getElementById("balance").innerText);

//         // Check if the cash out amount is less than or equal to the current balance
//         if (cashOutAmount <= currentBalance) {
//             // Subtract the cash out amount from the current balance
//             currentBalance = currentBalance - cashOutAmount;

//             // Update the balance display
//             document.getElementById("balance").innerText = currentBalance;

//             alert("Cash out successful ! New balance: " + currentBalance);
//         }
//         else {
//             alert("Insufficient balance. Please try a smaller amount.");
//         }
//     } else {
//         alert("Invalid PIN. Please try again.");
//     }
// });


document.getElementById("cash-out-button").addEventListener("click", function (event) {
    event.preventDefault(); // Prevents the page from reloading


    // Call the function to get the money amount and store the result
    const cashOutAmount = getInputFieldValueById("cash-out-amount");

    const pinNumber = getInputFieldValueById("cash-out-pin");

    // Get the current balance and add the money amount to it
    let currentBalance = getBalanceInputFieldValueById("balance");

    // Hardcoded PIN for validation
    const hardcodedPinNumber = 1234;


    if(isNaN(cashOutAmount)){
        alert("Cash out amount must be a valid digit.");

        return;
    }

  



    // Check if the entered PIN is correct
    if (pinNumber === hardcodedPinNumber) {



        // Check if the cash out amount is less than or equal to the current balance
        if (cashOutAmount <= currentBalance) {
            // Subtract the cash out amount from the current balance
            currentBalance = currentBalance - cashOutAmount;

            // Update the balance display
            document.getElementById("balance").innerText = currentBalance;

            const p = document.createElement('p');
            p.textContent = `Cash Out ${cashOutAmount} Tk. Current Balance ${currentBalance}`

            // Should be a Common Function
            document.getElementById("Transaction-Container").appendChild(p);

            alert("Cash out successful ! New balance: " + currentBalance);
        }
        else {
            alert("Insufficient balance. Please try a smaller amount.");
        }
    } else {
        alert("Invalid PIN. Please try again.");
    }

});
