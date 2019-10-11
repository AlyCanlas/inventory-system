var attempt1 = 3;
var attempt2 = 3;
var attempt3 = 3;
var attempt4 = 3; // Variable to count number of attempts
var num = 9999999 ;
// Below function Executes on click of login button.
function validateName(){
    var name = document.getElementById("name").value;

    if ( name == "Monitor" || name == "Keyboard" || name == "Mouse" || name == "Headset" || name == "Laptop" || name == "CPU" ) {
        document.getElementById("name").required;
        return false;
    }
    else{
        attempt1 --;// Decrementing by one.
        alert("Enter valid input! Please follow the format. You have left "+attempt1+" attempt!");
        // Disabling fields after 3 attempts.
        if( attempt1 == 0){
            document.getElementById("name").disabled = true;
            return false;
        }
        else if( attempt1 == 3) {
            document.getElementById("name")
        }
    }
}

function validateBrand() {
    var brand = document.getElementById("brand").value;

    if ( brand == "Apple" || brand == "Samsung" || brand == "Acer" || brand == "Asus" || brand == "HP" ) {
        document.getElementById("brand").required;
        return false;
    }
    else{
        attempt2 --;// Decrementing by one.
        alert("Enter valid input! Please follow the format. You have left "+attempt2+" attempt!");
        // Disabling fields after 3 attempts.
        if( attempt2 == 0){
            document.getElementById("brand").disabled = true;
            return false;
        }
    }
}

function validateAsset() {
    var assetCode = document.getElementById("assetCode").value;

    if ( assetCode == "MN0123456" || assetCode == "MN0123457" || assetCode == "MN0123458" || assetCode == "MN0123459" || assetCode == "MN0123460" || assetCode == "KB0123456" || assetCode == "KB0123457" || assetCode == "KB0123458" || assetCode == "KB0123459" || assetCode == "KB0123460" || assetCode == "MS0123456" || assetCode == "MS0123457" || assetCode == "MS0123458" || assetCode == "MS0123459" || assetCode == "MS0123460" || assetCode == "HT0123456" || assetCode == "HT0123457" || assetCode == "HT0123458" || assetCode == "HT0123459" || assetCode == "HT0123460" || assetCode == "LP0123456" || assetCode == "LP0123457" || assetCode == "LP0123458" || assetCode == "LP0123459" || assetCode == "LP0123460" || assetCode == "CP0123456" || assetCode == "CP0123457" || assetCode == "CP0123458" || assetCode == "CP0123459" || assetCode == "CP0123460" ) {
        document.getElementById("assetCode").required;
        return false;
    }
    else{
        attempt3 --;// Decrementing by one.
        alert("Enter valid input! Please follow the format. You have left "+attempt3+" attempt!");
        // Disabling fields after 3 attempts.
        if( attempt3 == 0){
            document.getElementById("assetCode").disabled = true;
            return false;
        }
    }
}

function validateAaf() {
    var aafNumber = document.getElementById("aafNumber").value;

    if ( aafNumber < num  && aafNumber != 0) {
        document.getElementById("aafNumber").required;
        return false;
    }
    else{
        attempt4 --;// Decrementing by one.
        alert("Enter valid input! Please follow the format. You have left "+attempt4+" attempt!");
        // Disabling fields after 3 attempts.
        if( attempt4 == 0){
            document.getElementById("aafNumber").disabled = true;
            return false;
        }
    }
}