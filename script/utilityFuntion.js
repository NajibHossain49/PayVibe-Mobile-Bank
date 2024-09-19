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

function getInputFieldValueById(id) {
    const inputValue = parseFloat(document.getElementById(id).value);
    
    return inputValue;
}
