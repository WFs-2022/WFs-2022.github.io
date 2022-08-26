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
let setsearchEngine=document.getElementById("searchEngines").selectedIndex
var searchEngines = new Array(
    "https://www.baidu.com/s?wd=",    // 百度
    "https://www.sogou.com/web?query="// 搜狗
)
var searchEngine = 0
var setpagerun = false, setpageon = false
var pageon = false
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
        if(!searchInPage) open(searchEngines[searchEngine]+srchBox.value);
        else window.location=(searchEngines[searchEngine]+srchBox.value);
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
        setbtn.style.pointerEvents="none"
        setTimeout(() => {setbtn.style.pointerEvents="auto"}, 1000);
    }else{
        setpageon = true
        setpage.focus()
        setpage.style.animation="setpageact 1s forwards"
        setbtn.style.pointerEvents="none"
        setTimeout(() => {setbtn.style.pointerEvents="auto"}, 1000);
    }
}
setpage.onblur=()=>{
    setpage.style.animation="setpagecls 1s forwards"
}
function showAbout() {
    if(pageon) return;
    pageon = true
    document.getElementById('about').style.transform='translate(-50%, -50%)';
    document.getElementById("about").style.transitionDuration="0.5s"
}
function closeAbout() {
    pageon = false
    document.getElementById('about').style.transform='';
    document.getElementById("about").style.transitionDuration="0.5s"
}
var autoSaveId
function showMoreSet() {
    if(pageon) return;
    pageon = true
    document.getElementById('moreSet').style.transform='translate(-50%, -50%)';
    document.getElementById("moreSet").style.transitionDuration="0.5s"
    autoSaveId = setInterval(() => {
        saveSearchEngine()
    }, 1000);
}
function closeMoreSet() {
    saveSearchEngine()
    clearInterval(autoSaveId);
    pageon = false
    document.getElementById('moreSet').style.transform='';
    document.getElementById("moreSet").style.transitionDuration="0.5s"
}
function saveSearchEngine(){
    setsearchEngine=document.getElementById("searchEngines").selectedIndex
    if(searchEngine!=setsearchEngine){
        alert("已保存")
        searchEngine=setsearchEngine
    }
}