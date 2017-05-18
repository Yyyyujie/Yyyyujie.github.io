var top1=document.querySelector(".top-right li:nth-child(1)");
var top2=document.querySelector(".top-right li:nth-child(2)");
var login=document.querySelector(".login");
var yy=document.querySelector(".yy");
top1.onmouseover=function () {
    top1.style.backgroundColor="#fff";
    login.style.display="block";
}
top1.onmouseout=function () {
    top1.style.backgroundColor="";
    login.style.display="none";
}
top2.onmouseover=function () {
    top2.style.backgroundColor="#fff";
    yy.style.display="block";
}
top2.onmouseout=function () {
    top2.style.backgroundColor="";
    yy.style.display="none";
}
var nav=document.querySelectorAll(".n2");
var navli=document.querySelectorAll(".navbar ul li .navli");

console.log(nav)
nav.forEach(function (ele,index) {
    ele.onmouseover=function () {
        navli[index].style.display="block"
    }
    ele.onmouseout=function () {
        navli[index].style.display="none"
    }
})
var kj=document.querySelectorAll(".kj-top li ");
var kjtu=document.querySelectorAll(".kj-top li .tu ");
 kj.forEach(function (k,i) {
     k.onmouseover=function () {
         kjtu[i].style.transform="Scale(1.2)"
     }
     k.onmouseout=function () {
         kjtu[i].style.transform=""
     }
 })
var banner=document.querySelector(".banner");
var bannerlis=document.querySelectorAll(".banner ul li");
var btns=document.querySelectorAll(".banner .lunbo li")
var bannerzuo=document.querySelector(".banner-zuo");
var banneryou=document.querySelector(".banner-you");
var now=0;
var z=3;
var flag=true;
var t=setInterval(move,3000);
console.log(bannerlis)
function move() {
    bannerlis[now].classList.add("leftOut");  //添加类名
    btns[now].classList.remove("active");
    now++;
    if(now==bannerlis.length){
        now=0;
    }
    bannerlis[now].classList.add("leftIn");
    btns[now].classList.add("active");
   bannerlis[now].style.zIndex=z++;
}
bannerlis.forEach(function (li) {
    li.addEventListener("animationend",function () {
        li.className="";
        flag=true;
    })
});
btns.forEach(function (btn,index) {
    btn.onclick=function () {
        if(now==index){
            return;
        }
        if(index>now){   //点击的是当前的后面
            bannerlis[now].classList.add("leftOut");
            btns[now].classList.remove("active");
            bannerlis[index].classList.add("leftIn");
            btns[index].classList.add("active");
        }else{
            bannerlis[now].classList.add("rightOut");
            btns[now].classList.remove("active");
            bannerlis[index].classList.add("rightIn");
            btns[index].classList.add("active");
        }
        bannerlis[index].style.zIndex=z++;
        now=index;
    }
});
banner.onmouseover=function () {
    clearInterval(t);
};
banner.onmouseout=function () {
    t=setInterval(move,3000);
};

banneryou.onclick=function () {
    if(flag){
        flag=false;
        move();
    }
};
bannerzuo.onclick=function () {
    if(flag){
        flag=false;
        bannerlis[now].classList.add("rightOut");
        btns[now].classList.remove("active");

        now--;
        if(now==-1){
            now=bannerlis.length-1;
        }
        bannerlis[now].classList.add("rightIn");
        btns[now].classList.add("active");
        bannerlis[now].style.zIndex=z++;
    }
};
var inner=document.querySelector(".lbtuk");
var smallleft=document.querySelector(".lbzuo");
var smallright=document.querySelector(".lbyou");
var lbkuang=document.querySelector(".lunbo1")
var num1=4;
var t1=setInterval(move2,3000);
var flag1=true;
function move2() {
        inner.style.transition="all 1s";
    num1++;
    inner.style.marginLeft=-295*num1+"px";
    inner.addEventListener("transitionend",function () {
        if(num1==12){
            inner.style.transition="none";
            num1=4;
            inner.style.marginLeft=-295*num1+"px";
        }else if(num1==0){
            inner.style.transition="none";
            num1=8;
            inner.style.marginLeft=-295*num1+"px";
        }
        flag1=true
    })
}
lbkuang.onmouseover=function () {
    clearInterval(t1)
}
    lbkuang.onmouseout=function () {
        t1=setInterval(move2,3000);
    }
smallleft.onclick=function () {
    if(flag1==true){
        flag1=false;
        num1-=2;
        move2();
    }


};

smallright.onclick=function () {
    if(flag1==true){
        flag1=false;
        move2();
    }

};
var xiazuo=document.querySelector(".xia1-zuo");
var xiayou=document.querySelector(".xia1-you");
var gg=document.querySelector(".gg");
var ul=document.querySelectorAll(".gg ul")
var num11=0;
xiazuo.onclick=function () {
    num11++;
    gg.style.marginTop=-38*num11+"px";
    if(num11==ul.length-1){
        num11=-1;
    }
}
xiayou.onclick=function () {
    num11++;
    gg.style.marginTop=-38*num11+"px";
    if(num11==ul.length-1){
        num11=-1;
    }
}
var kenav=document.querySelector(".zaixian");
var zixun=document.querySelectorAll(".zaixian>div");
console.log(kenav,zixun);
zixun.forEach(function (v) {
    v.onmouseover=function () {
        v.style.left="-84px";
    };
    v.onmouseout=function () {
        v.style.left="-20px";
    };

});