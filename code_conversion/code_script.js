function tobinary(){
  var x=document.getElementById("binary").value;
  x=parseInt(x,2);
  var y;
  y=x.toString(10);
  var length=y.length;
  var b;
  var s="";
  for (var i = 0; i <length; i++) {
      b=y[i];
      b=parseInt(b,10);
      b=b.toString(2);
      b=bit_correction(b,4);
      s=s+" "+b;
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
    document.getElementById("binary").value=s;
}
function bit_correction(x,length){
   length=length-x.length;
  for(var j=1;j<=length;j++)
   x="0"+x;
  return x;
}
