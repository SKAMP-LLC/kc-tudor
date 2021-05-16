import Siema from 'siema';
import { addClass, refreshImage, removeClass } from './util.js';

function highlightSlot (index, numberOfComics) {
  if (index < 0) {
    index = index + numberOfComics;
  } else if (index > 3) {
    index = index % numberOfComics;
  }

  document.querySelectorAll('.comic_slot').forEach((slot) => slot.classList.remove('color'));
  document.querySelectorAll(`.slot_${index}`).forEach((slot) => slot.classList.add('color'));
}

function sammySays (index, numberOfComics) {
  if (index < 0) {
    index = index + numberOfComics;
  } else if (index > 3) {
    index = index % numberOfComics;
  }

  const slot = document.querySelector(`.slot_${index}`);
  const sandy = document.querySelector('.sandy');
  const title = document.querySelector('.title');
  const rating = document.querySelector('.rating');
  const description = document.querySelector('.description');
  for (let i = 0; i < numberOfComics; i++) {
    removeClass(sandy, `sandy_${i}`);
  }
  addClass(sandy, `sandy_${index}`);
  refreshImage(sandy);
  title.textContent = slot.getAttribute('data-title');
  rating.textContent = slot.getAttribute('data-rating');
  description.textContent = slot.getAttribute('data-description');
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.body.contains(document.querySelector('.siema'))) {
    const numberOfComics = 16;
    const comicSlots = new Siema({
      perPage: 5,
      loop: true,
      startIndex: Math.floor(Math.random() * numberOfComics),
      onInit: function () {
        const middleSlide = this.currentSlide + 2;
        sammySays(middleSlide, numberOfComics);
        highlightSlot(middleSlide, numberOfComics);
      },
      onChange: function () {
        const middleSlide = this.currentSlide + 2;
        sammySays(middleSlide, numberOfComics);
        highlightSlot(middleSlide, numberOfComics);
      },
    });
    document.querySelector('.previous_slot').addEventListener('click', () => comicSlots.prev());
    document.querySelector('.next_slot').addEventListener('click', () => comicSlots.next());
  }
});
