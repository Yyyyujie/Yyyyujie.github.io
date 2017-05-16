var btns1=document.querySelectorAll(".lunbo li");
var cons1=document.querySelectorAll(".banner-tu li");
var container1=document.querySelector(".banner");
var obj=btns1[0];
var newcons=cons1[0];
Array.from(btns1).forEach(function (ele,index) {
    ele.onmouseover=function(){
        num1=index;
        obj.style.background="#dddddd";
        newcons.style.zIndex="1";
        newcons.style.opacity="0";
        btns1[index].style.background="red";
        cons1[index].style.zIndex="2";
        cons1[index].style.opacity="1";
        obj=btns1[index];
        newcons=cons1[index];
    }
});
var num1=0;
var t=setInterval(move1,2000);
function move1() {
    num1++;
    if(num1==btns1.length){
        num1=0;
    }
    if(num1==-1){
        num1=btns1.length-1;  //最后一个轮播点的下标，回到最后一个轮播点的
    }
    obj.style.background="#dddddd";
    newcons.style.zIndex="1";
    newcons.style.opacity="0";
    btns1[num1].style.background="red";
    cons1[num1].style.zIndex="2";
    cons1[num1].style.opacity="1";
    obj=btns1[num1];
    newcons=cons1[num1];
}
container1.onmouseover=function () {
    clearInterval(t);
};
container1.onmouseout=function () {
    t=setInterval(move1,2000)
};
var sec=document.querySelectorAll(".sec");
var nav=document.querySelectorAll(".nav>li");
var arr=[];
Array.from(sec).forEach(function (ul) {
    var lii=ul.querySelectorAll("li");
    var height=(lii.length-1)*35+10;
    arr.push(height)

});
Array.from(nav).forEach(function (li,index) {
    li.onmouseover=function () {
        sec[index].style.height=arr[index]+"px";
    }
    li.onmouseout=function () {
        sec[index].style.height=0;
    }
})
var wx=document.querySelector(".wx");
var w=document.querySelector(".w1");
 w.onmouseover=function () {
     wx.style.display="block";
 }
w.onmouseout=function () {
    wx.style.display="none";
}
var jiantou=document.querySelector(".jiantou");
var jiantou1=document.querySelector(".jiantou1");
jiantou.onmouseover=function () {
    jiantou.style.backgroundPosition="0px -66px"
}
jiantou.onmouseout=function () {
    jiantou.style.backgroundPosition=" 0px -5px"
}
jiantou1.onmouseover=function () {
    jiantou1.style.backgroundPosition="-40px -66px"
}
jiantou1.onmouseout=function () {
    jiantou1.style.backgroundPosition="-40px -5px"
}
jiantou1.onclick=function () {
    move1();
}
jiantou.onclick=function () {
    num1-=2;
    move1();
}
var back=document.querySelector(".back");
back.onclick=function () {
    animate(document.body,{scrollTop:0},500)
}
var ssk1=document.querySelector(".ssk1-1");
var ssk2=document.querySelector(".ssk1-11");
var ssk=document.querySelector(".ssk1");
ssk.onmouseover=function () {
    ssk1.style.display="block";
    ssk2.style.display="block";
}
ssk.onmouseout=function () {
    ssk1.style.display="none";
    ssk2.style.display="none";
}