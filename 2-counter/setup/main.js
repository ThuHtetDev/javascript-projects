const allbtn = document.querySelectorAll(".btn");
const val = document.querySelector(".value");
let count = 0;
allbtn.forEach((btn) => {
    btn.addEventListener('click',(e) => {
        let lists = e.currentTarget.classList;
        if(lists.contains('decrease')){
            count--;
        }else if(lists.contains('increase')){
            count++;
        }else{
            count = 0;
        }
        val.textContent = count;
    });
});