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