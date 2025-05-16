let mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = `<h1>Dom Manipulation<h1/>`;
mainEl.classList.add("flex-ctr");

//let topMenuEl = `<nav id="top-menu">`
let topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

let menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

menuLinks.forEach((link) => {
  let newAElement = document.createElement("a");
  newAElement.href = link.href;
  newAElement.innerText = link.text;
  topMenuEl.appendChild(newAElement);
});

const subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

let anchorTags = document.querySelectorAll("a");


function buildSubmenu (links) {
  subMenuEl.replaceChildren([]);
  links.forEach((link) => {
  let newAElement = document.createElement('a')
  newAElement.href = link.href
  newAElement.textContent = link.text
  subMenuEl.appendChild(newAElement);
  })


}
topMenuEl.addEventListener("click", (e) => {
  e.preventDefault();
  Array.from(e.target.parentElement.children).forEach((child) => {
    if (child.classList.contains("active")) {
      child.classList.remove("active");
    }
  });

  if (e.target.nodeName !== "A") return;

  console.log(e.target);

  if (e.target.classList.contains("active")) {
    e.target.classList.remove("active");
  } else {
    e.target.classList.add("active");
    let anchorText = e.target.innerText.toLowerCase()
    let targetLink;

    menuLinks.forEach((link) => {

      if (anchorText === link.text) {

        if (link.hasOwnProperty('subLinks')) {
          targetLink = link;
          subMenuEl.style.top = '100%';
          buildSubmenu(link.subLinks)
          return;

        } else {
          subMenuEl.style.top = '0';
          return;
        };
      };
    });
  };
});

subMenuEl.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.nodeName !== 'A') return;
  
  subMenuEl.style.top = '0'
  Array.from(topMenuEl.children).forEach((child) => {
    if (child.classList.contains("active")) {
      child.classList.remove("active");
    }
  })
  mainEl.innerHTML = `<h1>${e.target.textContent}<h1/>`;

})