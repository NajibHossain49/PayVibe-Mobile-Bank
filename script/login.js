/*
When a form is submitted, the default behavior of the browser is to reload the page. 
To prevent this, We can use JavaScript to intercept the form submission and prevent the default action.
This is typically done by calling event.preventDefault() inside an event listener for the form's submit event.

*/

/*

* Prevent default form submission behavior
prevent the page from reloading on a button click,
We need to pass the event parameter to the function. 

*/

document.getElementById("login-button").addEventListener("click", function (event) {
    event.preventDefault(); // Prevents the page from reloading

    // Hardcoded phone number and PIN for validation
    const hardcodedPhoneNumber = "1234";
    const hardcodedPinNumber = "1234";

    // Get the value of the phone number
    const phoneNumber = document.getElementById("phone-number").value;

    // Get the value of the PIN number
    const pinNumber = document.getElementById("pin-number").value;

    // Check if phone number or PIN is empty
    if (!phoneNumber || !pinNumber) {
        alert("Please enter phone number and PIN.");
    } else {
        // Check if entered values match the hardcoded ones
        if (phoneNumber === hardcodedPhoneNumber && pinNumber === hardcodedPinNumber) {
            // alert("Phone Number and PIN are correct!");
            window.location.href = "HomePage.html"; // Redirect to HomePage.html
        } else {
            alert("Invalid phone number or PIN. Please try again.");
        }
    }
});

