$(function() {

    var daohang = $(".daohang")
    var daohang1 = $(".daohang1")
    var mianbao = $(".mianbao")
    $(window).on("scroll", function() {
        var top = $(window).scrollTop();
        var daohangh = $(".aboutzi1")[0].offsetTop + $(window).height()
        if (top > daohangh) {
            daohang.css("position", "fixed")
            daohang1.css("position", "fixed")
            mianbao.css("position", "fixed")
        } else {
            daohang.css("position", "absolute")
            daohang1.css("position", "absolute")
            mianbao.css("position", "absolute")
        }
    })


    //    圆圈进度条1

    var canvas = document.getElementsByTagName("canvas")[0];
    var cobj = canvas.getContext("2d");
    var speed = 5;
    var a = 0;

    function move() {
        a += speed;
        if (a > 350) {
            a = 350
            window.webkitRequestAnimationFrame(t)
        } else {
            cobj.clearRect(0, 0, 500, 500)
            cobj.save()
            cobj.translate(50, 50);
            cobj.beginPath()
            cobj.strokeStyle = "#E64E4E"
            cobj.lineWidth = 2;
            cobj.arc(0, 0, 47, 0, a * Math.PI / 180);
            cobj.stroke();
            cobj.lineWidth = 1;
            cobj.textAlign = "center";
            cobj.textBaseline = "middle"
            var num = (a / 360 * 100).toFixed(2);
            cobj.strokeText("css3", 0, 0);

            cobj.restore();
            t = window.requestAnimationFrame(move)
        }
    }

    move()

    //    圆圈进度条2

    var canvas1 = document.getElementsByClassName("canvas1")[0];
    var cobj1 = canvas1.getContext("2d");
    var speed1 = 5;
    var a1 = 0;

    function move1() {
        a1 += speed1;
        if (a1 > 340) {
            a1 = 340
            window.webkitRequestAnimationFrame(t1)
        } else {
            cobj1.clearRect(0, 0, 500, 500)
            cobj1.save()
            cobj1.translate(50, 50);
            cobj1.beginPath()
            cobj1.strokeStyle = "#E64E4E"
            cobj1.lineWidth = 2;
            cobj1.arc(0, 0, 47, 0, a1 * Math.PI / 180);
            cobj1.stroke();
            cobj1.lineWidth = 1;
            cobj1.textAlign = "center";
            cobj1.textBaseline = "middle"
            var num1 = (a1 / 360 * 100).toFixed(2);
            cobj1.strokeText("html5", 0, 0);

            cobj1.restore();
            t1 = window.requestAnimationFrame(move1)
        }
    }

    move1()


    ////    圆圈进度条3

    var canvas3 = document.getElementsByTagName("canvas")[2];
    var cobj3 = canvas3.getContext("2d");
    var speed3 = 5;
    var a3 = 0;

    function move3() {
        a3 += speed3;
        if (a3 > 320) {
            a3 = 320
            window.webkitRequestAnimationFrame(t3)
        } else {
            cobj3.clearRect(0, 0, 500, 500)
            cobj3.save()
            cobj3.translate(50, 50);
            cobj3.beginPath()
            cobj3.strokeStyle = "#E64E4E"
            cobj3.lineWidth = 2;
            cobj3.arc(0, 0, 47, 0, a3 * Math.PI / 180);
            cobj3.stroke();
            cobj3.lineWidth = 1;
            cobj3.textAlign = "center";
            cobj3.textBaseline = "middle"
            var num3 = (a3 / 360 * 100).toFixed(2);
            cobj3.strokeText("js", 0, 0);

            cobj3.restore();
            t3 = window.requestAnimationFrame(move3)
        }
    }

    move3()

    //    圆圈进度条4


    var canvas4 = document.getElementsByClassName("canvas4")[0];
    var cobj4 = canvas4.getContext("2d");
    var speed4 = 5;
    var a4 = 0;

    function move4() {
        a4 += speed4;
        if (a4 > 280) {
            a4 = 280
            window.webkitRequestAnimationFrame(t4)
        } else {
            cobj4.clearRect(0, 0, 500, 500)
            cobj4.save()
            cobj4.translate(50, 50);
            cobj4.beginPath()
            cobj4.strokeStyle = "#E64E4E"
            cobj4.lineWidth = 2;
            cobj4.arc(0, 0, 47, 0, a4 * Math.PI / 180);
            cobj4.stroke();
            cobj4.lineWidth = 1;
            cobj4.textAlign = "center";
            cobj4.textBaseline = "middle"
            var num4 = (a4 / 360 * 100).toFixed(2);
            cobj4.strokeText("ajax", 0, 0);

            cobj4.restore();
            t4 = window.requestAnimationFrame(move4)
        }
    }

    move4()


    //    圆圈进度条5


    var canvas5 = document.getElementsByClassName("canvas5")[0];
    var cobj5 = canvas5.getContext("2d");
    var speed5 = 5;
    var a5 = 0;

    function move5() {
        a5 += speed5;
        if (a5 > 300) {
            a5 = 300
            window.webkitRequestAnimationFrame(t5)
        } else {
            cobj5.clearRect(0, 0, 500, 500)
            cobj5.save()
            cobj5.translate(50, 50);
            cobj5.beginPath()
            cobj5.strokeStyle = "#E65E5E"
            cobj5.lineWidth = 2;
            cobj5.arc(0, 0, 47, 0, a5 * Math.PI / 180);
            cobj5.stroke();
            cobj5.lineWidth = 1;
            cobj5.textAlign = "center";
            cobj5.textBaseline = "middle"
            var num5 = (a5 / 360 * 100).toFixed(2);
            cobj5.strokeText("jquery", 0, 0);

            cobj5.restore();
            t5 = window.requestAnimationFrame(move5)
        }
    }

    move5()


    //    圆圈进度条6


    var canvas6 = document.getElementsByClassName("canvas6")[0];
    var cobj6 = canvas6.getContext("2d");
    var speed6 = 5;
    var a6 = 0;

    function move6() {
        a6 += speed6;
        if (a6 > 270) {
            a6 = 270
            window.webkitRequestAnimationFrame(t6)
        } else {
            cobj6.clearRect(0, 0, 500, 500)
            cobj6.save()
            cobj6.translate(50, 50);
            cobj6.beginPath()
            cobj6.strokeStyle = "#E65E5E"
            cobj6.lineWidth = 2;
            cobj6.arc(0, 0, 47, 0, a6 * Math.PI / 180);
            cobj6.stroke();
            cobj6.lineWidth = 1;
            cobj6.textAlign = "center";
            cobj6.textBaseline = "middle"
            var num6 = (a6 / 360 * 100).toFixed(2);
            //cobj6.strokeText(num6 + "%", 0, 0);
            cobj6.strokeText("ps", 0, 0);
            cobj6.restore();
            t6 = window.requestAnimationFrame(move6)
        }
    }

    move6()


    //    圆圈进度条7


    var canvas7 = document.getElementsByClassName("canvas7")[0];
    var cobj7 = canvas7.getContext("2d");
    var speed7 = 5;
    var a7 = 0;

    function move7() {
        a7 += speed7;
        if (a7 > 270) {
            a7 = 270
            window.webkitRequestAnimationFrame(t7)
        } else {
            cobj7.clearRect(0, 0, 500, 500)
            cobj7.save()
            cobj7.translate(50, 50);
            cobj7.beginPath()
            cobj7.strokeStyle = "#E65E5E"
            cobj7.lineWidth = 2;
            cobj7.arc(0, 0, 47, 0, a7 * Math.PI / 180);
            cobj7.stroke();
            cobj7.lineWidth = 1;
            cobj7.textAlign = "center";
            cobj7.textBaseline = "middle"
            var num7 = (a7 / 360 * 100).toFixed(2);
            //cobj6.strokeText(num6 + "%", 0, 0);
            cobj7.strokeText("php", 0, 0);
            cobj7.restore();
            t7 = window.requestAnimationFrame(move7)
        }
    }

    move7()

    //    圆圈进度条8


    var canvas8 = document.getElementsByClassName("canvas8")[0];
    var cobj8 = canvas8.getContext("2d");
    var speed8 = 5;
    var a8= 0;

    function move8() {
        a8 += speed8;
        if (a8 > 270) {
            a8 = 270
            window.webkitRequestAnimationFrame(t8)
        } else {
            cobj8.clearRect(0, 0, 500, 500)
            cobj8.save()
            cobj8.translate(50, 50);
            cobj8.beginPath()
            cobj8.strokeStyle = "#E65E5E"
            cobj8.lineWidth = 2;
            cobj8.arc(0, 0, 47, 0, a8 * Math.PI / 180);
            cobj8.stroke();
            cobj8.lineWidth = 1;
            cobj8.textAlign = "center";
            cobj8.textBaseline = "middle"
            var num8 = (a8 / 360 * 100).toFixed(2);
            //cobj6.strokeText(num6 + "%", 0, 0);
            cobj8.strokeText("php", 0, 0);
            cobj8.restore();
            t8 = window.requestAnimationFrame(move8)
        }
    }

    move8()

    //    圆圈进度条7


    var canvas9 = document.getElementsByClassName("canvas9")[0];
    var cobj9 = canvas9.getContext("2d");
    var speed9 = 5;
    var a9 = 0;

    function move9() {
        a9 += speed9;
        if (a9 > 270) {
            a9 = 270
            window.webkitRequestAnimationFrame(t9)
        } else {
            cobj9.clearRect(0, 0, 500, 500)
            cobj9.save()
            cobj9.translate(50, 50);
            cobj9.beginPath()
            cobj9.strokeStyle = "#E65E5E"
            cobj9.lineWidth = 2;
            cobj9.arc(0, 0, 47, 0, a9 * Math.PI / 180);
            cobj9.stroke();
            cobj9.lineWidth = 1;
            cobj9.textAlign = "center";
            cobj9.textBaseline = "middle"
            var num9 = (a9 / 360 * 100).toFixed(2);
            //cobj6.strokeText(num6 + "%", 0, 0);
            cobj9.strokeText("php", 0, 0);
            cobj9.restore();
            t9 = window.requestAnimationFrame(move9)
        }
    }

    move9()


    //skill动画
    var skillbox = $(".skillbox");
    var skill1 = $(".skill1");
    var skill12 = $(".skill12");
    //var aa=$(".aa");
    $(window).on("scroll", function() {
        var top = $(window).scrollTop();
        var skillh = skillbox[0].offsetTop

        if (top > skillh - ($(window).height())) {
            //aa.css("animation","box 1s ease")
            skillbox.css("animation", "box 1s ease")
            skill1.css({
                animation: "aa 0.5s cubic-bezier(0.935, -0.600, 0.425, 1.650) forwards",

            })
            skill12.css("animation", "bb 0.5s cubic-bezier(0.935, -0.600, 0.425, 1.650) forwards")


        } else {
            //aa.css("animation"," ")
            skillbox.css("animation", " ")
            skill1.css("animation", " ")
            skill12.css("animation", " ")
        }
    })




    //    work动画

    var work = $(".work");
    var bai = $(".bai")
    var blue = $(".blue")
    work.eq(0).hover(function() {
        bai.eq(0).css("animation", "bai1 0.8s ease forwards")
        blue.eq(0).css("animation", "blue1 1s ease forwards")

    }, function() {
        bai.eq(0).css("animation", "bai2 0.8s ease forwards")
        blue.eq(0).css("animation", "blue2 1s ease forwards")

    })


    work.eq(1).hover(function() {
        bai.eq(1).css("animation", "bai1 0.8s ease forwards")
        blue.eq(1).css("animation", "blue1 1s ease forwards")

    }, function() {
        bai.eq(1).css("animation", "bai2 0.8s ease forwards")
        blue.eq(1).css("animation", "blue2 1s ease forwards")

    })


    work.eq(2).hover(function() {
        bai.eq(2).css("animation", "bai1 0.8s ease forwards")
        blue.eq(2).css("animation", "blue1 1s ease forwards")

    }, function() {
        bai.eq(2).css("animation", "bai2 0.8s ease forwards")
        blue.eq(2).css("animation", "blue2 1s ease forwards")

    })


    work.eq(3).hover(function() {
        bai.eq(3).css("animation", "bai1 0.8s ease forwards")
        blue.eq(3).css("animation", "blue1 1s ease forwards")

    }, function() {
        bai.eq(3).css("animation", "bai2 0.8s ease forwards")
        blue.eq(3).css("animation", "blue2 1s ease forwards")

    })


    work.eq(4).hover(function() {
        bai.eq(4).css("animation", "bai1 0.8s ease forwards")
        blue.eq(4).css("animation", "blue1 1s ease forwards")

    }, function() {
        bai.eq(4).css("animation", "bai2 0.8s ease forwards")
        blue.eq(4).css("animation", "blue2 1s ease forwards")

    })


    work.eq(5).hover(function() {
        bai.eq(5).css("animation", "bai1 0.8s ease forwards")
        blue.eq(5).css("animation", "blue1 1s ease forwards")

    }, function() {
        bai.eq(5).css("animation", "bai2 0.8s ease forwards")
        blue.eq(5).css("animation", "blue2 1s ease forwards")

    })


    //    game板块
    var game1 = $(".game1")
    var gamebai = $(".gamebai")
    var gamezi = $(".gamezi")
    var gameblue = $(".gameblue")
    game1.eq(0).hover(function() {
        gamebai.eq(0).css("animation", "gamebai1 0.5s ease forwards")
        gamezi.eq(0).css("animation", "gamezi1 0.5s ease forwards")
        gameblue.eq(0).css("animation", "gameblue1 0.5s ease forwards")

    }, function() {
        gamebai.eq(0).css("animation", "gamebai2 0.5s ease forwards")
        gamezi.eq(0).css("animation", "gamezi2 0.5s ease forwards")
        gameblue.eq(0).css("animation", "gameblue2 0.5s ease forwards")
    })


    game1.eq(1).hover(function() {
        gamebai.eq(1).css("animation", "gamebai1 0.5s ease forwards")
        gamezi.eq(1).css("animation", "gamezi1 0.5s ease forwards")
        gameblue.eq(1).css("animation", "gameblue1 0.5s ease forwards")

    }, function() {
        gamebai.eq(1).css("animation", "gamebai2 0.5s ease forwards")
        gamezi.eq(1).css("animation", "gamezi2 0.5s ease forwards")
        gameblue.eq(1).css("animation", "gameblue2 0.5s ease forwards")
    })
    game1.eq(2).hover(function() {
        gamebai.eq(2).css("animation", "gamebai1 0.5s ease forwards")
        gamezi.eq(2).css("animation", "gamezi1 0.5s ease forwards")
        gameblue.eq(2).css("animation", "gameblue1 0.5s ease forwards")

    }, function() {
        gamebai.eq(2).css("animation", "gamebai2 0.5s ease forwards")
        gamezi.eq(2).css("animation", "gamezi2 0.5s ease forwards")
        gameblue.eq(2).css("animation", "gameblue2 0.5s ease forwards")
    })


    //返回顶部
    var totop = $(".totop")
        // 返回顶部显示隐藏
    $(window).on("scroll", function() {
            var top = $(window).scrollTop();
            var toph = $(".aboutzi1")[0].offsetTop + $(window).height()

            if (top > toph) {
                $(".totop").fadeIn(2000)
            } else {
                $(".totop").fadeOut(2000)
            }
        })
        // 返回顶部
    $(".totop").click(function() {
        $("html,body").animate({ scrollTop: 0 }, 1000)
    })


    //    导航单击


    var mianbao = $(".mianbao")
    var daohangzi1 = $(".daohangzi1")
    var xiala = $(".xiala")
    mianbao.click(function() {
        if ($(window).width() >= 650) {
            if (daohangzi1.css("opacity") == 0) {
                daohangzi1.css("animation", "daohang 0.5s ease forwards")
            } else {
                daohangzi1.css("animation", "daohang1 0.5s ease forwards")
            }
        } else {
            if (xiala.css("opacity") == 0) {
                xiala.css("animation", "daohang 0.5s ease forwards")
            } else {
                xiala.css("animation", "daohang1 0.5s ease forwards")
            }
        }

    })


    //    关于我
    var aboutzi1 = $(".aboutzi1")
    var aboutzi2 = $(".aboutzi2")
    var name = $(".name")
    var name1 = $(".name1")
    $(window).on("scroll", function() {
            var top = $(window).scrollTop();
            var abouth = aboutzi1[0].offsetTop
            if (top > abouth) {
                aboutzi1.css("animation", "aboutzi1 1s cubic-bezier(0.935, -0.600, 0.425, 1.650) forwards")
                aboutzi2.css("animation", "aboutzi1 1s cubic-bezier(0.935, -0.600, 0.425, 1.650) forwards")
                name.css("animation", "name 1s ease forwards")
                name1.css("animation", "name 1s ease forwards")


            }
        })
        //   expen
    var exe = $(".expcon")
    $(window).on("scroll", function() {
        var top = $(window).scrollTop();
        var exeh = exe[0].offsetTop

        if (top > exeh - ($(window).height() / 2)) {
            exe.css("animation", "expcon 1s ease forwards")
            exe.css("animation", "expcon 1s ease forwards")


        }
    })

    //app二维码

    $(".app").click(function() {
        var mask = $("<div class='mask'>");
        var w = $("body").width();
        var h;
        if (w < 650) {
            h = $(".aa").height() + "px"
            alert(h)
        } else {
            h = $(window).height() + "px"
        }


        mask.css({
            width: "100%",
            height: h,
            background: "#000",
            display: "block",
            position: "absolute",
            positon: "relative",
            top: 0,
            left: 0,
            opacity: 0.9,

        })
        mask.appendTo(".aa")
        var appimg = $("<img src='img/apperweima.png'>")
        appimg.css({
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            margin: "auto"
        })
        appimg.appendTo(mask)


        if (w > 650) {
            var appdel = $("<div class='del'>+<div>")
            appdel.css({
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                position: "absolute",
                transform: "rotate(90deg)",
                top: "50px",
                right: "200px",
                background: "#fff",
                color: "#000",
                fontSize: "40px",
                lineHeight: "30px",
                textAlign: "center",
                cursor: "pointer"

            })
            appdel.appendTo(mask)
        }



    })



    //    person二维码
    $(".person").click(function() {
        var mask = $("<div class='mask'>");
        var w = $("body").width();
        var h;
        if (w < 650) {
            h = $(".aa").height() + "px";
        } else {
            h = $(window).height()+$(".workstitle").innerHeight() +"px";
        }


        mask.css({
            width: "100%",
            height: h,
            background: "#000",
            display: "block",
            position: "absolute",
            positon: "relative",
            top: 0,
            left: 0,
            opacity: 0.9,

        })
        mask.appendTo(".aa")
        var appimg = $("<img src='img/aa.png'>")
        appimg.css({
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            margin: "auto"
        })
        appimg.appendTo(mask)


        if (w > 650) {
            var appdel = $("<div class='del'>+<div>")
            appdel.css({
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                position: "absolute",
                transform: "rotate(90deg)",
                top: "150px",
                right: "200px",
                background: "#fff",
                color: "#000",
                fontSize: "40px",
                lineHeight: "30px",
                textAlign: "center",
                cursor: "pointer"

            })
            appdel.appendTo(mask)
        }



    })





    $(".aa").click(function(e) {
        var ev = e || window.event
        var target = ev.target || ev.srcElement;
        if (target.nodeName = "DIV" && target.className == "mask") {
            $(".mask").css({
                display: "none"
            })
        }
    })
    $(".aa").click(function(e) {
        var ev = e || window.event
        var target = ev.target || ev.srcElement;
        if (target.nodeName = "DIV" && target.className == "del") {
            $(".mask").css({
                display: "none"
            })
        }
    })

})