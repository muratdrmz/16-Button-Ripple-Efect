const btnEl=document.querySelector('.btn');

btnEl.addEventListener('mouseover',(e)=>{
console.log(e.pageX, e.pageY);
const y=e.pageY-btnEl.offsetTop;
const x=e.pageX-btnEl.offsetLeft;

btnEl.style.setProperty('--xP', x+'px');
btnEl.style.setProperty('--yP', y+'px')
})