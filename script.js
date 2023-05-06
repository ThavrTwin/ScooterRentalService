document.getElementById("open-modal-rg").addEventListener("click",function(){
  document.getElementById("modal_op").classList.add("open")
})
document.getElementById("close-modal").addEventListener("click",function(){
  document.getElementById("modal_op").classList.remove("open")
})
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape"){
      document.getElementById("modal_op").classList.remove("open")
    }
});

document.querySelector("#modal_op .modal__reg").addEventListener('click', event => {
      event._isClickWithInModal = true;
});
document.getElementById("modal_op").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});