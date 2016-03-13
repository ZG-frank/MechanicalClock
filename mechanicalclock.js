/**
 * Created by ZG on 2016/3/11.
 */

// 存储当前时间数字
var curtime = [];
// 获取每个页面的数字
function gettimeNum(time){
    var LeftTimeNum = Math.floor(time / 10);
    var RightTimeNum = time % 10 ;
    curtime.push(LeftTimeNum);
    curtime.push(RightTimeNum);
}

function rotatePage(i,curPageNum){
    var curPageNode = document.getElementById("time-" + i + "-" +curPageNum)
    // 必须先确认curPageNode存在！！
    if (curPageNode){
        var prevPageNode = curPageNode.previousElementSibling;
        if (!prevPageNode) { prevPageNode = curPageNode.parentNode.lastElementChild; }
        var nextPageNode = curPageNode.nextElementSibling;
        if (!nextPageNode){ nextPageNode = curPageNode.parentNode.firstElementChild; }
        prevPageNode.style.visibility = "visible";
        prevPageNode.style.webkitTransform = "rotateX(-90deg)";
        curPageNode.style.visibility = "visible";
        curPageNode.style.webkitTransform = "rotateX(0deg)";
        nextPageNode.style.visibility = "hidden";
        nextPageNode.style.webkitTransform = "rotateX(90deg)";
    }
}
function draw(){
    var curdate = new Date();
    // 获得当前时间数组
    gettimeNum(curdate.getHours());
    gettimeNum(curdate.getMinutes());
    gettimeNum(curdate.getSeconds());
    for (var i = 0; i < 16; i++){
        rotatePage( i, curtime[i]);
    }
    // 过去的时间置为空！！
    curtime = [];
}
//反复调用draw
setInterval(function(){ draw(); }, 1000);