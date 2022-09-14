
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
        moreAbout:` About this product:<br> <ul><li>11th Gen Intel Core i3-1115G4 Dual Core Processor (up to 4.1 GHz with Turbo Boost) / 8GB DDR4-2666 SDRAM /256 GB PCIe NVMe M.2 Solid State Drive</li><li> 15.6-inch Full HD IPS Micro-edge 250 nits, 45% NTSC / NO DVD / Intel UHD Graphics</li><li> Full-size keyboard with numeric keypad / HP 720p HD camera with integrated digital microphone / 802.11ac (1x1) Wi-Fi and Bluetooth 4.2 combo</li> <li>1 SuperSpeed USB Type-C / 2 SuperSpeed USB Type-A / 1 HDMI 1.4b / Multi-format SD media card rea / 1 Headphone-out/microphone-in combo jackder</li><li> Touchpad with multi-touch gesture support / 3-cell 41 WHr Li-Ion battery / 45W Smart AC Power Adapter / Windows 10 Home in S mode</li></ul> `,
        price:"25.000",
        imageUrl1:"images/p1.png",
        imageUrl2:"images/p11111.png",
        imageUrl3:"images/p111.png",
        imageUrl4:"images/p1111.png",
        imageUrl5:"images/p11.png",
    },
    {
        id:2,
        title:"Fujifilm X-T30 Mirrorless Digital Camera With 18-55mm Lens",
        about:"26.1MP APS-C X-Trans BSI CMOS 4 Sensor X-Processor 4 with Quad CPU DCI and UHD 4K30 Video; F-Log Gamma 2.36m-Dot OLED Electronic Viewfinder Camera Lens and accessories.",
        moreAbout:`About this Product:<br><ul><li>
        26.1MP APS-C X-Trans BSI CMOS 4 Sensor</li><li>
        X-Processor 4 with Quad CPU</li><li>
        DCI and UHD 4K30 Video; F-Log Gamma</li><li>
        2.36m-Dot OLED Electronic Viewfinder</li><li>
        Camera Lens and accessories </li></ul>`,
        price:"27.999",
        imageUrl1:"images/p2.png",
        imageUrl2:"images/p22.png",
        imageUrl3:"images/p222.png",
        imageUrl4:"images/p2222.png",
        imageUrl5:"images/p22222.png",
    },  
    {
        id:3,
        title:"Electric Lighter 🔥",
        about:"Smart Electronic Lighter, Mini USB Rechargeable Lighter Touch Ignition Windproof Flameless Lighter Lightweight Plasma Lighter with Power Indicator for Boyfriends Father Gifts (Red).",
        moreAbout:`About This Product 🔥:<ul><li>【Fingerprint Ignition】The New Generation Of Dual Sided Lighter Comes With Touch Induction To Ignite. You Don't Have To Use Your Fingers To Press The Button , You Just Need To Touch It To Ignite , More Easy , Fast And Convenient To Ignite. The Traditional Lighter Will Need You To Press The Ignition Button All The Time To Ignite.Unique, offers a classic look with a modern twist while being ultra-slim, compact, portable, fits well in your hand.
        </li><li>【Windproof, Reliable & Safe】No butane/gas is required,Ignition Is Safe, Environmentally Friendly, Lightweight, Compact, Smart Chip, Fast Charge, Wind And Weatherproof,No Longer Wake Her Up In Sleep, Give You A Quiet Moment Of Cigarettes,Think about how cool this is in front of others.
        </li><li>【Usb Rechargeable And Reusable】You can charge this windproof Lighter with a standard micro USB cable in any devices that compatiable with USB port,like computor,laptop,power bank, and adapters etc.Since it doesn't contain any dangerous fuel it's also airport safe.also that you don’t have to worry about harmful chemicals.
        </li><li>【Battery Indicator】The Upgrade Version Of Electronic Arc Lighter Comes With Battery Capacity Indicator, It Has Four Blue Dot To Represent The Battery Capacity. It Will Remind You When You Lighter Needs To Charge At Anytime. Useful And Convenient, The Traditional Lighter Will Tell You That You Need To Charge It When The Arcs Goes Out.
        </li><li>【Package Included】1 X Electronic Lighters, 1 x USB cable,rechargeable lighter with a sleek design in compact size of 3.2” x 1.2” x 0.32”.Can be placed in a cigarette case.Does Not Product Any Flame .This is probably a perfect gift for birthday, friends, family, lover, business and more. Note:For Lighting Up Regular Cigarettes Only,ignition etc</li></ul>`,
        price:"225",
        imageUrl1:"images/p3.png",
        imageUrl2:"images/p33.png",
        imageUrl3:"images/p333.png",
        imageUrl4:"images/p3333.png",
        imageUrl5:"images/p33333.png",
    },  
    {
        id:4,
        title:"lather band watch",
        about:"Tommy Hilfiger Men's Analogue Quartz Watch with Leather Strap 1791629 ",
        moreAbout:`About This Product:<ul><li>Multifunction movement
        </li><li>Case Diameter 44mm
        </li><li>Navy dial
        </li><li>Light brown leather strap
        </li><li>5 ATM water resistance</li><ul> `,
        price:"1.670",
        imageUrl1:"images/p4.png",
        imageUrl2:"images/p44.png",
        imageUrl3:"images/p444.png",
        imageUrl4:"images/p4444.png",
        imageUrl5:"images/p44444.png",
    }, 
    {
        id:5,
        title:"Samsung Galaxy A13 LTE",
        about:"Android Smartphone, 128GB, 4GB RAM, Dual Sim, Light Blue.",
        moreAbout:`About This Product:<ul><li>Brand	SAMSUNG
        </li><li>Cellular technology	LTE
        </li><li>Memory storage capacity	128 GB
        </li><li>Form factor	Slate</li><ul> `,
        price:"6.450",
        imageUrl1:"images/p5.png",
        imageUrl2:"images/p55.png",
        imageUrl3:"images/p555.png",
        imageUrl4:"images/p5555.png",
        imageUrl5:"images/p55555.png",
    },
    
];
//store ProductsArray in local
let itemDetails=document.querySelector(".item-details")
localStorage.setItem("productsInLocal",JSON.stringify(productsArray));

let productsInLocal =JSON.parse(localStorage.getItem("productsInLocal"));

let productId =localStorage.getItem("productId")
let productDetails=productsInLocal.find(item => item.id == productId);


itemDetails.innerHTML=`
        
   <div class="images">
    <img src="${productDetails.imageUrl1}" alt="laptop">
    <img src="${productDetails.imageUrl2}" alt="laptop">
    <img src="${productDetails.imageUrl3}" alt="laptop">
    <img src="${productDetails.imageUrl4}" alt="laptop">
    <img src="${productDetails.imageUrl5}" alt="laptop">
    </div>

    <h1> ${productDetails.title}</h1>
    <p>${productDetails.about}</p>
  
    <p class="more">${productDetails.moreAbout}</p>
    <span>price:&nbsp; <span>${productDetails.price}<sup>EGP</sup><span></span>
    

`

