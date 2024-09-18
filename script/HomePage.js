document.getElementById("add-money").addEventListener("click", function (event) {
    event.preventDefault(); // Prevents the page from reloading

    // Get the value of the Money Amount 
    const MoneyAmount = document.getElementById("add-money-amount").value;

    // Get the value of the PIN Number 
    const pinNumber = document.getElementById("pinNumber").value;

    // Use the PIN number as needed
    console.log("PIN Number: ", MoneyAmount);
    console.log("PIN Number: ", pinNumber);
});
