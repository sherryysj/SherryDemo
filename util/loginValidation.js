// move password in database later
function validateLogin(){

    let password = document.forms["login"]["passwordInput"].value;
    if (password == "SherryYang"){
      return true;
    } else if (password == ""){
      alert("Password must be filled out");
      return false;
    } else {
      alert("Password is not right");
      return false;
    }

}