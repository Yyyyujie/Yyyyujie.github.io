class Draw{
    constructor(huabi,option){
        this.huabi=huabi;
        this.color=option.color;
        this.width=option.width;
        this.style=option.style;
    }
    init(){
        this.huabi.strokeStyle=this.color;
        this.huabi.fillStyle=this.color;
        this.huabi.lineWidth=this.width;
    }
    rect(ox,oy,mx,my){
        this.init();
        // this.huabi.strokeRect(ox,oy,mx-ox,my-oy);
        this.huabi.beginPath();
        this.huabi.rect(ox,oy,mx-ox,my-oy);
        this.huabi[this.style]();
    }
    line(ox,oy,mx,my){
        this.init();
        this.huabi.beginPath();
        this.huabi.moveTo(ox,oy);
        this.huabi.lineTo(mx,my);
        this.huabi.stroke();
        
    }
    circlein(ox,oy,mx,my){
        this.init();
        this.huabi.beginPath();
        var r=Math.abs(mx-ox)>Math.abs(my-oy)?Math.abs(my-oy)/2:Math.abs(mx-ox)/2;
        this.huabi.arc(mx>ox?ox+r:ox-r,my>oy?oy+r:oy-r,r,0,2*Math.PI);
        this.huabi[this.style]();
    }
    circleout(ox,oy,mx,my){
        this.init();
        this.huabi.beginPath();
        var r=Math.sqrt(Math.pow(mx-ox,2)+Math.pow(my-oy,2))/2
        this.huabi.arc(ox+(mx-ox)/2,oy+(my-oy)/2,r,0,2*Math.PI);
        this.huabi[this.style]();
    }
    circle(ox,oy,mx,my){
        this.init();
        this.huabi.beginPath();
        var r=Math.sqrt(Math.pow(mx-ox,2)+Math.pow(my-oy,2));
        this.huabi.arc(ox,oy,r,0,2*Math.PI);
        this.huabi[this.style]();
    }
    poly(ox,oy,mx,my,s){
        this.init();
        this.huabi.save();
        this.huabi.translate(ox,oy);
        this.huabi.rotate(Math.PI/2);     //先旋转90度，保证起始边在下边切平行
        var angle=Math.PI/s;
        var r=Math.sqrt(Math.pow(mx-ox,2)+Math.pow(my-oy,2))/2;
        var x=Math.cos(angle)*r;
        var y=Math.sin(angle)*r;
        this.huabi.beginPath();
        this.huabi.moveTo(x,y);
        for(let i=0;i<s;i++){
            this.huabi.lineTo(x,-y);
            this.huabi.rotate(-angle*2);
        }
        this.huabi[this.style]();
        this.huabi.restore();
    }

    pen(ox,oy,mx,my){
        this.init();
        this.huabi.lineTo(mx,my);
        this.huabi.stroke();
    }
    eraser(ox,oy,mx,my){
        this.huabi.clearRect(mx,my,10,10)
    }
}