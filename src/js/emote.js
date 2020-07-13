import { createURL, getTemplate } from './util.js';
import Mustache from 'mustache';
const leftEmoticonTemplate = getTemplate('left');
const rightEmoticonTemplate = getTemplate('right');

const modifyDOM = (emote) => {
  const { character, dialog, side, element, emotion, name, url } = emote;

  const view = {
    character_name: name || character.charAt(0).toUpperCase() + character.toLowerCase().slice(1),
    character_name_class: character.toLowerCase(),
    character_dialog: dialog,
    character_emotion: `${character.toLowerCase()}_${emotion}`,
    url: url,
  };

  const emoteMarkup = Mustache.render(
    side === 'left' ? leftEmoticonTemplate : rightEmoticonTemplate, view, 'utf8'
  );

  element.outerHTML = emoteMarkup;
};

const getEmoteData = (element) => {
  const attributes = element.attributes;
  const emoteData = {
    character: attributes.getNamedItem('character') ? attributes.getNamedItem('character').value : null,
    dialog: element.innerHTML,
    side: attributes.getNamedItem('side') ? attributes.getNamedItem('side').value : null,
    element: element,
    emotion: attributes.getNamedItem('emotion') ? attributes.getNamedItem('emotion').value : null,
    name: attributes.getNamedItem('name') ? attributes.getNamedItem('name').value : null,
  };
  emoteData.url = createURL(emoteData.character, emoteData.emotion);
  return emoteData;
};

document.addEventListener('DOMContentLoaded', () => {
  const elements = Array.from(document.getElementsByTagName('emote'));
  const emotes = elements.map((element) => getEmoteData(element));
  emotes.map((emote) => modifyDOM(emote));
});
