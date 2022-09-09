window.onload=()=>{
    var arr1 = document.cookie.split('; ');
    for(var i = 0; i < arr1.length; i++){
        var arr2 = arr1[i].split('=');
        if(arr2[0] == 'setsearchEngine') setsearchEngine=arr2[1];
        else if(arr2[0] == 'setsearchInPage') setsearchInPage=arr2[1];
        else if(arr2[0] == 'focusInput'){
            setfocusInput=arr2[1];
            if(setfocusInput=="0") srchBox.focus();
        }
        else if(arr2[0] == 'setclearInputAfterS') setclearInputAfterS=arr2[1]; // 从cookie读取当前模式
    }
    searchEngine=setsearchEngine
    searchInPage=setsearchInPage
    clearInputAfterS=setclearInputAfterS
    focusInput=setfocusInput
    document.getElementById("searchEngines").selectedIndex=setsearchEngine
    document.getElementById("openInNew").selectedIndex=setsearchInPage
    document.getElementById("clearInput").selectedIndex=setclearInputAfterS
    document.getElementById("focusInput").selectedIndex=setfocusInput
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
    "https://www.baidu.com/s?wd=",              // 百度
    "https://cn.bing.com/search?q=",            // 必应
    "https://search.bilibili.com/all?keyword=", // B站
    "https://www.sogou.com/web?query="          // 搜狗
)
var searchEngine = 0
var setpagerun = false, setpageon = false
var pageon = false
var searching = false, searchInPage = false
var clearInputAfterSearch = false, focusInput = true
let background = document.getElementById("background");
let setsearchEngine=document.getElementById("searchEngines").selectedIndex
let setsearchInPage=document.getElementById("openInNew").selectedIndex
let setclearInputAfterS=document.getElementById("clearInput").selectedIndex
let setfocusInput=document.getElementById("focusInput").selectedIndex
srchBox.onfocus=()=>{
    searching = true;
    background.style.animationName="backblur"
}
srchBox.onblur=()=>{
    srchBox.classList.add("srchBoxlosfoc")
    searching = false;
    background.style.animationName="debackblur"
}
document.onkeydown=function(event){
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if(e && e.keyCode==13 && searching){
        if(searchInPage=="0") open(searchEngines[searchEngine]+srchBox.value);
        else window.location=(searchEngines[searchEngine]+srchBox.value);
        if(!clearInputAfterSearch) srchBox.value=""
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
    setsearchInPage=document.getElementById("openInNew").selectedIndex
    setclearInputAfterS=document.getElementById("clearInput").selectedIndex
    setfocusInput=document.getElementById("focusInput").selectedIndex
    if(searchEngine!=setsearchEngine){
        // alert("已保存")
        searchEngine=setsearchEngine
    }if(setsearchInPage!=searchInPage){
        // alert("已保存")
        searchInPage=setsearchInPage
    }if(setclearInputAfterS!=clearInputAfterSearch){
        // alert("已保存")
        clearInputAfterSearch=setclearInputAfterS
    }if(setclearInputAfterS!=clearInputAfterSearch){
        // alert("已保存")
        clearInputAfterSearch=setclearInputAfterS
    }if(setfocusInput!=focusInput){
        // alert("已保存")
        focusInput=setfocusInput
    }
    var oDate = new Date();
    oDate.setDate(oDate.getDate()+365);//访问页面后的365天过期
    document.cookie="setsearchEngine="+setsearchEngine+"; expires="+oDate.toGMTString()
    document.cookie="setsearchInPage="+setsearchInPage+"; expires="+oDate.toGMTString()
    document.cookie="setclearInputAfterS="+setclearInputAfterS+"; expires="+oDate.toGMTString();
    document.cookie="focusInput="+setfocusInput+"; expires="+oDate.toGMTString();
}