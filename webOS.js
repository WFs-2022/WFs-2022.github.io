window.onload=()=>{
    reloadListeners();
}
// 定义
let barApps = document.getElementById("apps")
// 新建窗口
var windowIDs=0
const windowHTML1='class="windowCLOSE"><svg viewBox="0 0 32 24"><line x1="10" x2="22" y1="6" y2="18" stroke-width="2" stroke="#121212" stroke-linecap="round" /><line x1="22" x2="10" y1="6" y2="18" stroke-width="2" stroke="#121212" stroke-linecap="round" /></svg></span><span class="windowMAXSIZE"><svg viewBox="0 0 32 24"><line x1="8" x2="24" y1="6" y2="6" stroke-width="2" stroke="#121212" stroke-linecap="round" /><line x1="8" x2="24" y1="18" y2="18" stroke-width="2" stroke="#121212" stroke-linecap="round" /><line x1="8" x2="8" y1="6" y2="18" stroke-width="2" stroke="#121212" stroke-linecap="round" /><line x1="24" x2="24" y1="6" y2="18" stroke-width="2" stroke="#121212" stroke-linecap="round" /></svg></span><span '
const windowHTML2='class="windowMINIMIZE"><svg viewBox="0 0 32 24"><line x1="8" x2="24" y1="12" y2="12" stroke-width="2" stroke="#121212" stroke-linecap="round" /></svg></span><span class="windowTOPS"></span><span class="windowFILLINS">'
const windowHTML3='</span>'
const windowFillinHTML=[
    '',
    '<iframe src="TodoApp.html">',
    '<iframe src="music-unlocker/index.html">',
    '<iframe src="m3u8-downloader-master/index.html">',
    '<iframe src="CST.html">',
    '<iframe src="play.html">',
    '<iframe src="Downloads.html">',
    '<iframe src="超课表3.1.html">',
    '<iframe src="startpage.html">',
    '<iframe src="webOS.html">',
]
function newWindow(wintype) {
    var newWindowReferHTML = document.createElement("span")
    newWindowReferHTML.innerHTML='<span class="windowRefers" onclick="minimaxsize(\''+"window"+windowIDs+'\')">'+windowIDs+'</span>'
    newWindowReferHTML.id="windowRefer"+windowIDs
    barApps.appendChild(newWindowReferHTML)
    var newWindowHTML = document.createElement("span")
    newWindowHTML.id="window"+windowIDs
    newWindowHTML.innerHTML="<span onclick='javascript:document.getElementById(\"window"+windowIDs+"\").remove();document.getElementById(\"windowRefer"+windowIDs+"\").remove()'"+windowHTML1+"onclick='javascript:document.getElementById(\"window"+windowIDs+"\").style.transform=\"scale(0)\";document.getElementById(\"window"+windowIDs+"\").style.transitionDuration=\"0.5s\"'"+windowHTML2+windowFillinHTML[wintype]+windowHTML3
    windowIDs++
    newWindowHTML.className="windows"
    document.body.appendChild(newWindowHTML)
    reloadListeners();
}
function minimaxsize(arg){
    if(document.getElementById(arg).style.transform=='scale(0)'){
        document.getElementById(arg).style.transform='scale(1)'
        setTimeout(() => {
            document.getElementById(arg).style.transitionDuration='0s'
        }, 500);
    }
    else{
        document.getElementById(arg).style.transitionDuration='0.5s'
        document.getElementById(arg).style.transform='scale(0)'
    }
}

// 窗口移动
function reloadListeners(){
    let windowTOPS = document.getElementsByClassName("windowTOPS");
    for (let i = 0; i < windowTOPS.length; i++) {
        const element = windowTOPS[i];
        var windows = element.parentElement;
        const items = windows.children;
        element.onmousedown = function (ev) {
            let e = ev || event;
            let x = e.clientX - element.parentElement.offsetLeft; //鼠标点击坐标距离盒子左边缘的距离
            let y = e.clientY - element.parentElement.offsetTop; //鼠标点击坐标距离盒子上边缘的距离
            document.getElementsByTagName("iframe")
            window.onmousemove = function (ev) {
                element.parentElement.style.left = ev.clientX - x + 'px';
                element.parentElement.style.top = ev.clientY - y + 'px';
                window.onmouseup = ()=>{
                    window.onmousemove = null;
                    window.onmouseup = null;
                }
            }
        }
        // closer.onclick=()=>{
        //     closer.parentElement.remove();
        // }
    }
}