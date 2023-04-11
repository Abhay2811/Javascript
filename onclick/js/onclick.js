let goodmorning=(message, bgcolor, color)=>
{
  let tag=document.querySelector("#messages");
  tag.innerText=message;
  tag.style.backgroundColor=bgcolor;
  tag.style.color=color;
}
let first=document.querySelector("#morning");
first.addEventListener('click',function(){
goodmorning('good morning','red','black');
});

let second=document.querySelector("#afternoon");
second.addEventListener('click',function(){
goodmorning('Good afternoon','black','red');
});
let third=document.querySelector("#evening");
third.addEventListener('click',function(){
goodmorning('good evening','red','yellow');
});
let four=document.querySelector("#night");
four.addEventListener('click',function(){
goodmorning('good night','purple','white');
});