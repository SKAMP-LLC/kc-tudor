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
  'sandy_excited': makeEmoji('sandy_excited', 'sandy', 'perked', 'normal', 'glee', 'smileopen'),
  'sandy_humble': makeEmoji('sandy_awkward', 'sandy', 'droop', 'puzzled', 'lookaway', 'smile'),
  'sandy_pout': makeEmoji('sandy_pout', 'sandy', 'droop', 'puzzled', 'lookaway', 'pout'),
  'sandy_complain': makeEmoji('sandy_complain', 'sandy', 'puzzled', 'serious', 'lookaway', 'yell'),
  'sandy_upset': makeEmoji('sandy_upset', 'sandy', 'normal', 'sad', 'shocked', 'yell'),
  'sandy_rage': makeEmoji('sandy_rage', 'sandy', 'normal', 'angry', 'angry', 'yell'),
  'sandy_cry': makeEmoji('sandy_cry', 'sandy', 'droop', 'sad', 'uu', 'pout'),
  'jill_excited': makeEmoji('jill_excited', 'jill', 'droop', 'puzzled', 'lookaway', 'yell'),
  'steve_manager_exhausted': makeEmoji('steve_manager_exhausted', 'steve', 'normal', 'broom', 'sleepy', 'serious'),
  'steve_manager_firm': makeEmoji('steve_manager_firm', 'steve', 'normal', 'broom', 'angry', 'formal'),
  'steve_manager_inquisitive': makeEmoji('steve_manager_inquisitive', 'steve', 'normal', 'broom', 'normal', 'serious'),
  'steve_manager_speaking': makeEmoji('steve_manager_speaking', 'steve', 'normal', 'broom', 'normal', 'talk'),
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
