let mainEl = document.querySelector('main');

mainEl.style.backgroundColor = 'var(--main-bg)';

mainEl.innerHTML = `<h1>Dom Manipulation<h1/>`;

mainEl.classList.add('flex-ctr');

//let topMenuEl = `<nav id="top-menu">`
let topMenuEl = document.getElementById('top-menu');
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add('flex-around');

let menuLinks = [
  { text: 'about', href: '/about' },
  { text: 'catalog', href: '/catalog' },
  { text: 'orders', href: '/orders' },
  { text: 'account', href: '/account' },
];

menuLinks.forEach((link) => {
    let newAElement = document.createElement('a');
    newAElement.href = link.href;
    newAElement.innerText = link.text;
    topMenuEl.appendChild(newAElement);
})