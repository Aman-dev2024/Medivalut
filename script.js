//signup-form
function Signup(){
    const name = document.getElementById("name").value.trim();
    const emailOrPhonenumber = document.getElementById("emailOrPhonenumber").value.trim();
    const pass = document.getElementById("password").value;
    const confPassword = document.getElementById("confirmPassword").value;
    const checkbox = document.querySelector("input[type='checkbox']");

    if(!name || !emailOrPhonenumber || !pass || !confPassword || !checkbox){
        alert("Please enter the full details");
        return
    }
    if(name===""){
        alert("Please enter your full name");
        document.getElementById("name").focus();
        return
    }
    if(!emailOrPhonenumber.includes("@gmail.com") || !emailOrPhonenumber.length==10){
        alert("Please enter valid email address or phone number");
        document.getElementById("emailOrPhonenumber").focus();
        return
    }
    if(confPassword!==pass){
        alert("Confirm password do not match");
        document.getElementById("confirmPassword");
        return
    }
    if(!checkbox.checked){
        alert("Please agree to the Terma and Conditions")
        checkbox.focus();
        return 
    }

    alert("Login in successfully");
    window.location.href="user-interface.html";
}

