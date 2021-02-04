
function theDate(){
  let date= new Date();
  let day = date.getDate();
  let mnt = date.getMonth()+1;
  let yrs = date.getFullYear();
  let today=`${day}/${mnt}/${yrs}`;
  console.log(today); 
  document.getElementById("dt").innerText=today;
}

function clock(){
  let date= new Date();
  let sec = date.getSeconds();
  let min = date.getMinutes();
  let hrs = date.getHours();
  let time=`${hrs}:${min}:${sec}`;
  document.getElementById("clk").innerText=time;
}
let newvar;
clock()
theDate()
function starting(){
 newvar=setInterval(clock,1000); 
}
function ending(){
  clearInterval(newvar);
}

