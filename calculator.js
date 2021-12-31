//show error msg
var fNumError = document.getElementById('fNumError');
var sNumError = document.getElementById('sNumError');
var opError = document.getElementById('opError');
var formReset = document.getElementById('formReset');
var result = document.getElementById('result');
var finalOp;


fNumError.style.display = sNumError.style.display = opError.style.display = 'none';

//   sNumError.style.display="none";
//   opError.style.display='none';


//get from user input
function Calculate() {
    var num1 = document.getElementById('fNumber').value;
    var num2 = document.getElementById('sNumber').value;
    var operator = document.getElementById('operator').value;
    var status = true;
    // console.log(num1);
    // console.log(num2);
    // console.log(operator);

    if (num1 == "" || num1 == "null") {
        fNumError.style.display = "block";
        status = false;

    } else {
        fNumError.style.display = 'none';
        status = true;
    }
    if (num2 == "" || num2 == "null") {
        sNumError.style.display = "block";
        status = false;

    } else {
        sNumError.style.display = 'none';
        status = true;
    }
    if (operator == "empty") {
        opError.style.display = "block";
        status = false;

    } else {
        opError.style.display = 'none';
        status = true;
    }



    if (status == true) {
        switch (operator) {
            case "add": finalOp = parseInt(num1) + parseInt(num2); break;
            case "subtract": finalOp = parseInt(num1) - parseInt(num2); break;
            case "multiply": finalOp = parseInt(num1) * parseInt(num2); break;
            case "division": finalOp = parseInt(num1) / parseInt(num2); break;
        }
        result.innerHTML = finalOp;

    }

}
function Clear() {
    formReset.reset();

    result.innerHTML = "Result";


}