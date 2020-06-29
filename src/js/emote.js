import { callAPI, getTemplate } from "./util.js";
import Mustache from "mustache";
const leftEmoticonTemplate = getTemplate('left');
const rightEmoticonTemplate = getTemplate('right');

document.addEventListener("DOMContentLoaded", () => {
  let emotes = document.getElementsByTagName("emote");

  for(let emote of emotes) {
    const attributes = emote.attributes;
    const character = attributes.getNamedItem('character') ? attributes.getNamedItem('character').value : null;
    const direction = attributes.getNamedItem('direction') ? attributes.getNamedItem('direction').value : null;
    const emotion = attributes.getNamedItem('emotion') ? attributes.getNamedItem('emotion').value : null;
    const name = attributes.getNamedItem('name') ? attributes.getNamedItem('name').value : null;

    // Character, Direction and Emotion are required.
    // Name is optional.
    if(character && direction && emotion) {
      const dialog = emote.innerHTML;

      callAPI(character, emotion).then((data) => {
        let view = {
          character_name: name || character.charAt(0).toUpperCase() + character.toLowerCase().slice(1),
          character_name_class: character.toLowerCase(),
          character_dialog: dialog,
          character_emotion: `${character.toLowerCase()}_${emotion}`,
          objectURL: data,
        };

        const emoteMarkup = Mustache.render(
          direction === 'left' ? leftEmoticonTemplate : rightEmoticonTemplate, view, 'utf8'
        );

        emote.outerHTML = emoteMarkup;
      });
    }
  }
});
