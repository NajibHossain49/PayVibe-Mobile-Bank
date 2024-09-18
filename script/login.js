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

    // Get the value of the phone number
    const phoneNumber = document.getElementById("phone-number").value;

    // Use the phone number as needed
    console.log("Phone Number: ", phoneNumber);
});
