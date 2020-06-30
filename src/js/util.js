import settings from './settings.js';

function hasClass (el, className) {
  if (el.classList) return el.classList.contains(className);
  else return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
}

export function addClass (el, className) {
  if (el.classList) el.classList.add(className);
  else if (!hasClass(el, className)) el.className += ' ' + className;
}

export function removeClass (el, className) {
  if (el.classList) el.classList.remove(className);
  else if (hasClass(el, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
    el.className = el.className.replace(reg, ' ');
  }
}

export function refreshImage (el) {
  jQuery(el).css({ backgroundImage: '' });
  const oldSrc = jQuery(el).css('background-image').slice(5, -2);
  const img = document.createElement('img');
  img.src = oldSrc + '?p' + new Date().getTime();
  jQuery(img).load(function () {
    jQuery(el).css({ backgroundImage: 'url(' + img.src + ')' });
  });
}

export function callAPI (char, emotion) {
  function createURL (response) {
    return URL.createObjectURL(response);
  }

  function readResponseAsBlob (response) {
    return response.blob();
  }

  return fetch(settings.apiURL, {
    method: 'GET',
    headers: {
      key: `${char}_${emotion}`,
    }
  })
    .then(readResponseAsBlob)
    .then(createURL);
}

export function getTemplate (key) {
  switch (key) {
    case 'left':
      return `<div class="emote_wrapper left {{{character_name_class}}}">
                <div class="emote">
                  <img id="{{{uuid}}}" src="{{{objectURL}}}" />
                  <span class="nameplate">{{{character_name}}}</span>
                </div>
                <div class="dialog">{{{character_dialog}}}</div>
              </div>`;
    case 'right':
      return `<div class="emote_wrapper right {{{character_name_class}}}">
                <div class="dialog">{{{character_dialog}}}</div>
                <div class="emote">
                  <img id="{{{uuid}}}" src="{{{objectURL}}}" />
                  <span class="nameplate">{{{character_name}}}</span>
                </div>
              </div>`;
    default:
      console.error('No template matches ' + key);
  }
}
