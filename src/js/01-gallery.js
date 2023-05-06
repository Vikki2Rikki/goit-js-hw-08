// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

const galleryItemsMarcup = createGalleryItems(galleryItems);

function createGalleryItems(galleryItems){
   return galleryItems.map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
   <a class="gallery__link" href="${ original }">
      <img class="gallery__image" src="${ preview }" alt="${ description }" />
   </a>
</li>
      `;
   })
   .join('');
}

galleryContainer.insertAdjacentHTML('beforeend', galleryItemsMarcup);


   var lightbox = new SimpleLightbox('.gallery__link', { captionsData: "alt", captionDelay: "250", enableKeyboard: "true" });

 