// validate form

const validateForm = ()=>{
    const pw = document.getElementById("password").value;  
    const pw2 = document.getElementById("password2").value;  
    const email = document.getElementById("email").value;
    //check are these passwords the same 
    if(pw != pw2) {  
       document.getElementById("message1").innerHTML = "* Passwords doesn't match!";  
       return false;  
    }  
    // ... validate for another pasword reqs, like size, included symbols etc...
    //check if email is proper
    if (
        !email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    ) {
        document.getElementById("message").innerHTML = "* Invalid email address";  
        return false; 
      }
}