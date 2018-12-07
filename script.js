  function tobinary() {
    var x=document.getElementById("binary").value;
    x=parseInt(x,2);
    var y;
    y=x.toString(10);
    document.getElementById("decimal").value=y;
    y=x.toString(8);
    document.getElementById("octal").value=y;
    y=x.toString(16);
    document.getElementById("hexa").value=y;
  }
  function todecimal() {
    var x=document.getElementById("decimal").value;
    x=parseInt(x,10);
    var y;
    y=x.toString(2);
    document.getElementById("binary").value=y;
    y=x.toString(8);
    document.getElementById("octal").value=y;
    y=x.toString(16);
    document.getElementById("hexa").value=y;
  }
  function tooctal() {
    var x=document.getElementById("octal").value;
    x=parseInt(x,8);
    var y;
    y=x.toString(2);
    document.getElementById("binary").value=y;
    y=x.toString(10);
    document.getElementById("decimal").value=y;
    y=x.toString(16);
    document.getElementById("hexa").value=y;
  }
  function tohexa() {
    var x=document.getElementById("hexa").value;
    x=parseInt(x,16);
    var y;
    y=x.toString(2);
    document.getElementById("binary").value=y;
    y=x.toString(10);
    document.getElementById("decimal").value=y;
    y=x.toString(8);
    document.getElementById("octal").value=y;
  }
  function checkbi(){
    var x=document.getElementById("binary").value;
    x=Number(x);
    x=x%10;
    if(x!=0 && x!=1)
    {  alert("not a binary value");
      document.getElementById("button1").disabled=true;
      document.getElementById("binary").value="";
      //document.getElementsByName('text').value="";
    }
    else {
      document.getElementById("button1").disabled=false;
    }
  }
  function checkoctal(){
    var x=document.getElementById("octal").value;
    x=Number(x);
    x=x%10;
    if(x>=0 && x<=7)
    {  document.getElementById("button3").disabled=false;

    }
    else {
           alert("not a octal value");
          document.getElementById("button3").disabled=true;
          document.getElementById("octal").value="";
    }
  }
  function checkdeci(){
    var x=document.getElementById("decimal").value;
    x=Number(x);
    x=x%10;
    if(x>=0 && x<=9)
    {
      document.getElementById("button2").disabled=false;
    }
    else {
      alert("not a decimal value");
      document.getElementById("button2").disabled=true;
      document.getElementById("decimal").value="";
    }
  }
 function tochar(){
   var x=document.getElementById("char").value;
   x=x.charCodeAt(0);
   document.getElementById("ascii").value=x;
 }
 function toascii() {
   var x=document.getElementById("ascii").value;
   x=String.fromCharCode(x);
   document.getElementById("char").value=x;
 }
 function checkascii() {
   var x=document.getElementById("ascii").value;
   if(x>=0 && x<=126)
   {
     document.getElementById("button2").disabled=false;
   }
   else {
     document.getElementById("button2").disabled=true;
     document.getElementById("ascci").value="";
   }
 }
 function todeci_comp() {
   var x=document.getElementById("decimal").value;
   x=parseInt(x,10);
   //var y;
   x=~x;
   //y=x.toString(2);
   document.getElementById("1s_comp").value=x;
 }
