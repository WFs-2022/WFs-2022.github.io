let srchBox = document.getElementById("srchBox")
var searchEngines = new Array(
    "https://www.baidu.com/s?wd=",
    "https://www.sogou.com/web?query="
)
var searchEngine = 0;
var searching = false, searchInPage = false;
srchBox.onfocus=()=>{
    searching = true;
}
srchBox.onblur=()=>{
    srchBox.classList.add("srchBoxlosfoc")
    searching = false;
}
document.onkeydown=function(event){
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if(e && e.keyCode==13 && searching){
        if(!searchInPage) open(searchEngines[0]+srchBox.value);
        else window.location=(searchEngines[0]+srchBox.value);
    }
};

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
window.onload=()=>{
    showTime();setInterval(()=>{showTime()},500);
}