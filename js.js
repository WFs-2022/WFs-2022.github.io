var menuOpen = false, menuRun = false, state = true;
let menuBtn = document.getElementById("menu");
let menuPge = document.getElementById("menupage");
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

let loginwind = document.getElementById("loginwindow")
let logincanc = document.getElementById("cancel")
let loginsubm = document.getElementById("submit")
let loginuser = document.getElementById("usernm")
let loginpswd = document.getElementById("passwd")
logincanc.onclick=()=>{
    loginwind.style = "display: block; transform: scale(0); transition-duration: 500ms; transition-timing-function: cubic-bezier(0.68, -0.55, 0, 1);"
    setTimeout(() => {
        loginwind.style = ""
    }, 500);
    
}
loginsubm.onclick=()=>{
    if(loginuser.value == "WsF"/**/ && /**/window.btoa(window.btoa(window.btoa(loginpswd.value))+'HelloWorld')/**/==/**/"Vm5veFIwdHVUUzlNVTBaQlNYbFJiRmhwV1hGTFEyczlIZWxsb1dvcmxk"){
        alert("登录成功！");alert("\u3002\u3002"+/*???*/"\u4e86\u5417\uff1f");alert("\u6162\u7740"+/*Xxx Xxx Xxxx+*/"\uff0c\u6ca1\u6709\u540e"/*+0*/+"\u7aef\u600e\u4e48\u53ef"+/*😜*/"\u80fd\u80fd\u767b\u5f55\u554a\u0028\uff5e"+/*-+-+*/"\uffe3\u25bd"+/*++--*/"\uffe3\u0029\uff5e");
    }else{
        alert("用户名或密码错误！")
    }
}
function login(){
    loginwind.style = "transform: scale(1); transition-duration:500ms; transition-timing-function: cubic-bezier(0, 0, 0.27, 1.55);"
}