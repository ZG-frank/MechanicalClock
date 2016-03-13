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
    // 必须先确认curPageNode存在！！！第一前提
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
    gettimeNum(curdate.getHours());
    gettimeNum(curdate.getMinutes());
    gettimeNum(curdate.getSeconds());
    for (var i = 0; i < 16; i++){
        rotatePage( i, curtime[i]);
    }
    // 过去的时间置为空！！
    curtime = [];
}
//
setInterval(function(){ draw(); }, 1000);


















/*// 定义页数
var lefthourpageNum = 3;
var righthourpageNum = 10;
var leftminutepageNum = 6;
var rightminutepageNum = 10;
var leftsecondpageNum = 6;
var rightsecondpageNum = 10;

// 取得第一次时间
var date = new Date();
var prevtime = [];
// 计算左右时针数字
var firsthours = date.getHours();
var firstlefthour = Math.floor(firsthours / 10);
var firstrighthour = firsthours % 10;
prevtime.push(firstlefthour);
prevtime.push(firstrighthour);
// 计算左右分针数字
var firstminutes = date.getMinutes();
var fleftminute = Math.floor(firstminutes / 10);
var frightminute = firstminutes % 10;
prevtime.push(fleftminute);
prevtime.push(frightminute);
// 计算左右秒针数字
var fseconds = date.getSeconds();
var fleftsecond = Math.floor(fseconds / 10);
var fristrightsecond = fseconds % 10;
prevtime.push(fleftsecond);
prevtime.push(fristrightsecond);

// 初始化绘制函数
function firstdraw(){
        var curlefthourpageNum = document.getElementById("hourpage0");
        curlefthourpageNum.style.webkitTransform = "rotateX(-90deg)";
        var nextlefthourpageNum = document.getElementById("hourpage"+prevtime[0]);
        nextlefthourpageNum.style.webkitTransform = "rotateX(0deg)";

        var currighthourpageNum = document.getElementById("hourpage20");
        currighthourpageNum.style.webkitTransform = "rotateX(-90deg)";
        var nextrighthourpageNum = document.getElementById("hourpage2"+prevtime[1]);
        nextrighthourpageNum.style.webkitTransform = "rotateX(0deg)";

        var curleftminutepageNum = document.getElementById("minutepage0");
        curleftminutepageNum.style.webkitTransform = "rotateX(-90deg)";
        var nextleftminutepageNum = document.getElementById("minutepage"+prevtime[2]);
        nextleftminutepageNum.style.webkitTransform = "rotateX(0deg)";

        var currightminutepageNum = document.getElementById("minutepage20");
        currightminutepageNum.style.webkitTransform = "rotateX(-90deg)";
        var nextrightminutepageNum = document.getElementById("minutepage2"+prevtime[3]);
        nextrightminutepageNum.style.webkitTransform = "rotateX(0deg)";

        var curleftsecondpageNum = document.getElementById("secondpage0");
        curleftsecondpageNum.style.webkitTransform = "rotateX(-90deg)";
        var nextleftsecondpageNum = document.getElementById("secondpage"+prevtime[4]);
        nextleftsecondpageNum.style.webkitTransform = "rotateX(0deg)";

        var currightsecondpageNum = document.getElementById("secondpage20");
        currightsecondpageNum.style.webkitTransform = "rotateX(-90deg)";
        var nextrightsecondpageNum = document.getElementById("secondpage2"+prevtime[5]);
        nextrightsecondpageNum.style.webkitTransform = "rotateX(0deg)";
}
// 重置指针
function resetpage(pageNum,pageGroup){
    for(var i=1;i<pageNum;i++)
    {
        var resetPageNum = document.getElementById(pageGroup+i);
        resetPageNum.style.visibility = "hidden";
        resetPageNum.style.webkitTransform = "rotateX(90deg)";
    }
}

// 重绘制
function redraw(){
    // 重新取得时间
    var curtime = [];
    var curdate = new Date();

    var curhours = curdate.getHours();
    var curlefthour = Math.floor(curhours / 10);
    var currighthour = curhours % 10;
    curtime.push(curlefthour);
    curtime.push(currighthour);

    var curminutes = curdate.getMinutes();
    var curleftminute = Math.floor(curminutes / 10);
    var currightminute = curminutes % 10;
    curtime.push(curleftminute);
    curtime.push(currightminute);

    var curseconds = curdate.getSeconds();
    var curleftsecond = Math.floor(curseconds / 10);
    var currightsecond = curseconds % 10;
    curtime.push(curleftsecond);
    curtime.push(currightsecond);

    // 左时针
    var curlefthourpageNum = document.getElementById("hourpage"+prevtime[0]);
    curlefthourpageNum.style.visibility = "visible";
    curlefthourpageNum.style.webkitTransform = "rotateX(-90deg)";
    var nextlefthourpageNum = document.getElementById("hourpage"+curlefthour);
    nextlefthourpageNum.style.visibility = "visible";
    nextlefthourpageNum.style.webkitTransform = "rotateX(0deg)";
    // 为0时重置所有指针
    if (curlefthour == 0){
        resetpage(lefthourpageNum,"hourpage");
    }

    // 右时针
    var currighthourpageNum = document.getElementById("hourpage2"+prevtime[1]);
    currighthourpageNum.style.visibility = "visible";
    currighthourpageNum.style.webkitTransform = "rotateX(-90deg)";
    var nextrighthourpageNum = document.getElementById("hourpage2"+currighthour);
    nextrighthourpageNum.style.visibility = "visible";
    nextrighthourpageNum.style.webkitTransform = "rotateX(0deg)";
    // 为0时重置所有指针
    if (currighthour == 0){
        resetpage(righthourpageNum,"hourpage2");
    }

    // 左分针
    var curleftminutepageNum = document.getElementById("minutepage"+prevtime[2]);
    curleftminutepageNum.style.visibility = "visible";
    curleftminutepageNum.style.webkitTransform = "rotateX(-90deg)";
    var nextleftminutepageNum = document.getElementById("minutepage"+curleftminute);
    nextleftminutepageNum.style.visibility = "visible";
    nextleftminutepageNum.style.webkitTransform = "rotateX(0deg)";
    // 为0时重置所有指针
    if (curleftminute == 0){
        resetpage(leftminutepageNum,"minutepage");
    }

    // 右分针
    var currightminutepageNum = document.getElementById("minutepage2"+prevtime[3]);
    currightminutepageNum.style.visibility = "visible";
    currightminutepageNum.style.webkitTransform = "rotateX(-90deg)";
    var nextrightminutepageNum = document.getElementById("minutepage2"+currightminute);
    nextrightminutepageNum.style.visibility = "visible";
    nextrightminutepageNum.style.webkitTransform = "rotateX(0deg)";
    // 为0时重置所有指针
    if (currightminute == 0){
        resetpage(rightminutepageNum,"minutepage2");
    }

    // 左秒针
    var curleftsecondpageNum = document.getElementById("secondpage"+prevtime[4]);
    curleftsecondpageNum.style.visibility = "visible";
    curleftsecondpageNum.style.webkitTransform = "rotateX(-90deg)";
    var nextleftsecondpageNum = document.getElementById("secondpage"+curleftsecond);
    nextleftsecondpageNum.style.visibility = "visible";
    nextleftsecondpageNum.style.webkitTransform = "rotateX(0deg)";
    // 为0时重置所有指针
    if (curleftsecond == 0){
        resetpage(leftsecondpageNum,"secondpage");
    }

    // 右秒针
    var currightsecondpageNum = document.getElementById("secondpage2"+prevtime[5]);
    currightsecondpageNum.style.visibility = "visible";
    currightsecondpageNum.style.webkitTransform = "rotateX(-90deg)";
    var nextrightsecondpageNum = document.getElementById("secondpage2"+currightsecond);
    nextrightsecondpageNum.style.visibility = "visible";
    nextrightsecondpageNum.style.webkitTransform = "rotateX(0deg)";
    // 为0时重置所有指针
    if (currightsecond == 0){
        resetpage(rightsecondpageNum,"secondpage2")
    }
    // 保存当前时间
    prevtime = curtime;
}

// 调用setInterval来监听变化
firstdraw();
setInterval(function(){redraw();}, 50)*/
