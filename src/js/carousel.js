import Siema from 'siema';

function sammy_says(index) {
  if (index < 0) { index = index + 4 }
  else if (index > 3) { index = index % 4 }
  
  const slot = document.querySelector(`.slot_${index}`);
  const title = document.querySelector('.title');
  const rating = document.querySelector('.rating');
  const dscription = document.querySelector('.description');

  title.textContent = slot.getAttribute('data-title');
  rating.textContent = slot.getAttribute('data-rating');
  dscription.textContent = slot.getAttribute('data-description');
}

document.addEventListener("DOMContentLoaded", () => {
  const comicSlots = new Siema({
    perPage: 4,
    loop: true,
    onInit: function () {
      sammy_says(this.currentSlide)
    },
    onChange: function() {
      sammy_says(this.currentSlide)
    }
  });
  document.querySelector('.previous_slot').addEventListener('click', () => comicSlots.prev());
  document.querySelector('.next_slot').addEventListener('click', () => comicSlots.next());
});
