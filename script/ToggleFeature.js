// Add event listener to the Cash Out button
document.getElementById("ToggleCashOut").addEventListener("click", function () {


    // Get the Cash Out section element and Show Cash Out section  
    const cashOutSection = document.getElementById("cashOutSection").classList.remove('hidden');

    // Get the Add Money section element and REMOVE Add Money section
    const addMoneySection = document.getElementById("addMoneySection").classList.add('hidden');

});

// Add event listener to the Add Money button
document.getElementById("ToggleAddMoney").addEventListener("click", function () {


    // Get the Cash Out section element and Show Cash Out section  
    const cashOutSection = document.getElementById("cashOutSection").classList.add('hidden');

    // Get the Add Money section element and REMOVE Add Money section
    const addMoneySection = document.getElementById("addMoneySection").classList.remove('hidden');

});
