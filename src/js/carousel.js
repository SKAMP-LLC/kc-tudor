import Siema from 'siema';

function highlightSlot(index, number_of_comics) {

  if (index < 0) { index = index + number_of_comics }
  else if (index > 3) { index = index % number_of_comics }
  
  document.querySelectorAll(`.comic_slot`).forEach((slot) => slot.classList.remove('color'));
  document.querySelectorAll(`.slot_${index}`).forEach((slot) => slot.classList.add('color'));
}

function sammySays(index, number_of_comics) {
  
  if (index < 0) { index = index + number_of_comics }
  else if (index > 3) { index = index % number_of_comics }
  
  const slot = document.querySelector(`.slot_${index}`);
  const title = document.querySelector('.title');
  const rating = document.querySelector('.rating');
  const description = document.querySelector('.description');

  title.textContent = slot.getAttribute('data-title');
  rating.textContent = slot.getAttribute('data-rating');
  description.textContent = slot.getAttribute('data-description');
}

document.addEventListener("DOMContentLoaded", () => {
  const number_of_comics = 7;
  const comicSlots = new Siema({
    perPage: 5,
    loop: true,
    startIndex: Math.floor(Math.random() * number_of_comics),
    onInit: function () {
      let middleSlide = this.currentSlide + 2;
      sammySays(middleSlide, number_of_comics);
      highlightSlot(middleSlide, number_of_comics);
    },
    onChange: function() {
      let middleSlide = this.currentSlide + 2;
      sammySays(middleSlide, number_of_comics);
      highlightSlot(middleSlide, number_of_comics);
    }
  });
  document.querySelector('.previous_slot').addEventListener('click', () => comicSlots.prev());
  document.querySelector('.next_slot').addEventListener('click', () => comicSlots.next());
});
