const modalOverley = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card')

for (let card of cards) {
  card.addEventListener("click", function(){
    const imageID = card.getAttribute("id");
    modalOverley.classList.add('active')
    modalOverley.querySelector('iframe').src = `../assets/images/${imageID}.PNG`;
  })
}

document.querySelector('.close-modal').addEventListener("click", function(){
  modalOverley.classList.remove("active")
  modalOverley.querySelector('iframe').src = ""
})