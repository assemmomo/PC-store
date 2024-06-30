let mainDiv = document.getElementById("mainDiv")
let menu = document.getElementById("menu")
let about = document.getElementById("about")
let sign = document.getElementById("sign")
let goDown = document.getElementById("goDown")
let menuPage = document.getElementById("menuPage")
let closeMenu = document.getElementById("close")
let cat = document.getElementById("cat")
let contact = document.getElementById("contact")
let offer = document.getElementById("offer")
let catPage = document.getElementById("catPage")
let showM = document.getElementById("showM")
let showM2 = document.getElementById("showM2")
let title = document.getElementById("title")
let logo = document.getElementById("logo")
let words = document.getElementById("words")
let hdr= document.getElementById("header")
let search = document.getElementById("search")
let searchIcon = document.getElementById("searchIcon")
let signtxt = document.getElementById("signtxt")
let closeSign = document.getElementById("closeSign")
let firstN = document.getElementById("firstN")
let lastN = document.getElementById("lastN")
let em = document.getElementById("EM")
let pass = document.getElementById("pass")
let pass2 = document.getElementById("pass2")
let sub = document.getElementById("sub")


menu.onclick=function(){
    mainDiv.style.marginLeft="300px";
    mainDiv.style.transition="0.5s";
    about.style.right="17%";
    sign.style.right="25%";
    menuPage.style.marginLeft="300px";
    this.style.display="none";
    closeMenu.style.left="320px";
    closeMenu.style.opacity="1";
};
closeMenu.onclick=function(){
    mainDiv.style.marginLeft="0";
    mainDiv.style.transition="0.5s";
    about.style.right="2%";
    sign.style.right="10%";
    menuPage.style.marginLeft="0";
    this.style.left="-200px";
    closeMenu.style.opacity="1";
    menu.style.display="block";
}
cat.onclick=function(){
    catPage.style.left="0"
    contact.style.top="510px"
    offer.style.top="570px"
    cat.style.color="#45a29e"
    showM.style.transform="rotate(0deg)"
    showM.style.transition="0.2s"
    setTimeout(showM2.style.display="block",1000)
}
showM2.onclick=function(){
    catPage.style.left="-300px"
    contact.style.top="210px"
    offer.style.top="270px"
    cat.style.color="#0b0c10"
    showM.style.transform="rotate(90deg)"
    showM.style.transition="0.2s"
    showM2.style.display="none"
}

window.addEventListener('scroll',function() {
    if (document.documentElement.scrollTop > 90) {
        //    console.log("hi")
        title.style.position="fixed";
        title.style.letterSpacing="6px";
        logo.style.top="0px";
        logo.style.width="75px";
        logo.style.marginRight="300px";
        hdr.style.position="fixed";
        hdr.style.zIndex="999";
        hdr.style.boxShadow="3px 3px 50px #45a29e";
        hdr.style.background="#0b0c10";


    } else{
        title.style.position="block";
        logo.style.opacity="1";
        title.style.letterSpacing="normal";
        hdr.style.boxShadow="none"
        logo.style.top="50px";
        logo.style.width="100px";
        logo.style.marginRight="0";
        hdr.style.background="transparent"
    }
});


sign.onclick=function(){
    this.style.cssText="width:1000px;height:700px;top:100px;cursor:default;right:400px;z-index:999;transform:scale(1.1);background-color:#0b0c10;transition:0.8s;";
    signtxt.style.cssText="width:9%;top:20px;left:50%;color:#66fcf1;";
    firstN.style.display="block";
    lastN.style.display="block";
    em.style.display="block";
    pass.style.display="block";
    pass2.style.display="block";
    closeSign.style.display="block";
    sub.style.display="flex";

}

closeSign.onclick=function(){
    sign.style.cssText="width:120px;height:50px;top:10px;cursor:pointer;right:10%;z-index:auto;transform:none;background-color:#66fcf1;transition:0.2s;"
    closeSign.style.display="none";
    signtxt.style.cssText="width:75%;top:50%;left:50%;color:#0b0c10;";
    firstN.style.display="none";
    lastN.style.display="none";
    em.style.display="none";
    pass.style.display="none";
    pass2.style.display="none";
    sub.style.display="none";
}





// window.addEventListener('scroll',function() {
//     if (document.documentElement.scrollTop > 550) {
//         search.style.cssText="top:10px;left:100px;position:fixed;z-index:899;background:#45a29e;color:#0b0c10;border:none;"
//         searchIcon.style.opacity="0";
//     } else{
//         search.style.cssText="top:700px;left:740px;position:absolute;z-index:899;background:#0b0c10;color:#45a29e;"
        
//     }
// })
