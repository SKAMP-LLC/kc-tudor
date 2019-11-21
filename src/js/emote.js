import mergeImages from 'merge-images';

export const assets = {
  sandy: {
    hair: {
      base: require('@/emotes/sandy/sandy_hair_base.png'),
    },
    ears: {
      droop: require('@/emotes/sandy/sandy_ears_droop.png'),
      normal: require('@/emotes/sandy/sandy_ears_normal.png'),
      perked: require('@/emotes/sandy/sandy_ears_perked.png'),
      sad: require('@/emotes/sandy/sandy_ears_sad.png'),
    },
    head: {
      base: require('@/emotes/sandy/sandy_head_base.png'),
    },
    eyes: {
      angry: require('@/emotes/sandy/sandy_eyes_angry.png'),
      astonished: require('@/emotes/sandy/sandy_eyes_astonished.png'),
      glee: require('@/emotes/sandy/sandy_eyes_glee.png'),
      happy: require('@/emotes/sandy/sandy_eyes_happy.png'),
      lookaway: require('@/emotes/sandy/sandy_eyes_lookaway.png'),
      normal: require('@/emotes/sandy/sandy_eyes_normal.png'),
      squint: require('@/emotes/sandy/sandy_eyes_squint.png'),
      surprised: require('@/emotes/sandy/sandy_eyes_surprised.png'),
      uu: require('@/emotes/sandy/sandy_eyes_uu.png'),
      x: require('@/emotes/sandy/sandy_eyes_x.png'),
    },
    eyebrow: {
      angry: require('@/emotes/sandy/sandy_eyebrow_angry.png'),
      inquisitive: require('@/emotes/sandy/sandy_eyebrow_inquisitive.png'),
      normal: require('@/emotes/sandy/sandy_eyebrow_normal.png'),
      sad: require('@/emotes/sandy/sandy_eyebrow_sad.png'),
      serious: require('@/emotes/sandy/sandy_eyebrow_serious.png'),
    },
    mouth: {
      formal: require('@/emotes/sandy/sandy_mouth_formal.png'),
      pout: require('@/emotes/sandy/sandy_mouth_pout.png'),
      sad: require('@/emotes/sandy/sandy_mouth_sad.png'),
      serious: require('@/emotes/sandy/sandy_mouth_serious.png'),
      smile: require('@/emotes/sandy/sandy_mouth_smile.png'),
      smileopen: require('@/emotes/sandy/sandy_mouth_smileopen.png'),
      yell: require('@/emotes/sandy/sandy_mouth_yell.png'),
    },
  }
};

let mergedAssets = {
  'sandy_normal': makeEmoji('sandy_normal', 'sandy', 'base', 'normal', 'base', 'normal', 'normal', 'smile'),
  'sandy_happy': makeEmoji('sandy_happy', 'sandy', 'base', 'normal', 'base', 'normal', 'normal', 'smileopen'),
  'sandy_surprised': makeEmoji('sandy_surprised', 'sandy', 'base', 'perked', 'base', 'surprised', 'normal', 'yell'),
  'sandy_oof': makeEmoji('sandy_oof', 'sandy', 'base', 'droop', 'base', 'x', 'sad', 'pout'),
  'sandy_whoa': makeEmoji('sandy_whoa', 'sandy', 'base', 'perked', 'base', 'uu', 'serious', 'smileopen'),
};

function makeEmoji(key, character, hair, ears, head, eyes, eyebrows, mouth) {
  mergeImages([
    assets[character].hair[hair],
    assets[character].ears[ears],
    assets[character].head[head],
    assets[character].eyes[eyes],
    assets[character].eyebrow[eyebrows],
    assets[character].mouth[mouth],
  ]).then((merged) => {
    mergedAssets[key] = merged;
  });
}

window.getEmoji = (id, emote) => {
  document.getElementById(id)
}

document.addEventListener("DOMContentLoaded", () => {
  Object.keys(mergedAssets).forEach((emote) => {
    document.querySelectorAll('.' + emote).forEach((elem) => {
      elem.style.backgroundImage = "url(" + mergedAssets[emote] + ")";
    });
  });
});
