const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("changeBtn");
const body = document.querySelector('body');
btn.addEventListener('click',function(){ 
        body.style.backgroundColor = colors[getSimpleRam()];
        document.querySelector('.show').textContent = colors[getSimpleRam()];
});
console.log('simple');
function getSimpleRam(){
    return Math.floor(Math.random() * Math.floor(colors.length))
}