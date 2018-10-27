var count = 0;
var n='';

//Add Numbers
function fu(t){
    if(count==0){
        document.getElementById("display").value='';
        document.getElementById("display").value+=t;
    }else{
        document.getElementById("display").value+=t;
    }
    n+=t;
    count++;
    x1=0;
    x2=0;
    x3=0;
    x4=0;
}

//AC clean
function ac(){
    x1=0;
    x2=0;
    x3=0;
    x4=0;
    n=n.slice(0,length-1);
    document.getElementById('display').value=n;
}

//Clean
function cl(){
    n='';
    count=0;
    document.getElementById("display").value='0';
}

//Add Characters
var x1=0;
function mt(k){
    x2=1;
    x3=1;
    x4=1;
    if(count==0 || x1!=0){
        return;
    }else{
        document.getElementById("display").value+=k;
        n+=k;
    }
    x1++;
}
var x2=0;
function dv(k){
    x1=1;
    x3=1;
    x4=1;
    if(count==0 || x2!=0){
        return;
    }else{
        document.getElementById("display").value+=k;
        n+=k;
    }
    x2++;
}
var x3=0;
function pl(k){
    x1=1;
    x2=1;
    x4=1;
    if(count==0 || x3!=0){
        return;
    }else{
        document.getElementById("display").value+=k;
        n+=k;
    }
    x3++;
}
var x4=0;
function mn(k){
    x1=1;
    x2=1;
    x3=1;
    if(count==0 || x4!=0){
        return;
    }else{
        document.getElementById("display").value+=k;
        n+=k;
    }
    x4++;
}

//Result
function fuEqual(){
    while(n.length-1 == 0){
        n.slice(-1);
    }
    document.getElementById('display').value=(eval(n));
    n=eval(n);
}



