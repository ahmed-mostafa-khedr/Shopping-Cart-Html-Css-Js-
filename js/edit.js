

let products =document.querySelector(".products");
let links=document.querySelector("#links");
let userInfo=document.querySelector("#user-info");
let user=document.querySelector("#user");
let logout =document.querySelector("#logout");

if(localStorage.getItem("username")){
    links.remove();
    userInfo.style.display="flex";
    user.innerHTML = "welcome <br>" + localStorage.getItem("username");

}
logout.addEventListener("click" , (e)=>{
    e.preventDefault();
    setTimeout(()=>{
        localStorage.removeItem("username");
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        localStorage.removeItem("productInCart");
        window.location="login.html"
        
    },1500)
});











//local
let userName=localStorage.getItem("username")
let email=localStorage.getItem("email")
let cart=JSON.parse(localStorage.getItem("productInCart"))
let fav=JSON.parse(localStorage.getItem("productInFav"))



let un=document.getElementById("un")
let pw=document.getElementById("pw")
let pww=document.getElementById("pww")
let em=document.getElementById("em")
let submit=document.getElementById("submit")





submit.addEventListener("click" ,()=>{
   

    
    localStorage.setItem("username",un.value)
    
    if(pw.value !== pww.value){
        alert("password not matched")
    }else{
        localStorage.setItem("password",pw.value)
    localStorage.setItem("password",pww.value)
    }
    localStorage.setItem("email",em.value)
})



