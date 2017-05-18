var btns1=document.querySelectorAll(".lunbo li");
var cons1=document.querySelectorAll(".banner-tu li");
var container1=document.querySelector(".banner");
var right=document.querySelector(".right");
var gwc=document.querySelector(".gwc");
right.onmouseover=function(){
   gwc.style.display="block"
};
right.onmouseout=function(){
   gwc.style.display="none"
};
var obj=btns1[0];
var newcons=cons1[0];
Array.from(btns1).forEach(function (ele,index) {
    ele.onmouseover=function(){
        num1=index;
        obj.style.background="rgba(0,0,0,0.5)";
        newcons.style.zIndex="1";
        newcons.style.opacity="0";
        btns1[index].style.background="rgba(255,255,255,0.5)";
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
    obj.style.background="rgba(0,0,0,0.5)";
    newcons.style.zIndex="1";
    newcons.style.opacity="0";
    btns1[num1].style.background="rgba(255,255,255,0.5)";
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
var dh=document.querySelectorAll(".daohang1>div>a");

var dh1=document.querySelectorAll(" .daohang1 .dh1");
// console.log(dh1)

dh.forEach(function (ele,index) {
    ele.onmouseover=function () {
        dh1[index].style.display="block"

    }
    ele.onmouseout=function (e) {
        dh1[index].style.display="none"
    }

})
var neirong1=document.querySelectorAll(".neirong1");
var zuoyou=document.querySelectorAll(".zuoyou");
var zuoyou1=document.querySelectorAll(".zuoyou1");
var ner=document.querySelectorAll(".ner>li");
ner.forEach(function (ele,index) {
    ele.onmouseover=function () {
        zuoyou[index].style.opacity=1;
        zuoyou1[index].style.opacity=1;
        zuoyou[index].style.transform="translateY(-5px)";
        zuoyou1[index].style.transform="translateY(-5px)";
    }
    ele.onmouseout=function () {
        zuoyou[index].style.opacity=0;
        zuoyou1[index].style.opacity=0;
        zuoyou[index].style.transform="translateY(0)";
        zuoyou1[index].style.transform="translateY(0)";
    }
})
var zlan=document.querySelectorAll(".zuolan>ul> li");
var zlans=document.querySelectorAll(".zuolan ul li span");
var asid=document.querySelectorAll("aside>ul>a>li");
var zuolan=document.querySelectorAll(".zuolan")
asid.forEach(function (e,i) {
    e.onmouseover=function () {
        zuolan[i].style.display="block";
    }
    e.onmouseout=function () {
        zuolan[i].style.display="none";
    }
})
zlan.forEach(function (ele,index) {
    ele.onmouseover=function () {
        zlans[index].style.color="#ff6700";
    }
    ele.onmouseout=function () {
        zlans[index].style.color="";
    }
})
