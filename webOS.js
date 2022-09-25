window.onload=()=>{
    reloadListeners();
}
// 新建窗口
const windowHTML1='<span class="windowCLOSE"><svg viewBox="0 0 32 24"><line x1="10" x2="22" y1="6" y2="18" stroke-width="2" stroke="#121212" stroke-linecap="round" /><line x1="22" x2="10" y1="6" y2="18" stroke-width="2" stroke="#121212" stroke-linecap="round" /></svg></span><span class="windowMINIMIZE"><svg viewBox="0 0 32 24"><line x1="8" x2="24" y1="12" y2="12" stroke-width="2" stroke="#121212" stroke-linecap="round" /></svg></span><span class="windowTOPS"></span><span class="windowFILLINS">'
const windowHTML2='</span>'
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
    var newWindowHTML = document.createElement("span")
    newWindowHTML.innerHTML=windowHTML1+windowFillinHTML[wintype]+windowHTML2
    newWindowHTML.className="windows"
    document.body.appendChild(newWindowHTML)
    reloadListeners();
}

// 窗口移动
function reloadListeners(){
    let windowTOPS = document.getElementsByClassName("windowTOPS");
    for (let i = 0; i < windowTOPS.length; i++) {
        const element = windowTOPS[i];
        var windows = element.parentElement;
        const items = windows.children;
        const closer= items[0], minimizer = items[1]
        element.onmousedown = function (ev) {
            let e = ev || event;
            let x = e.clientX - element.parentElement.offsetLeft; //鼠标点击坐标距离盒子左边缘的距离
            let y = e.clientY - element.parentElement.offsetTop; //鼠标点击坐标距离盒子上边缘的距离
            document.onmousemove = function (ev) {
                element.parentElement.style.left = ev.clientX - x + 'px';
                element.parentElement.style.top = ev.clientY - y + 'px';
                document.onmouseup = ()=>{
                    document.onmousemove = null;
                    document.onmouseup = null;
                }
            }
        }
        closer.onclick=()=>{
            closer.parentElement.remove();
        }
    }
}