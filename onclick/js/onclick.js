let goodmorning=(message, bgcolor, color)=>
{
  let tag=document.querySelector("#one");
  tag.innerText=message;
  tag.style.backgroundColor=bgcolor;
  tag.style.color=color;
}
let first=document.querySelector("#one1");
first.addEventListener('click',function(){
goodmorning('good morning','red','black');
});

let second=document.querySelector("#one2");
second.addEventListener('click',function(){
goodmorning('Good afternoon','black','red');
});
let third=document.querySelector("#one3");
third.addEventListener('click',function(){
goodmorning('good evening','red','yellow');
});
let four=document.querySelector("#one4");
four.addEventListener('click',function(){
goodmorning('good night','purple','white');
});