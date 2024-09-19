// Common Shared Function Here ! 


// Function to get the value from the input field
// function getInputFieldValueById() {
//     const MoneyAmount = parseFloat(document.getElementById("add-money-amount").value);
//     if (isNaN(MoneyAmount)) {
//         console.error("Invalid money amount entered.");
//         return "Invalid money amount entered.";
//     }
//     return MoneyAmount;
// }


// Function to get the value from the "PIN" input field
function getInputFieldValueById(id) {
    const inputNumber = parseFloat(document.getElementById(id).value);
   
    
    return inputNumber;
}

// Function to get the value from the "BALANCE" input field
function getBalanceInputFieldValueById(id) {
    const inputBalance = parseFloat(document.getElementById(id).innerText);
    
    
    return inputBalance;
}
