//grab DOM values
const day=document.getElementById("days");
const hour=document.getElementById('hours');
const min=document.getElementById('minutes');
const sec=document.getElementById('seconds');
const year=document.getElementById('year');
const image=document.getElementById('loading');

const currentYear=new Date().getFullYear();
//console.log(currentYear);
const newYearTime=new Date(`January 01 ${currentYear+1} 00:00:00`);
//console.log(newYearTime);
function countUpdate(){

    const diff=newYearTime-new Date();
    const d=Math.floor(diff/1000/60/60/24);
    const h=Math.floor(diff/1000/60/60)%24;
    const m=Math.floor(diff/1000/60)%60;
    const s=Math.floor(diff/1000)%60;
    days.innerText=d
    hours.innerHTML=h<10?'0'+h:h;
    minutes.innerText=m<10?'0'+m:m;
    seconds.innerHTML=s<10?'0'+s:s;
    year.innerText=currentYear+1;
}
//settimg spinner
setTimeout(()=>{
loading.remove();
countdown.style.display="flex";},1000);
//run every second
setInterval( countUpdate ,1000);
