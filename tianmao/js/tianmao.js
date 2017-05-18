
var btns1=document.querySelectorAll(".lunbo li");
var cons1=document.querySelectorAll(".banner-tu li");
var container1=document.querySelector(".bannerbox");
var obj=btns1[0];
var newcons=cons1[0];

var arr=["#134FD6","#E8E8E8","#E8E8E8","#C8C8C8","#FF7F02"];
Array.from(btns1).forEach(function (ele,index) {
    ele.onmouseover=function(){
        num1=index;
        obj.style.background="rgba(0,0,0,0.5)";

        newcons.style.zIndex="1";
        newcons.style.opacity="0";
        btns1[index].style.background="rgba(255,255,255,0.5)";
        cons1[index].style.zIndex="2";
        cons1[index].style.opacity="1";
        container1.style.background=arr[index];
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
    container1.style.background=arr[num1];
    obj=btns1[num1];
    newcons=cons1[num1];
}
container1.onmouseover=function () {
    clearInterval(t);
};
container1.onmouseout=function () {
    t=setInterval(move1,2000)
};
var inner=document.querySelector(".spinner");
var num2=0;
var zuo=document.querySelector(".spzuo");
var you=document.querySelector(".spyou");
setInterval(lun,15000);
function lun () {
    num2++;
    if (num2==2){
        num2=0;
        // inner.style.transition="all 1s";
    }

    inner.style.marginLeft=-490*num2+"px";
}

you.onclick=function () {
   
        lun();


}
  zuo.onclick=function () {
      if(num2=1){
          lun()
      }
  }
var bb2=document.querySelector(".bb2");
var num3=0;
setInterval(function () {
    num3++;
    if(num3==2){
        num3=0;
    }
    bb2.style.marginTop=-50*num3+"px";
},3000)
var daohang=document.querySelectorAll(".daohang .neikuan li ")
var maotou=document.querySelectorAll(".maott");
Array.from(daohang).forEach(function ( s,z) {
    s.onmouseover=function () {

        maotou[z].style.top="-12px"
        maotou[z].style.opacity="1";
    }
    s.onmouseout=function () {

        maotou[z].style.top="0"
        maotou[z].style.opacity="0";
    }
})

var lis=document.querySelectorAll(".guding-right li");
var zs=document.querySelectorAll(".guding-right li .gdz");
Array.from(lis).forEach(function (v,index) {
    hover(v,function () {
        v.style.background="#c40000"
        clearTimeout(t);
        t=setTimeout(function () {
            zs[index].classList.add("show");
        },500);
    },function () {
        v.style.background=""
        clearTimeout(t);
        if(zs[index].classList.contains("show")){
            zs[index].classList.remove("show");
            zs[index].classList.add("hide");
        }
    });

});
Array.from(zs).forEach(function (z) {
    z.addEventListener("animationend",function () {
        if(z.classList.contains("hide")){
            z.classList.remove("hide")
        }
    });
});
var bottom=document.querySelector(".guding-right li:last-child");
var bottom1=document.querySelector(".guding li:last-child");

bottom.onclick=function () {
    animate(document.body,{scrollTop:0})
}

var zd=document.querySelector(".guding");
var zuos=document.querySelectorAll(".guding li");
var g=document.querySelectorAll(".floor")
var gdtop=document.querySelector(".gdtop");
window.onscroll=function () {
    var st2=document.body.scrollTop;
    if(st2>700){
        zd.style.height="332px";
        zd.style.width="35px";
        gdtop.style.top="0px";
    }else {
        zd.style.height=0;
        zd.style.width=0;
        gdtop.style.top="-50px";
    }
}
zuos.forEach(function (zuo,index) {
    zuo.onclick=function () {
        var gao=g[index].offsetTop;
        animate(document.body,{scrollTop:gao});

    }
});
bottom1.onclick=function () {
    animate(document.body,{scrollTop:0})
}
var fo=document.querySelector(".fo");
var meili=document.querySelector(".meilitu-zuo1");
meili.onmouseover=function () {
    fo.style.display="block";
}
meili.onmouseout=function () {
    fo.style.display="none";
}
var taobao=document.querySelectorAll(".taobao");
var tbr=document.querySelectorAll(".touburight ul .tbr");
var shouji=document.querySelector(".shouji");
var zhichi=document.querySelector(".zhichi")
tbr.forEach(function (v,index) {
    v.onmouseover=function () {
        if(index==0){
            taobao[0].style.display="block"
        }
        if(index==3){
            taobao[1].style.display="block";
        }
        if(index==5){
           shouji.style.display="block";
        }
        if(index==8){
            zhichi.style.display="block";
        }
    }
    v.onmouseout=function () {
        if(index==0){
            taobao[0].style.display="none"
        }
        if(index==3){
            taobao[1].style.display="none";
        }
        if(index==5){
            shouji.style.display="none";
        }
        if(index==8){
            zhichi.style.display="none";
        }
    }

})
var daohangm=document.querySelectorAll(".daohang-m");
var  dh=document.querySelectorAll(".lfdaohang li");
var dha=document.querySelectorAll(".leftdaohang ul li>a");
console.log()
var colorr=["#e54077","#427def","#6347ed","#e54077","#6347ed","#427def","#fa5c5c","#f7a831","#f7a831","#427def","#dd2727","#427def","#f7a831","#3bc7b0","#dd2727","#3bc7b0"]
dh.forEach(function (ele,index) {
    hover(ele,function () {
        dha[index].style.color=colorr[index];
        dha[index].style.fontWeight="bold";
        daohangm[index].style.display="block";
    },function () {
        daohangm[index].style.display="none";
        dha[index].style.fontWeight="";
        dha[index].style.color="";
    })
})