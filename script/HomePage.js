document.getElementById("add-money").addEventListener("click", function (event) {
    event.preventDefault(); // Prevents the page from reloading

    // Hardcoded PIN for validation
    const hardcodedPinNumber = "1234";

    // Get the value of the Money Amount and convert it to a float
    const MoneyAmount = parseFloat(document.getElementById("add-money-amount").value);

    // Get the value of the PIN Number 
    const pinNumber = document.getElementById("pinNumber").value;

    // Check if the entered PIN is correct
    if (pinNumber === hardcodedPinNumber) {

        // Get the current balance and add the money amount to it
        let currentBalance = parseFloat(document.getElementById("balance").innerText);

        currentBalance = currentBalance + MoneyAmount;
        console.log(currentBalance)


        // Update the balance
        document.getElementById("balance").innerText = currentBalance;

        alert("Money added successfully! New balance: " + currentBalance);
    }

    else {
        alert("Invalid PIN. Please try again.");
    }
});
