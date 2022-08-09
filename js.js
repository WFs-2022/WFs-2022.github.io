var menuOpen = false, menuRun = false;
let menuBtn = document.getElementById("menu");
let menuPge = document.getElementById("menupage");
var state = true;
let mntp = document.getElementById("menu-top");
let mnmd = document.getElementById("menu-mid");
let mnbm = document.getElementById("menu-bot");
menuBtn.onclick=() => {
    if(!menuRun){
        if(!menuOpen){
            menuRun = true;
            setTimeout(() => {
                menuRun=false;
            }, 1000);
            menuPge.style.display="block";
            menuPge.style.animationName="menuopen";
            menuPge.style.height="calc(100% - 170px)";
            menuPge.style.minHeight="185px";
            menuOpen = true;
        }else {
            menuRun = true;
            setTimeout(() => {
                menuRun=false;
                menuPge.style.display="none";
            }, 1000);
            menuPge.style.animationName="menuclose";
            menuPge.style.height="0px";
            menuPge.style.minHeight="0px";
            menuOpen = false;
        }
        if(state){
            mntp.classList.add("mvmntp");
            mnmd.classList.add("mvmnmd");
            mnbm.classList.add("mvmnbm");
            menuBtn.title="关闭";
            state = false;
        }else {
            mntp.classList.add("re-mvmntp");
            mnmd.classList.add("re-mvmnmd");
            mnbm.classList.add("re-mvmnbm");
            mntp.classList.remove("mvmntp");
            mnmd.classList.remove("mvmnmd");
            mnbm.classList.remove("mvmnbm");
            setTimeout(() => {
                mntp.classList.remove("re-mvmntp");
                mnmd.classList.remove("re-mvmnmd");
                mnbm.classList.remove("re-mvmnbm");
                menuBtn.title="菜单";
                state=true;
            }, 500);
        }
    }
}
function donate() {
    document.getElementById('mask').style.display='block';
    document.getElementById('donate').style.display='block';
}

window.oncontextmenu=function(event){
    event.preventDefault();
}