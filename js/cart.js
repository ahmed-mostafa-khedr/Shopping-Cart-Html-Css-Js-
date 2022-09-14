let links=document.querySelector("#links");
let userInfo=document.querySelector("#user-info");
let user=document.querySelector("#user");
let logout =document.querySelector("#logout");

let productsDom=document.querySelector(".products");

/*ـــــــــــــــــــــــــــــــــــchick if user loginــــــــــــــــــــ */

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
        window.location="login.html"
        
    },1500)
})


/*ــــــــــــــــــــadd product to local and transfer it to object in pageـــــــــــــــــــــــــ */
let noProductText=document.querySelector(".no-product");





function viewProducts(product = []){
    if( JSON.parse(localStorage.getItem("productInCart")).length === 0){
        noProductText.innerHTML = ""
        noProductText.style.display="block"
    }
    let allProducts= JSON.parse(localStorage.getItem("productInCart")) || product ;
   
    let prod = allProducts.map( (item)=>{
        return `
        
        <div class="product-item">
    <img src="${item.imageUrl}" alt="laptop">
    
<div class="product-item-desc">
    <h2>${item.title}</h2>
    <p>${item.about}</p>
    <span>price:&nbsp; ${item.price}<sup>EGP</sup></span><br>
    <p>Quantity:&nbsp; ${item.q}</p>
</div>
<div class="product-item-actions">
<div>
<button class="remove-from-cart"  onclick="RemoveFromCart(${item.id})"> Remove From Cart </button>

</div>

</div>
</div> ` 
    });
    productsDom.innerHTML=prod;

}

viewProducts()








function RemoveFromCart(id) {
    let productsCart=localStorage.getItem("productInCart");
    if(productsCart){
        let items=JSON.parse(productsCart);
        let filteredItems= items.filter((item) => item.id !== id);
        localStorage.setItem("productInCart" ,JSON.stringify(filteredItems))
        viewProducts(filteredItems)

    }
//     xx.addEventListener("click", () => {
//         confirm("yeo will remove this product from your cart")
//         localStorage.removeItem("productInCart")
//      });
}