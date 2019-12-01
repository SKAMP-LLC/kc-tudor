import mergeImages from 'merge-images';
import sandy from './emotes/sandy';
import kona from './emotes/kona';
import jill from './emotes/jill';
import maxine from './emotes/maxine';
import miko from './emotes/miko';
import steve from './emotes/steve';

export const assets = {
  sandy: sandy,
  kona: kona,
  jill: jill,
  maxine: maxine,
  miko: miko,
  steve: steve,
};

let mergedAssets = {
  'sandy_normal': makeEmoji('sandy_normal', 'sandy', 'normal', 'normal', 'normal', 'smile'),
  'kona_happy': makeEmoji('kona_happy', 'kona', 'perked', 'normal', 'glee', 'widesmile'),
  'maxine_greedy': makeEmoji('maxine_greedy', 'maxine', 'flop', 'angry', 'gleam', 'oh'),
  'miko_whoa': makeEmoji('miko_whoa', 'miko', 'perked', 'surprised', 'happy', 'smileopen'),
  'jill_excited': makeEmoji('jill_excited', 'jill', 'droop', 'puzzled', 'lookaway', 'yell'),
  'steve_pringles': makeEmoji('steve_pringles', 'steve', 'normal', 'pringles', 'normal', 'grin'),
};

function makeEmoji(key, character, head, eyebrow, eyes, mouth) {
  mergeImages([
    assets[character].head[head],
    assets[character].eyebrow[eyebrow],
    assets[character].eyes[eyes],
    assets[character].mouth[mouth],
  ]).then((merged) => {
    mergedAssets[key] = merged;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  Object.keys(mergedAssets).forEach((emote) => {
    document.querySelectorAll('.' + emote).forEach((elem) => {
      elem.style.backgroundImage = "url(" + mergedAssets[emote] + ")";
    });
  });
});
