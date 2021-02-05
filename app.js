const myNodelist = document.getElementsByTagName('LI');
let i;
for (i = 0; i < myNodelist.length; i++) {
  const span = document.createElement('SPAN');
  const txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
