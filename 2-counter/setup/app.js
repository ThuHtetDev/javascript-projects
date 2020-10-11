const increase = document.getElementById("increase");
const reset    = document.getElementById("reset");
const decrease = document.getElementById("decrease");
const showCase = document.querySelector(".showCase");

let num = 0;
function addNum(num = 0){
    showCase.textContent = num;
}
    
increase.addEventListener("click",() => {
    num++;
    addNum(num);
});

decrease.addEventListener("click",() => {
    num--;
    addNum(num);
});

reset.addEventListener("click",() => {
    num = 0;
    addNum(num);
});