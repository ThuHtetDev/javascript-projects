// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const modelBtn = document.querySelector('.modelBtn');
const model =document.querySelector(".model");
const close = document.querySelector("#closeBtn");
modelBtn.addEventListener('click',()=>{
    model.classList.remove("nonblock");
    model.classList.add("block");
});

close.addEventListener('click',()=>{
    model.classList.add("nonblock");
    model.classList.remove("block");
});