

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












let userName=localStorage.getItem("username")
let email=localStorage.getItem("email")
let cart=JSON.parse(localStorage.getItem("productInCart"))
let fav=JSON.parse(localStorage.getItem("productInFav"))


let Profile=document.querySelector(".my-profile")

let usern=document.getElementById("username")
let e=document.getElementById("email")
let productInCart=document.getElementById("productsincart")
let favP=document.getElementById("favorite")

Profile.innerHTML=`${userName} Profile`

usern.innerHTML= `User Name &nbsp&nbsp&nbsp <span class="user-n">${userName}</span>`
e.innerHTML= `Email &nbsp&nbsp&nbsp <span class="user-n">${email}</span>`
productInCart.innerHTML=`Have<span class="number"> ${cart.length}</span> <a class="links" href="cartproducts.html"> Products in Cart </a>`
favP.innerHTML=`Have <span class="number"> ${fav.length}</span><a class="links" href="favorite.html">FavoriteProducts</a> `



