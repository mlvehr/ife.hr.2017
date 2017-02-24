/**
 * Created by 黄韬 on 2017-02-24.
 */

/*获取 menu 标签 ID*/
var rClickMenu = document.getElementById("rClickMenu");

document.oncontextmenu = function (ev) {
    rClickMenu.style.display = "block";
    var menuEvent = ev || event;
    var pX = clientViewport().width - menuEvent.clientX;
    var pY = clientViewport().height - menuEvent.clientY;
    if (rClickMenu.clientWidth > pX) {
        pX = menuEvent.clientX - rClickMenu.clientWidth;
    } else {
        pX = menuEvent.clientX;
    }
    if (rClickMenu.clientHeight > pY) {
        pY = menuEvent.clientY - rClickMenu.clientHeight;
    } else {
        pY = menuEvent.clientY;
    }
    rClickMenu.style.left = pX + "px";
    rClickMenu.style.top = pY + "px";
    return false; /*阻止浏览器右键菜单*/
};
document.onclick = function () {
    rClickMenu.style.display = "none";
};
/*获取浏览器视口尺寸*/
function clientViewport() {
    if (window.innerWidth != null) { //兼容 IE9以上 及 现代的浏览器
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    } else if (document.compatMode === "CSS1Compat") { //标准浏览器，有<!DOCTYPE html>声明的
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        }
    } else { //怪异浏览器，没有<!DOCTYPE html>声明的
        return {
            width: document.body.clientWidth,
            height: document.body.clientHeight
        }
    }
}
/*浏览器窗口调整，重新获取*/
window.onresize = function () {
    clientViewport();
};