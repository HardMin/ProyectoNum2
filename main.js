let home = document.querySelector('.home');
let galery = document.querySelector('.galery');
let buttonMenu = document.querySelector('.capa_oculto'),
    headerPage_menuActive = document.querySelector('.headerPage_menuActive'),
    cerrarMenu = document.querySelector('.cerrarMenu');


home.addEventListener('click', ()=>{
    window.location.href = "index.html";
})

galery.addEventListener('click', ()=>{
    window.location.href = "galery.html";
})
let count = 0
const headerPagemenuActive = (x)=>{
    switch (x) {
        case true:
            headerPage_menuActive.style.cssText = `transform: translateX(0em); transition: .4s transform; `;
            break;
    
        default:
            headerPage_menuActive.style.cssText = `transform: translateX(-14em); transition: .4s transform; `;
            break;
    }
    
}
buttonMenu.addEventListener('click', ()=>{
    headerPagemenuActive(true)
    
})
cerrarMenu.addEventListener('click', ()=>{
    headerPagemenuActive(false)
    // console.log("mouseup");
})