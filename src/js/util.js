function hasClass(el, className) {
  if (el.classList)
    return el.classList.contains(className)
  else
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
}

export function addClass(el, className) {
  if (el.classList)
    el.classList.add(className)
  else if (!hasClass(el, className)) el.className += " " + className
}

export function removeClass(el, className) {
  if (el.classList)
    el.classList.remove(className)
  else if (hasClass(el, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
    el.className=el.className.replace(reg, ' ')
  }
}

export function refreshImage(el) {
  jQuery(el).css({backgroundImage: ""});
  let oldSrc = jQuery(el).css("background-image").slice(5, -2);
  let img = document.createElement('img');
  img.src = oldSrc + "?p" + new Date().getTime();
  jQuery(img).load(function(){
    jQuery(el).css({backgroundImage: "url("+img.src+")"});
  });
}