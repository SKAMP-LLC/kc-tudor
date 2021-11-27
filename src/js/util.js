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
    const reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
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

export function createURL (char, emotion) {
  const url = new URL(`${settings.apiURL}`);
  url.searchParams.append('key', `${char}_${emotion}`);
  return url;
}

export function getTemplate (key) {
  switch (key) {
    case 'left':
      return `<div class="emote_wrapper left {{{character_name_class}}}">
                <div class="emote">
                  <img src="{{{url}}}" />
                  <span class="nameplate">{{{character_name}}}</span>
                </div>
                <div class="dialog">{{{character_dialog}}}</div>
              </div>`;
    case 'right':
      return `<div class="emote_wrapper right {{{character_name_class}}}">
                <div class="dialog">{{{character_dialog}}}</div>
                <div class="emote">
                  <img src="{{{url}}}" />
                  <span class="nameplate">{{{character_name}}}</span>
                </div>
              </div>`;
    default:
      console.error('No template matches ' + key);
  }
}
