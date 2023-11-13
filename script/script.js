let screen=document.getElementById('screen');
let button1=document.getElementById('button1');
let button2=document.getElementById('button2');
let button3=document.getElementById('button3');
let button4=document.getElementById('button4');
let button5=document.getElementById('button5');
let button6=document.getElementById('button6');
let button7=document.getElementById('button7');
let button8=document.getElementById('button8');
let button9=document.getElementById('button9');
let button0=document.getElementById('button0');
let add=document.getElementById('add');
let subtract=document.getElementById('subtract');
let multiply=document.getElementById('multiply');
let underRoot=document.getElementById('underRoot');
let divide=document.getElementById('divide');
let modulus=document.getElementById('modulus');
let buttonDot=document.getElementById('buttonDot');
let clear=document.getElementById('clear');
let backspace=document.getElementById('backspace');
let equal=document.getElementById('equal');
button1.addEventListener('click',()=>{
  screen.innerHTML+="1";
});
button2.addEventListener('click',()=>{
  screen.innerHTML+=2;
});
button3.addEventListener('click',()=>{
  screen.innerHTML+=3;
});
button4.addEventListener('click',()=>{
  screen.innerHTML+=4;
});
button5.addEventListener('click',()=>{
  screen.innerHTML+=5;
});
button6.addEventListener('click',()=>{
  screen.innerHTML+=6;
});
button7.addEventListener('click',()=>{
  screen.innerHTML+=7;
});
button8.addEventListener('click',()=>{
  screen.innerHTML+=8;
});
button9.addEventListener('click',()=>{
  screen.innerHTML+=9;
});
button0.addEventListener('click',()=>{
  screen.innerHTML+=0;
});
add.addEventListener('click',()=>{
  screen.innerHTML+="+";
});
subtract.addEventListener('click',()=>{
  screen.innerHTML+="-";
});
multiply.addEventListener('click',()=>{
  screen.innerHTML+="*";
});
divide.addEventListener('click',()=>{
  screen.innerHTML+="/";
});
modulus.addEventListener('click',()=>{
  screen.innerHTML+="%";
});
buttonDot.addEventListener('click',()=>{
  screen.innerHTML+=".";
});
clear.addEventListener('click',()=>{
  screen.innerHTML="";
});
backspace.addEventListener('click',()=>{
  screen.innerHTML=screen.innerHTML.slice(0,-1);
});
underRoot.addEventListener('click',()=>{
  screen.innerHTML=Math.sqrt(screen.innerHTML);
});

equal.addEventListener("click", () => {
  let result = eval(screen.innerHTML);
  screen.innerHTML = result;
});





