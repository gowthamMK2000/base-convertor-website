function todeci_comp() {
  var x=document.getElementById("decimal").value;
  x=parseInt(x,10);
  var y=x.toString(2);
  if(y.length<4)
   y="0"+y;
   y=y.split("");
   for (var i = 0; i < y.length; i++) {
      if(y[i]=="0")
      {    y[i]="1";   }
      else {
        y[i]="0";
      }
   }
   y=y.toString();
   y=y.replace(/,/g,"");
  document.getElementById("1s_comp").value=y;
  document.getElementById("2s_comp").value=x.toString(2);
}
