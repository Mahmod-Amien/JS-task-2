function validate(){
    var user = document.getElementById('user').value;
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;
    var confirm = document.getElementById('confirm').value;
    var result = document.getElementById('result');

result.setAttribute("class","alert alert-danger text-center p-2");
result.style.transition="all 1s linear";


if (user =="" && email=="" && pass=="" && confirm==""){
    result.innerHTML = "Enter Required Data";
    return false;
}else if (user.Length <5|| user.length>15){
    result.innerHTML = "Enter 5-15 character in username";
    return false;
}else if (email.indexOf("@") ==-1){
 result.innerHTML = "Enter valid Email!";   
 return false;
}else if (pass.length <=8){
    result.innerHTML = "Enter at least 8 character";
    return false;
}else if (confirm != pass){
    result.innerHTML = "Match passward please";
    return false;
}
}