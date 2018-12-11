function todeci_comp() {
  var x=document.getElementById("decimal").value;
  var length=document.getElementById("bits").value;
  x=parseInt(x,10);
  x=x.toString(2);
  x=bit_correction(x,length);
  x=x.split("");
  for (var i = 0; i < x.length; i++) {
      if(x[i]=="0"){
        x[i]="1";
      }
      else {
        x[i]="0";
      }
   }
   x=x.toString();
   x=x.replace(/,/g,"");
   x=bit_correction(x,length);
   document.getElementById("1s_comp").value=x;
   x=parseInt(x,2);
   var y=parseInt(1,2);
   x=x.toString(10);
   y=y.toString(10);
   x=parseInt(x,10);
   y=parseInt(y,10);
   var z=x+y;
   z=z.toString(2);
   z=bit_correction(z,length);
  document.getElementById("2s_comp").value=z;
}
function bit_correction(x,length){
  if(length>=x.length){
   length=length-x.length;
  }
  else {
    alert("invalid bits value");
    length=0;
  }
  for(var j=1;j<=length;j++)
   x="0"+x;
  return x;
}
