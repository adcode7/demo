const timer=document.getElementById("root");
function timing(){
const indianTime=new Date().toLocaleTimeString();
timer.innerHTML=indianTime;
}
setInterval(timing,1000);

timer.style.fontSize = "150px";
timer.style.marginTop = "1vh";
timer.style.display = "flex";
timer.style.justifyContent = "center";
timer.style.alignItems = "center"; 


const timedis=document.querySelector('#root');
const paragraph=document.querySelector('.header');
const heading=document.querySelector('h1');




paragraph.innerHTML="This display the current time of indian standard time zone ";
paragraph.style.display="flex";
paragraph.style.fontSize="50px";
paragraph.style.color="yellow";
paragraph.style.textAlign="center";
paragraph.style.justifyContent="center";





heading.innerHTML="Indian Time Zone !";
heading.style.display="flex";
heading.style.justifyContent="center";
heading.style.textAlign="center";
heading.style.fontSize="100px";










