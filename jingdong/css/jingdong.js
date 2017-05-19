$(function () {
    $(".top-left>ul>li").mouseover(function () {
        $(this).css("background","#fff");
        $(".dingwei").show();
    })
    $(".top-left>ul>li").mouseout(function () {
        $(this).css("background","");
        $(".dingwei").hide();
    })

    $(".top-right>li:nth-child(3)").mouseover(function () {
        $(this).css("background","#fff");
        $(".mine").show();
    })
    $(".top-right>li:nth-child(3)").mouseout(function () {
        $(this).css("background","");
        $(".mine").hide();
    })

    $(".top-right>li:nth-child(6)").mouseover(function () {
        $(this).css("background","#fff");
        $(".kehu").show();
    })

    $(".top-right>li:nth-child(6)").mouseout(function () {
        $(this).css("background","");
        $(".kehu").hide();
    })

    $(".gouwu").mouseover(function () {
        $(".gwc").show();
    })
    $(".gouwu").mouseout(function () {
        $(".gwc").hide();
    })
    var btns=$(".lunbo li");

    btns.click(function () {  
        var index=$(this).index();
        btns.filter(".active").removeClass("active").end().filter(this).addClass("active");
        num=index;
        $(".banner1>ul li").eq(index).addClass("active").siblings().removeClass("active");

    })
    var t= setInterval(move,3000);
    var num=0;
    function move() {
        num++;
        if(num>=btns.length){
            num=0;
        }
        if(num<0){
            num=btns.length-1
        }

        btns.filter(".active").removeClass("active").end().filter(btns[num]).addClass("active");
        $(".banner1>ul li").eq(num).addClass("active").siblings().removeClass("active");
    }
    $(".banner").mouseover(function () {
        clearInterval(t);
        $(".zuo").show();
        $(".you").show();
    });
    $(".banner").mouseout(function () {
        t=setInterval(move,3000)
        $(".zuo").hide();
        $(".you").hide();
    })
    $(".zuo").click(function () {
        num-=2;

        move();
    })
    $(".you").click(function () {
        move();
    })
$(".byou2-1 li").mouseover(function () {
    $(".byou2-1 li").addClass("active").not(this).removeClass("active");
})

 /*   $(".faxian1").mouseover(function () {
        $(".zuo2").show();
        $(".you2").show();
    })
    $(".faxian1").mouseout(function () {
        $(".zuo2").hide();
        $(".you2").hide();
    })*/

    var btns1=$(".fx21-lunbo li");

    btns1.click(function () {
        var index=$(this).index();
        btns1.filter(".active").removeClass("active").end().filter(this).addClass("active");
        num1=index;
        $(".faxian21").eq(index).addClass("active").siblings().removeClass("active");

    })
    var t1= setInterval(move1,3000);
    var num1=0;
    function move1() {
        num1++;
        if(num1>=btns1.length){
            num1=0;
        }
        if(num1<0){
            num1=btns1.length-1
        }

        btns1.filter(".active").removeClass("active").end().filter(btns1[num1]).addClass("active");
        $(".faxian21").eq(num1).addClass("active").siblings().removeClass("active");
    }
    $(".faxian1").mouseover(function () {
        clearInterval(t);
        $(".zuo2").show();
        $(".you2").show();
    });
    $(".faxian1").mouseout(function () {
        t1=setInterval(move,3000)
        $(".zuo2").hide();
        $(".you2").hide();
    })
    $(".zuo2").click(function () {
        num1-=2;
        move1();
    })
    $(".you2").click(function () {
        move1();
    })
  /*  $(".fx21-lunbo li").mouseover(function () {
        $(".fx21-lunbo li").addClass("active").not(this).removeClass("active");
    })*/

    var inner=$(".a1a-d ul");
    var num2=0;
    var zuo3=$(".zuo3");
    var you3=$(".you3");
    setInterval(lun,15000);
    console.log(inner)
    function lun () {
        num2++;
        if (num2==2){
            num2=0;
            // inner.style.transition="all 1s";
        }
        inner.style.left=-570*num2+"px";
    }

    you3.onclick=function () {

        lun();
    }
    zuo3.onclick=function () {
        if (num2 = 1) {
            lun();
        }
    }


  /*  $(".g ul li").mouseover(function (e,index) {
        $(".zi p")eq(index).css("color","#f10214")
    })*/

var gdtop=$(".topbar");
    $(window).scroll(function () {
        var h=$(this).scrollTop();
        if(h>700){
            gdtop.css("top",0);
            $(".leftbar").fadeIn();
        }else{
            gdtop.css("top","-50px");
            $(".leftbar").fadeOut();
        }
    })
   /* window.onscroll=function () {
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
    }*/
    
    $(".rightbar2 .rightbar11:nth-child(1)").click(function () {
            $("body,html").animate({scrollTop:0},500);
    })
/*$(".leftbar li").click(function (zuo,index) {
    var gao=$(".floor").eq(index).offset().top;
    console.log(gao)
    animate(document.body,{scrollTop:gao});
})*/
  /*  var zuos=$(".leftbar li");
    var g=$(".floor")
    zuos.forEach(function (zuo,index) {
        zuo.onclick=function () {
            var gao=g[index].offsetTop;
            animate(document.body,{scrollTop:gao});

        }
    });*/

    $(".leftbar li:not(10)").click(function () {
        var n=$(this).index();
        var h=$(".floor").eq(n).offset().top;
//                console.log(h)
        $("body,html").animate({scrollTop:h},500);
    })
    $(".leftbar div").click(function () {
        $("body,html").animate({scrollTop:0},500);
    })
    
    
    $(".rightbar11").mouseover(function () {
        var index=$(this).index(".rightbar11");
        $(".rb").eq(index).css("left","-59px");
        $(".rb").eq(index).css("background","#c81623")
    })
    $(".rightbar11").mouseout(function () {
        var index=$(this).index(".rightbar11");
        $(".rb").eq(index).css("left","35px");
        $(".rb").eq(index).css("background","")
    })


    $(".banner-zuo>ul>li").mouseover(function () {
        var index=$(this).index();
        $(".bannerlist").eq(index).show();
    })

    $(".banner-zuo>ul>li").mouseout(function () {
        var index=$(this).index();
        $(".bannerlist").eq(index).hide();
    })



        })//结束

