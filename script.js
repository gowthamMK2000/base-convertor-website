function toconvert(){
  var x=document.getElementById("input").value;
  x=parseInt(x,10);
  var y=document.getElementById("output").value;
  y=parseInt(y,10);
  var input=document.getElementById("input_text").value;
  input=parseInt(input,x);
  var output=input.toString(y);
  document.getElementById("output_text").value=output;

}



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
    var y=x.charAt(x.length-1);
    //x=x%10;
    if(y!=0 && y!=1)
    {  alert("not a binary value");
      document.getElementById("binary").value=x.slice(0,x.length-2);
      //document.getElementsByName('text').value="";
    }
    else {
    }
  }
  function checkoctal(){
    var x=document.getElementById("octal").value;
    var y=x.charAt(x.length-1);
    if(y>=0 && y<=7)
    {

    }
    else {
           alert("not a octal value");
           document.getElementById("octal").value=x.slice(0,x.length-2);
    }
  }
  function checkdeci(){
    var x=document.getElementById("decimal").value;
    var y=x.charAt(x.length-1);
    if(y>=0 && y<=9)
    {
    }
    else {
      alert("not a decimal value");
      document.getElementById("decimal").value=x.slice(0,x.length-2);
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
     document.getElementById("ascii").value="";
     alert("invalid ascii value");
   }
 }
