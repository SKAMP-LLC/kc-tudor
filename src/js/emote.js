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

function makeEmoji(key, character, head, eyebrow, eyes, mouth) {
  return new Promise((resolve, reject) => {
    mergeImages([
      assets[character].head[head],
      assets[character].eyebrow[eyebrow],
      assets[character].eyes[eyes],
      assets[character].mouth[mouth],
    ]).then((b64) => {
      resolve({key: key, image: b64});
    }, (err) => {
      console.error('mergeImages failed.');
      reject(err);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  Promise.all([
    makeEmoji('sandy_normal', 'sandy', 'normal', 'normal', 'normal', 'smile'),
    makeEmoji('sandy_excited', 'sandy', 'perked', 'normal', 'glee', 'smileopen'),
    makeEmoji('sandy_awkward', 'sandy', 'droop', 'puzzled', 'lookaway', 'smile'),
    makeEmoji('sandy_pout', 'sandy', 'droop', 'puzzled', 'lookaway', 'pout'),
    makeEmoji('sandy_complain', 'sandy', 'puzzled', 'serious', 'lookaway', 'yell'),
    makeEmoji('sandy_upset', 'sandy', 'normal', 'sad', 'shocked', 'yell'),
    makeEmoji('sandy_rage', 'sandy', 'normal', 'angry', 'angry', 'yell'),
    makeEmoji('sandy_cry', 'sandy', 'droop', 'sad', 'uu', 'pout'),
    makeEmoji('steve_manager_exhausted', 'steve', 'normal', 'broom', 'sleepy', 'serious'),
    makeEmoji('steve_manager_firm', 'steve', 'normal', 'broom', 'angry', 'formal'),
    makeEmoji('steve_manager_inquisitive', 'steve', 'normal', 'broom', 'normal', 'serious'),
    makeEmoji('steve_manager_speaking', 'steve', 'normal', 'broom', 'normal', 'talk'),
  ]).then((emotes) => {
    emotes.forEach((emote) => {
      document.querySelectorAll('.' + emote['key']).forEach((elem) => {
        elem.style.backgroundImage = "url(" + emote['image'] + ")";
      });
    });
  });
});
