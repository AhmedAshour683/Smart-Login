var emailIn = document.getElementById("emailin")
var emailUp = document.getElementById("emailup")
var passIn = document.getElementById("passin")
var passUp = document.getElementById("passup")
var thename = document.getElementById("name")
var signIn = document.getElementById("signin")
var signUp = document.getElementById("signup")
var signupBox =document.querySelector(".signup")
var signinBox =document.querySelector(".login")
var signupButton = document.querySelector("#signupButton")
var signinButton = document.querySelector("#signinButton")
var home = document.querySelector("#home")

signUp.addEventListener("click",function(){

    signupBox.classList.remove("d-none")
    signinBox.classList.add("d-none")

})

function signNow(){
    signupBox.classList.add("d-none")
    signinBox.classList.remove("d-none")
}
signIn.addEventListener("click",signNow)

if(localStorage.getItem("userData")==null){
    var container =[]
}

else{
    var container = [JSON.parse(localStorage.getItem("userData"))]
}

signupButton.addEventListener("click",function(){
    if(validateData() && validatemail()){
var userData = {
    userName : thename.value,
    userEmail : emailUp.value,
    userPass : passUp.value
}


container.push(userData)
    
    localStorage.setItem("userData",JSON.stringify(container))
    swal("Done", "Now you Can Sign in", "success");
    // signNow()

clear()
    }
})

signinButton.addEventListener("click",function(){
    var signinData={
        email:emailIn.value,
        pass:passIn.value
    }

    var check =  JSON.parse(localStorage.getItem("userData"))

    for( var i =0;i<check.length;i++){
        
        if(check[i].userEmail==signinData.email && check[i].userPass==signinData.pass){

            signinBox.classList.add("d-none")
            home.classList.remove("d-none")
            home.innerHTML=`<header class="d-flex justify-content-between">
            <h1 class="text-white fw-light">smart login</h1>
            <button onclick="logOut()" class="btn btn-outline-warning mt-2" id="logout">Logout</button>
        </header>
        
        <div class="welcome w-50 text-center m-auto">
            <h1 class="text-primary p-5 shadow-lg border border-2 border-primary">Welcome ${check[i].userName}</h1>
        </div>`
        }
    }

    if(home.classList.contains("d-none")){
        swal("Wrong Email,Password or You Can SignUP!");
    }


   clear()

})

function logOut (){
    signinBox.classList.remove("d-none")
    home.classList.add("d-none")
}



function clear(){
    thename.value=""
    emailUp.value=""
    passUp.value=""
    emailIn.value=""
    passIn.value=""
}



function validateData(){
    var regex = /.+/;
    if(regex.test(thename.value && emailUp.value && passUp.value)){

        return true
    }

    else{
        swal("Please Fill All Data");
        return false
    }

}


function validatemail(){
    var regex = /(@).+(.com)/;
    if(regex.test(emailUp.value)){

        return true
    }

    else{
        swal("Please Enter Right Email");
        return false
    }

}


