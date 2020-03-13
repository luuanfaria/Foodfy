const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card')

for (let card of cards) {
  card.addEventListener("click", function () {

    modalOverlay.querySelector('img').src =
    card.querySelector('img').src

    modalOverlay.querySelector('h2').innerHTML =
    card.querySelector('.title-content').innerHTML

    modalOverlay.querySelector('p').innerHTML =
    card.querySelector('.author').innerHTML

    modalOverlay.classList.add('active')
  })
}

document.querySelector('.close-modal').addEventListener("click", function(){
  modalOverlay.classList.remove("active")
})




/* for (let card of cards) {
  card.addEventListener("click", function(){
    const imageID = card.getAttribute("id");
    modalOverley.classList.add('active')
    modalOverley.querySelector('iframe').src = `../assets/images/${imageID}.PNG`;
  })
} */