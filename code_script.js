function convert(){
  var x=document.getElementById("binary").value;
  var radio1= document.getElementById("Radio1").checked;
  var radio2= document.getElementById("Radio2").checked;
  if(radio2==true){
  x=parseInt(x,2);
  var y;
  y=x.toString(10);
  }
  else{
    x=parseInt(x,10);
    y=x.toString(10);
  }
 return y;

}

function tobinary(){
  y=convert();
  var length=y.length;
  var b;
  var s="";
  for (var i = 0; i <length; i++) {
      b=y[i];
      b=parseInt(b,10);
      b=b.toString(2);
      b=bit_correction(b,4);
      s=s+b;
  }
  document.getElementById("bcd").value=s;
}

function tobcd(){
  var x=document.getElementById("bcd").value;
    var l=x.length;
    var length=Math.ceil(l/4);
    var s="",s1;
    for(var i=0;i<length;i++){
        s1=x.substr(x.length-4,4);
        s1=parseInt(s1,10);
        s1=s1.toString(2);
        x=x.substr(0,x.length-4);
        s=s1+""+s;
    }
    s=parseInt(s,10);
    s=s.toString(2);
    document.getElementById("binary").value=s;
}
function bit_correction(x,length){
   length=length-x.length;
  for(var j=1;j<=length;j++)
   x="0"+x;
  return x;
}
function tobinary_3(){
  var y=convert();
  y=3+parseInt(y,10);
  y=y.toString(2);
  document.getElementById("excess3").value=y;
}

function toexcess3(){
  var x=document.getElementById("excess3").value;
  x=parseInt(x,2);
  x=x.toString(10);
  var y;
  y=parseInt(x,10);
  y=y-3;
  y=y.toString(2);
  document.getElementById("binary").value=y;
}
