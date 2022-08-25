window.onload=()=>{
    showTime();setInterval(()=>{showTime()},500);
}
let timeshow = document.getElementById("time")
let dateshow = document.getElementById("date")
function showTime(){
    var day = new Date();
    var hour = day.getHours();
    var minut = day.getMinutes().toString();
    var secon = day.getSeconds().toString();
    var year = day.getFullYear();
    var month = day.getMonth();
    var date = day.getDate();
    if(minut.length==1) minut="0"+minut;
    if(secon.length==1) secon="0"+secon;
    timeshow.innerText = hour+":"+minut+":"+secon;
    dateshow.innerText = year+"年"+month+"月"+date+"日";
}

let srchBox = document.getElementById("srchBox")
let setbtn  = document.getElementById("setting")
let setpage = document.getElementById("settingpage")
var searchEngines = new Array(
    "https://www.baidu.com/s?wd=",    // 百度
    "https://www.sogou.com/web?query="// 搜狗
)
var searchEngine = 0
var setpagerun = false, setpageon = false
var searching = false, searchInPage = false;
srchBox.onfocus=()=>{
    searching = true;
    document.body.style.animationName="backblur"
}
srchBox.onblur=()=>{
    srchBox.classList.add("srchBoxlosfoc")
    searching = false;
    document.body.style.animationName="debackblur"
}
document.onkeydown=function(event){
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if(e && e.keyCode==13 && searching){
        if(!searchInPage) open(searchEngines[0]+srchBox.value);
        else window.location=(searchEngines[0]+srchBox.value);
    }else if(e.keyCode==191){
        e.preventDefault();
        srchBox.focus();
    }else if(e.keyCode==191){
        e.preventDefault();
        srchBox.focus();
    }else if(e.keyCode==27){
        srchBox.blur();
    }
    // else{
    //     alert(e.keyCode);
    // }
};
document.oncontextmenu=function(event){
    var e = event || window.event;
    e.preventDefault();
}
setbtn.onclick=()=>{
    if(setpageon){
        setpageon = false
        setpage.style.animation="setpagecls 1s forwards"
    }else{
        setpageon = true
        setpage.style.animation="setpageact 1s forwards"
    }
}
function showAbout() {
    document.getElementById('about').style.transform='translate(-50%, -50%)';
    document.getElementById("about").style.transitionDuration="0.5s"
}
function closeAbout() {
    document.getElementById('about').style.transform='';
    document.getElementById("about").style.transitionDuration="0.5s"
}