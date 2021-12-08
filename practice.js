let color = ["red","green","blue","grey","black","SlateBlue","Orange","DeepPink","violet","yellow"];
let b = 1;
function demo(){
    let s = "";
    for(let i=1;i<=10;i++){
        s += (i*b) + " ";
    }
    let ele = document.createElement('div');
    ele.innerText = s;
    ele.style.fontSize = b*3+20+"px";
    ele.style.textAlign = "center";
    ele.style.color = color[b-1];
    document.body.appendChild(ele);
    if(b>=10)
        clearInterval(set_interval);
    b++;
    document.write("<br>");
};

var set_interval = setInterval(demo,5000);
