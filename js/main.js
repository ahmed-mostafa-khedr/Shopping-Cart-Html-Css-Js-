
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

/*ــــــــــــــــproductsـــــــــــــــ*/

let productsArray=[
    {
        id:1,
        title:"laptop",
        about:'HP 15-dw3033dx Laptop - 11th Intel core i3-1115G4, 8GB RAM, 256GB SSD, Intel UHD Graphics, 15.6" FHD (1920 x 1080) IPS micro-edge anti-glare 250 nits, FingerPrint, Windows 10, Natural Silver.',
        price:25000,
        imageUrl:"images/p1.png",
        q:1,
    },
    {
        id:2,
        title:"Fujifilm X-T30 Mirrorless Digital Camera With 18-55mm Lens",
        about:"26.1MP APS-C X-Trans BSI CMOS 4 Sensor X-Processor 4 with Quad CPU DCI and UHD 4K30 Video; F-Log Gamma 2.36m-Dot OLED Electronic Viewfinder Camera Lens and accessories.",
        price:27999,
        imageUrl:"images/p2.png",
        q:1,
    },  
    {
        id:3,
        title:"Electric Lighter",
        about:"Smart Electronic Lighter, Mini USB Rechargeable Lighter Touch Ignition Windproof Flameless Lighter Lightweight Plasma Lighter with Power Indicator for Boyfriends Father Gifts (Red).",
        price:225,
        imageUrl:"images/p3.png",
        q:1,
    },  
    {
        id:4,
        title:"lather band watch",
        about:"Brand: Tommy HilfigerWatch Shape: RoundBand Material: LeatherDisplay Type: AnalogTargeted Group: MenType: Casual WatchModel Number: 1791275Dial Color: BlueWater resistant depth: 50 MDial window material type: Mineral.",
        price:1670,
        imageUrl:"images/p4.png",
        q:1,
    }, 
    {
        id:5,
        title:"Samsung Galaxy A13 LTE",
        about:"Android Smartphone, 128GB, 4GB RAM, Dual Sim, Light Blue.",
        price:6450,
        imageUrl:"images/p5.png",
        q:1,
    },
    
];




function viewProducts(productsArray = []){
    let prod = productsArray.map( (product)=>{
        return `
        
        <div class="product-item">
    <img src="${product.imageUrl}" href="cartDetails.html" alt="laptop">
    
<div class="product-item-desc">
    <h2><a onclick="saveItemData(${product.id})" class="info">${product.title}</a></h2>
    <p>${product.about}</p>
    <span>price:&nbsp; ${product.price}<sup>EGP</span>
</div>
<div class="product-item-actions">
<div>
<button class="add-to-cart"  onclick="add(${product.id})"> Add To Cart </button>
<i class="fa-solid fa-cart-arrow-down a"></i>
</div>
<div>
<button class="add-to-fav" onclick="addToFavorite(${product.id})">Add To favorite</button>
<i  class=" ${product.liked == true ? 'fa-solid fa-star' : 'fa-regular fa-star'}" id="star" onclick="addToFavorite(${product.id})" ></i>
</div>
</div>
</div> ` 
    });
    products.innerHTML=prod;

}
localStorage.setItem("productsInLocal",JSON.stringify(productsArray));

let productsInLocal =productsArray;

viewProducts( JSON.parse(localStorage.getItem("productsInLocal")) || productsArray);
/*ـــــــcheck logged in userـــــــــــ */

let itemAdded=document.querySelector(".item-name");

let menu=document.querySelectorAll(".item-name span");
let Added=document.querySelector(".added");
let addToCartBtn=document.querySelectorAll(".add-to-cart")
let badge=document.querySelector(".badge")
let sh=document.querySelector(".shopping-cart")


//added item of menu to local
let arrOfLocal=JSON.parse(localStorage.getItem("productInCart"))?JSON.parse(localStorage.getItem("productInCart")):[];

//check if menu has products view it 
if (arrOfLocal ){
    arrOfLocal.map(item =>{
        Added.innerHTML+=`<ol><li><p> <span class="p">${item.q}</span> ${item.title}</p></li></ol>`
        });
        
        badge.style.display="block"
        badge.innerHTML=`+${arrOfLocal.length}`
        if(badge.style.display == "block"){
            sh.addEventListener("click" ,function(){
                if(itemAdded.style.display == "block"){
                    itemAdded.style.display="none"
                    document.querySelector(".filter").style.display = "block"
                }
                else{
                    itemAdded.style.display = "block"
                    document.querySelector(".filter").style.display = "none"
                }
            });
        }
        
}    





function add(id){
    
    if(localStorage.getItem("username")){
    viewMenu();
   
    let chossenP=productsArray.find((product) => product.id === id);
    let itemsInCart =arrOfLocal.some((item) => item.id === chossenP.id)
    if(itemsInCart){
        arrOfLocal = arrOfLocal.map(i =>{
            if(i.id === chossenP.id){ i.q+=1 }
            return i;
        })
    }else{
        arrOfLocal.push(chossenP)
    }
    Added.innerHTML=""
    arrOfLocal.forEach(item => {
        
        Added.innerHTML+=`<ol><li><p> <span class="p">${item.q}</span> ${item.title}</p></li></ol>`
        
    })

    
    //arrOfLocal=[...arrOfLocal , chossenP]

    //let uniqueP = getUniqueItem(arrOfLocal , "id");
    localStorage.setItem("productInCart" , JSON.stringify(arrOfLocal))
    
    let cartProductsLength=document.querySelectorAll(".item-name p")
    
    badge.style.display="block"
    
    badge.innerHTML=`+${cartProductsLength.length}`
    
    }else{
        alert("you should login")
        window.location="login.html"
    }
}
function getUniqueItem(arr , id){
    let unique=arr
    .map((item) => item[id])
    .map((item ,i ,final) => final.indexOf(item) === i && i)
    .filter((item) => arr[item])
    .map((item) => arr[item])
    return unique
}



function viewMenu(){
    if(badge.style.display != "block"){
    sh.addEventListener("click" ,function(){
        if(itemAdded.style.display == "block"){
            itemAdded.style.display="none"
        }
        else{
            itemAdded.style.display = "block"}
    });
}
}

/*ـــــــــــــــــــــــــredirect to info page ــــــــــــــــــ*/

function saveItemData(id){
    localStorage.setItem("productId" , id);
    window.location="cartDetails.html"
}
/*ـــــــــــــــــــــــــــــــــــــ */


/*ـــــــــــــــــSearch Barـــــــــــــــــــــــــــ */

let serchBar=document.querySelector(".search-bar");
serchBar.addEventListener("keyup" , (e) =>{
    
        
        e.target.value = e.target.value.toLowerCase()
        search(e.target.value , JSON.parse(localStorage.getItem("productsInLocal")))
        
    
    if(e.target.value === ""){
        viewProducts( productsInLocal);
    }
})

function search(title,myArray){
    for(let i=0 ; i < title.length ;i++){
    let arr=myArray.filter((item) => item.title[i] === title[i]);
    viewProducts(arr)
}}

















/*ـــــــــــــــadd to F */

let arrFavOfLocal=JSON.parse(localStorage.getItem("productInFav"))?JSON.parse(localStorage.getItem("productInFav")):[];

function addToFavorite(id){
    if(localStorage.getItem("username")){
   
    let chossenP=productsArray.find((product) => product.id === id);
    let productIsFav=arrFavOfLocal.some((item) => item.id === id);
    if(productIsFav){
        arrFavOfLocal=arrFavOfLocal.map(i =>{
            if(i.id === id)chossenP.liked= true;
            return i;
        });
    }
    else{arrFavOfLocal.push(chossenP);

    }
    arrFavOfLocal.liked=""
    localStorage.setItem("productInFav" , JSON.stringify(arrFavOfLocal))
    


    
    productsArray.map((item) => {
        if(item.id === chossenP.id){chossenP.liked =true}});
        
    localStorage.setItem("productsInLocal",JSON.stringify(productsArray))
    viewProducts(productsArray || JSON.parse(arrFavOfLocal))
}else{
        alert("you should login")
        window.location="login.html"
    }
}





/*ــــــــــــــــــــــFilter Productsــــــــــــــــــــــــ */
let priceFilter = document.getElementById("price-filter") ;

priceFilter.addEventListener("change" , (f)=>{
    let productsF=JSON.parse(localStorage.getItem("productsInLocal")) || productsArray ;
    if( f.target.value === "All" ){
        viewProducts(productsF)
    }
    if( f.target.value === "0 : 1000.EGP" ){
        let p= productsF.filter(filter => filter.price < 1000)
        viewProducts(p)
    }
    if( f.target.value === "1000 : 2000.EGP" ){
        let pp = productsF.filter(filter => filter.price <= 2000 &&  filter.price > 1000)
        viewProducts(pp)
    }
    if( f.target.value === "More Than  2000.EGP" ){
        let ppp = productsF.filter(filter => filter.price > 2000)
        viewProducts(ppp)
    }

})