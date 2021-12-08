var b = 1;
var s = "";
function cal(){
    for(let i=1;i<=10;i++){
        s = (i*b)+" ";
        if(b==1)
            document.write(s.fontcolor("green"));
        if(b==2)
            document.write(s.fontcolor("red"));
        if(b==3)
            document.write(s.fontcolor("blue"));
        if(b==4)
            document.write(s.fontcolor("Orange"));
        if(b==5)
            document.write(s.fontcolor("yellow"));
        if(b==6)
            document.write(s.fontcolor("SlateBlue"));
        if(b==7)
            document.write(s.fontcolor("black"));
        if(b==8)
            document.write(s.fontcolor("Chartreuse"));        
        if(b==9)
            document.write(s.fontcolor("brown"));
        if(b==10)
            document.write(s.fontcolor("DeepPink"));
    }
    if (b >= 10)
        clearInterval(timer);
    b++;
    document.write("<br>");
};
var timer = setInterval(cal, 5000);

