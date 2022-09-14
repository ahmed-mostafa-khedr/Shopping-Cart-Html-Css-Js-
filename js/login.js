// login user
let username=document.querySelector("#username");
let password=document.querySelector("#password");
let signinBtn=document.querySelector("#sign-in");

let userLocal=localStorage.getItem("username");
let passwordLocal=localStorage.getItem("password");

signinBtn.addEventListener("click" , (e)=>{
    e.preventDefault();
    if(username.value == "" ||  password.value == ""){
        alert("please fill data")
    }else{
        
        
        if(userLocal && userLocal.trim()=== username.value  && passwordLocal && passwordLocal.trim() === password.value){
        setTimeout(()=>{
            window.location='index.html';
        },1500)
        }else{
        alert("wrong username or password")}
        }
});
