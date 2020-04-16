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
    makeEmoji('kona_confident', 'kona', 'normal', 'normal', 'normal', 'widesmile'),
    makeEmoji('kona_soars', 'kona', 'normal', 'normal', 'glee', 'smileopen'),
    makeEmoji('kona_happy', 'kona', 'perked', 'surprised', 'glee', 'widesmile'),
    makeEmoji('kona_frustrated', 'kona', 'flop', 'angry', 'normal', 'serious'),
    makeEmoji('kona_sincere', 'kona', 'normal', 'normal', 'glee', 'smile'),
    makeEmoji('kona_thinking', 'kona', 'perked', 'puzzled', 'uu', 'formal'),
    makeEmoji('kona_explain', 'kona', 'normal', 'surprised', 'normal', 'formal'),
    makeEmoji('kona_playful', 'kona', 'flop', 'normal', 'happy', 'widesmile'),
    makeEmoji('kona_scream', 'kona', 'perked', 'angry', 'glee', 'serious'),
    makeEmoji('kona_cry', 'kona', 'droop', 'sad', 'uu', 'pout'),
    makeEmoji('kona_oh', 'kona', 'normal', 'normal', 'glee', 'pout'),
    makeEmoji('kona_defeated', 'kona', 'droop', 'angry', 'uu', 'formal'),
    makeEmoji('kona_pleased', 'kona', 'perked', 'surprised', 'happy', 'smileopen'),
    makeEmoji('miko_defeated', 'miko', 'flop', 'sad', 'uu', 'pout'),
    makeEmoji('miko_sinister', 'miko', 'droop', 'sad', 'angry', 'pout'),
    makeEmoji('miko_playful', 'miko', 'normal', 'normal', 'uu', 'tongue'),
    makeEmoji('miko_happy', 'miko', 'normal', 'normal', 'happy', 'smile'),
    makeEmoji('miko_inquisitive', 'miko', 'normal', 'puzzled', 'normal', 'pout'),
    makeEmoji('miko_yell', 'miko', 'perked', 'angry', 'angry', 'serious'),
    makeEmoji('miko_talk', 'miko', 'normal', 'normal', 'normal', 'smileopen'),
    makeEmoji('miko_squeal', 'miko', 'perked', 'normal', 'glee', 'tongue'),
    makeEmoji('miko_sincere', 'miko', 'normal', 'normal', 'glee', 'smile'),
    makeEmoji('sandy_normal', 'sandy', 'normal', 'normal', 'normal', 'smile'),
    makeEmoji('sandy_excited', 'sandy', 'perked', 'normal', 'glee', 'smileopen'),
    makeEmoji('sandy_awkward', 'sandy', 'droop', 'puzzled', 'lookaway', 'smile'),
    makeEmoji('sandy_pout', 'sandy', 'droop', 'puzzled', 'lookaway', 'pout'),
    makeEmoji('sandy_complain', 'sandy', 'puzzled', 'serious', 'lookaway', 'yell'),
    makeEmoji('sandy_accepting', 'sandy', 'puzzled', 'serious', 'uu', 'smile'),
    makeEmoji('sandy_womp', 'sandy', 'puzzled', 'serious', 'uu', 'pout'),
    makeEmoji('sandy_upset', 'sandy', 'normal', 'sad', 'shocked', 'yell'),
    makeEmoji('sandy_plead', 'sandy', 'normal', 'sad', 'normal', 'yell'),
    makeEmoji('sandy_rage', 'sandy', 'normal', 'angry', 'angry', 'yell'),
    makeEmoji('sandy_cry', 'sandy', 'droop', 'sad', 'uu', 'pout'),
    makeEmoji('sandy_curious', 'sandy', 'perked', 'serious', 'happy', 'serious'),
    makeEmoji('sandy_doubt', 'sandy', 'perked', 'puzzled', 'squint', 'serious'),
    makeEmoji('sandy_worried', 'sandy', 'droop', 'sad', 'uu', 'formal'),
    makeEmoji('sandy_confused', 'sandy', 'puzzled', 'puzzled', 'lookaway', 'serious'),
    makeEmoji('steve_manager_exhausted', 'steve', 'normal', 'broom', 'sleepy', 'serious'),
    makeEmoji('steve_manager_firm', 'steve', 'normal', 'broom', 'angry', 'formal'),
    makeEmoji('steve_manager_inquisitive', 'steve', 'normal', 'broom', 'normal', 'serious'),
    makeEmoji('steve_manager_speaking', 'steve', 'normal', 'broom', 'normal', 'talk'),
    makeEmoji('steve_attendant_suggest', 'steve', 'normal', 'cap', 'sleepy', 'talk'),
    makeEmoji('steve_attendant_concerned', 'steve', 'normal', 'cap', 'sleepy', 'formal'),
    makeEmoji('steve_attendant_confused', 'steve', 'normal', 'cap', 'closed', 'formal'),
    makeEmoji('steve_attendant_frustrated', 'steve', 'normal', 'cap', 'closed', 'upset'),
  ]).then((emotes) => {
    emotes.forEach((emote) => {
      document.querySelectorAll('.' + emote['key']).forEach((elem) => {
        // Set the background of the emote to the merged png asset.
        elem.style.backgroundImage = "url(" + emote['image'] + ")";
        // Set the nameplate of the emoji to the data attribute.

      });
    });
  });
});
