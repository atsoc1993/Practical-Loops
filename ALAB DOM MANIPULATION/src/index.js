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
subMenuEl.style.backgroundColor = "var(--subMenu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";
let anchorTags = document.querySelectorAll("a");
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
    let ancorText = e.target.innerText.toLowerCase()
    let targetLink;
    menuLinks.forEach((link)=>{
      if(ancorText === link.text){
        console.log(ancorText,link)
        if(link.hasOwnProperty('subLinks')){
          targetLink = link;
          subMenuEl.style.top = '100%'
          subMenuEl.style.backgroundColor ='blue'
          return
        }else{
          subMenuEl.style.top = '0'
          subMenuEl.style.backgroundColor ='red'
          return
        }
      }
    })
  }
});