// submit button
var submit = document.querySelector("#submit");

// index count
var num = 1

// onclick function
submit.addEventListener(("click"), function (event) {
    event.preventDefault();
    // first name
    var fname = document.getElementById("first-name").value;
    // last name
    var lname = document.getElementById("last-name").value;
    // gender
    var gender = document.querySelector('input[name="gender"]:checked').value;
    // food choise
    var foodChoise = [];
    var Kashmiri = document.getElementById("Check1");
    if (Kashmiri.checked) { foodChoise.push(Kashmiri.value) }
    var Punjabi = document.getElementById("Check2");
    if (Punjabi.checked) { foodChoise.push(Punjabi.value) }
    var Rajasthani = document.getElementById("Check3");
    if (Rajasthani.checked) { foodChoise.push(Rajasthani.value) }
    var Tamilian = document.getElementById("Check4");
    if (Tamilian.checked) { foodChoise.push(Tamilian.value) }
    var Kerala = document.getElementById("Check5");
    if (Kerala.checked) { foodChoise.push(Kerala.value) }
    // address
    var address = document.getElementById("address").value;
    // state
    var state = document.getElementById("state").value;
    // country
    var country = document.getElementById("country").value;
    // pincode
    var pincode = document.getElementById("pincode").value;

    // table
    var table = document.querySelector("#table-body");
    var newRow = table.insertRow(table.length);

    cell1 = newRow.insertCell(0);
    cell1.innerHTML = num++;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = fname;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = lname;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = gender;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = foodChoise;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = address;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = state;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = country;
    cell9 = newRow.insertCell(8);
    cell9.innerHTML = pincode;

    // auto reset
    document.getElementById("form").reset()
});
