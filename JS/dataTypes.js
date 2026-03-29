const input= document.getElementById("name");
const output=document.getElementById("output");
const button=document.getElementById("bttn");

function ShowName(){
  let value=input.value.trim();

  if(value===""){
    output.innerHTML="Type Again";
    output.style.color="red";
  return;
}
output.innerHTML="k xa "+value;
output.style.color="green";
}
button.addEventListener("click",ShowName);

input.addEventListener("keypress",function(e){
  if(e.key==="Enter"){
    ShowName();
  }
});
const display=document.getElementById("display");
const buttons=document.querySelectorAll(".btn,.equal");
const clear=document.getElementById("clear");
const backspace=document.getElementById("backspace");
const msg=document.getElementById("msg");

function showMessage(text,color){
  msg.textContent=text;
  msg.style.color=color;
  setTimeout(()=>{
    msg.textContent="";
  },2000);
};

buttons.forEach(btn=>{
  btn.addEventListener("click",function(){
  let value=btn.innerText;
  if(value==="="){
    if(display.value!==""){
      display.value=eval(display.value);
      showMessage("Calculating.....", "green");
      
    }
  }else{display.value+=value;}
});
});
clear.addEventListener("click",function(){
  display.value="";
});
backspace.addEventListener("click",function(){
 display.value=display.value.slice(0,-1);
});
