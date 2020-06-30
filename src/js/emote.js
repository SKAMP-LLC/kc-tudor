import { callAPI, getTemplate } from "./util.js";
import Mustache from "mustache";
const leftEmoticonTemplate = getTemplate('left');
const rightEmoticonTemplate = getTemplate('right');

const modifyDOM = (emote) => {
  let { character, dialog, direction, element, emotion, name, objectURL } = emote;

  let view = {
    character_name: name || character.charAt(0).toUpperCase() + character.toLowerCase().slice(1),
    character_name_class: character.toLowerCase(),
    character_dialog: dialog,
    character_emotion: `${character.toLowerCase()}_${emotion}`,
    objectURL: objectURL,
  };

  const emoteMarkup = Mustache.render(
    direction === 'left' ? leftEmoticonTemplate : rightEmoticonTemplate, view, 'utf8'
  );

  element.outerHTML = emoteMarkup;
};

const getAttributes = (element) => {
  const attributes = element.attributes;
  return {
    character: attributes.getNamedItem('character') ? attributes.getNamedItem('character').value : null,
    dialog: element.innerHTML,
    direction: attributes.getNamedItem('direction') ? attributes.getNamedItem('direction').value : null,
    element: element,
    emotion: attributes.getNamedItem('emotion') ? attributes.getNamedItem('emotion').value : null,
    name: attributes.getNamedItem('name') ? attributes.getNamedItem('name').value : null,
  }; 
}

const getEmoteData = async(element) => {
  let emoteData = getAttributes(element);
  emoteData.objectURL = await callAPI(emoteData.character, emoteData.emotion);
  return emoteData;
}

document.addEventListener("DOMContentLoaded", () => {
  let elements = Array.from(document.getElementsByTagName("emote"));
  Promise.all(elements.map((element) => getEmoteData(element)))
  .then((emoteData) => {
    emoteData.map((emote) => modifyDOM(emote));
  });
});
