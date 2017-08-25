
    $(function() {
        var copy=$(".copy")[0];
      var canvas = $("canvas")[0];
      var cobj = canvas.getContext("2d");
      var obj = new shape(cobj,canvas,copy);
        var xpele=$(".xpele")

      
      //画图
      $(".tools").find(".a").click(function () {
          xpele.css("display","none")
        obj.type = $(this).attr("data-type");
        obj.draw();
          copy.onmousemove=null
      })
      $(".tools").find(".pen").click(function () {
          xpele.css("display","none")
        obj.pen()
          copy.onmousemove=null
      })
      /*选择方式*/
      $(".tianchong").click(function () {
          xpele.css("display","none")

          obj.style = "fill";
        obj.draw();
          copy.onmousemove=null
      })
      $(".miaoxian").click(function () {
          xpele.css("display","none")

          obj.style = "stroke";
        obj.draw();
          copy.onmousemove=null
      });
      /*选择填充颜色*/
      $("input").eq(0).change(function () {
          xpele.css("display","none")

          obj.fillStyle = $(this).val();
        obj.draw();
          copy.onmousemove=null

      });
      /*选择描线颜色*/
      $("input").eq(1).change(function () {
          xpele.css("display","none")

          obj.strokeStyle = $(this).val();
        obj.draw();
          copy.onmousemove=null

      });
      /*选择边数*/
      $("input").eq(2).change(function () {
          xpele.css("display","none")

          obj.jiaonum = $(this).val();
        obj.biannum = $(this).val();
        obj.draw();
          copy.onmousemove=null

      });
      /*选择线条宽度*/
      $("input").eq(3).change(function () {
          xpele.css("display","none")

          alert($(this).val())
        obj.lineWidth = $(this).val();
        obj.draw();
          copy.onmousemove=null

      });

      /*撤销*/
      $(".three").click(function () {
          xpele.css("display","none")

          obj.history.pop()
                if(obj.history.length==0){
                    cobj.clearRect(0,0,canvas.width,canvas.height)
                    alert("不能后退")
                    return
                }else{
                    cobj.putImageData(obj.history[obj.history.length-1],0,0)
                }
          copy.onmousemove=null

      })

      /*清空*/
      $(".four").click(function () {
          xpele.css("display","none")

          var yes=confirm("是否清空");
         if(yes){
             cobj.clearRect(0,0,canvas.width,canvas.height)
             obj.history=[];
         }
          copy.onmousemove=null


      })

    //    保存

        $(".two").click(function(){
            xpele.css("display","none")

            var url=canvas.toDataURL().replace("data:image/png","data:stream/octet")
            location.href=url;
            copy.onmousemove=null


        })




        //   新建

        $(".one").click(function(){
            xpele.css("display","none")

            var yes=confirm("是否保存");
            if(yes){
                var url=canvas.toDataURL().replace("data:image/png","data:stream/octet")
                location.href=url;
            }
            cobj.clearRect(0,0,canvas.width,canvas.height)
            obj.history=[];
            copy.onmousemove=null

        })


    //橡皮

        var xpele=$(".xpele")
        var xp=$(".xp")
        xp.click(function(){
            obj.xp(xpele)
        })

    })