var attempt = 3; // Variable to count number of attempts.

// Below function Executes on click of login button.
function validate(){
    var email= document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if ( email == "ooprog@gmail.com" && password == "123"){
        alert ("Login successfully");
        window.location = "/main"; // Redirecting to other page.
        return false;
    }
    else{
        attempt --;// Decrementing by one.
        alert("You have left "+attempt+" attempt!");
// Disabling fields after 3 attempts.
        if( attempt == 0){
            document.getElementById("email").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("login").disabled = true;
            return false;
        }
    }
}