window.onload=()=>{
    reloadListeners();
}
// 新建窗口
var windowHTML = document.createElement("span")
windowHTML.innerHTML='<span class="windowCLOSE">X</span><span class="windowMINIMIZE">一</span><span class="windowTOPS"></span><span class="windowFILLINS"></span>'
windowHTML.className="windows"
function newWindow() {
    var newWindowHTML = windowHTML
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