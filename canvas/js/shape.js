function shape(cobj,canvas,copy){
    this.copy=copy
    this.cobj=cobj;
    this.canvas=canvas;
    this.fillStyle="#ccc";
    this.strokeStyle="#ccc";
    this.lineWidth=1;
    this.type="line";
    this.style="stroke";
     this.history=[];
    this.biannum=5;
    this.jiaonum=5;
    this.xpsize=30
}
shape.prototype={
    init:function(){
        this.cobj.fillStyle=this.fillStyle;
        this.cobj.strokeStyle=this.strokeStyle;
        this.cobj.lineWidth=this.lineWidth;
    },
    draw:function(){

        var that=this;
        that.copy.onmousedown=function(e){
            that.init();
            var startx= e.offsetX;
            var starty= e.offsetY;
            that.copy.onmousemove=function(e){
                var endx= e.offsetX;
                var endy= e.offsetY;
                that.cobj.clearRect(0,0,that.canvas.width,that.canvas.height)
                if(that.history.length>0){
                    that.cobj.putImageData(that.history[that.history.length-1],0,0)
                }
                that[that.type](startx,starty,endx,endy)
            }
            that.copy.onmouseup=function(){
                that.copy.onmousemove=null;
                that.copy.onmouseup=null;

                that.history.push(that.cobj.getImageData(0,0,that.canvas.width,that.canvas.height))
            }
        }
    },
    line:function(x,y,x1,y1){
        this.cobj.beginPath();
        this.cobj.moveTo(x,y);
        this.cobj.lineTo(x1,y1);
        this.cobj.stroke();

    },
    rect:function(x,y,x1,y1){
        this.cobj.beginPath();
        var w=x1-x;
        var h=y1-y;
        this.cobj.rect(x,y,w,h)
        this.cobj[this.style]();
    },
    arc:function(x,y,x1,y1){
        this.cobj.beginPath();
        var w=Math.sqrt((x1-x)*(x1-x)+(y1-y)*(y1-y));
        this.cobj.arc(x,y,w,0,2*Math.PI)
        this.cobj[this.style]();
    },
    return:function(btn){
        var that=this;
        btn.onclick=function(){
            that.history.pop();
            if(that.history.length==0){
                alert("不能撤回");
                that.cobj.clearRect(0,0,that.canvas.width,that.canvas.height);
                return;
            }
            that.cobj.putImageData(that.history[that.history.length-1],0,0)
        }
    },
    bian:function(x,y,x1,y1){
        var num=this.biannum;
        this.cobj.beginPath();
        var r=Math.sqrt((x1-x)*(x1-x)+(y1-y)*(y1-y));
        this.cobj.moveTo(Math.cos(0)*r+x,Math.sin(0)*r+y)
        var angle=360/num*Math.PI/180;
        for(var i=1;i<num;i++){
            this.cobj.lineTo(Math.cos(angle*i)*r+x,Math.sin(angle*i)*r+y)
            this.cobj[this.style]();
        }
        this.cobj.closePath();
        this.cobj[this.style]();

    },
    jiao:function(x,y,x1,y1){
        var num=this.jiaonum*2;
        this.cobj.beginPath();
        var r=Math.sqrt((x1-x)*(x1-x)+(y1-y)*(y1-y));
        var r1=r/3;
        var angle=(360/num)*Math.PI/180;
        for(var i=0;i<num;i++){
            if(i%2==0){
                this.cobj.lineTo(Math.cos(angle*i)*r+x,Math.sin(angle*i)*r+y)

            }else{
                this.cobj.lineTo(Math.cos(angle*i)*r1+x,Math.sin(angle*i)*r1+y)
            }

        }
        this.cobj.closePath();
        this.cobj[this.style]();
    },
    pen:function(){
        var that=this;
        this.copy.onmousedown=function(e){
            var e=e||window.event;
            var stratx=e.offsetX;
            var straty=e.offsetY;
            that.data=that.cobj.getImageData(0,0,that.canvas.width,that.canvas.height);
            that.cobj.beginPath();
            that.cobj.moveTo(stratx,straty);
            that.copy.onmousemove=function(e){
                var e=e||window.event;
                var endx=e.offsetX;
                var endy=e.offsetY;
                that.cobj.clearRect(0,0,that.canvas.width,that.canvas.height);
                if(that.history.length>0){
                    that.cobj.putImageData(that.history[that.history.length-1],0,0)
                }
                that.cobj.lineTo(endx,endy);
                that.cobj.stroke();
            };
            that.copy.onmouseup=function(){
                that.cobj.closePath();
                that.history.push(that.cobj.getImageData(0,0,that.canvas.width,that.canvas.height))

                that.copy.onmousemove=null;
                that.copy.onmouseup=null;
            }
        }
    },
    xp:function(xpele){
      var that=this;
        that.copy.onmousemove=function(e){
           that.move(e,that,xpele)
        }
        that.copy.onmousedown=function(e){

            that.copy.onmousemove=function(e){

                var left= e.offsetX-that.xpsize/2;
                var top= e.offsetY-that.xpsize/2;
                that.move(e,that,xpele)
                that.cobj.clearRect(left,top,that.xpsize,that.xpsize)
                var data=that.cobj.getImageData(0,0,that.canvas.width,that.canvas.height);
                that.history.push(data);


            }
        }
        that.copy.onmouseup=function(){
            that.copy.onmousemove=null;
            that.copy.onmouseup=null;
            that.xp(xpele)
        }

    },
    move:function(e,that,xpele){

        var ox= e.offsetX;
        var oy= e.offsetY;
        var left=ox-xpele.width()/2;
        var top=oy-xpele.height()/2;
        if(left<0){
            left=0;
        }
        if(top<0){
            top=0;
        }
        if(left<ox-xpele.width()){
            left=ox-xpele.width();
        }
        if(top<oy-xpele.height()){
            top=oy-xpele.height();
        }
        xpele.css({
            display:"block",
            left:left,
            top:top
        })

    }

}