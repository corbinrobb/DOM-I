const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// ******************* SELECT CONTENT *************************
// Create new nav items and assign content
const navItem = document.createElement('a');
navItem.textContent = 'End';
navItem.setAttribute('href', '#');

const navItem2 = document.createElement('a');
navItem2.textContent = 'Start';
navItem2.setAttribute('href', '#');

// Select nav
const nav = document.querySelector('nav');

// Select anchors in nav
const navAnchors = Array.from(document.querySelectorAll('nav a'));

// Select .cta child elements
const cta = {
  h1: document.querySelector('.cta-text h1'),
  button: document.querySelector('.cta-text button'),
  img: document.querySelector('#cta-img')
};

// Select descendant elements of main-content
const mainContent = [
  Array.from(document.querySelectorAll(".top-content .text-content > *")),
  document.querySelector('#middle-img'),
  Array.from(document.querySelectorAll(".bottom-content .text-content > *"))
].flat();

// Select children of .contact
const contact = {
  h4: document.querySelector('.contact h4'),
  address: document.querySelector('.contact p:nth-child(2)'),
  phone: document.querySelector('.contact p:nth-child(3)'),
  email: document.querySelector('.contact p:nth-child(4)')
}

// Select footer
const footer = document.querySelector('footer p');



// ******************* ASSIGN CONTENT *************************
// Assign Nav anchors JSON content
navAnchors.forEach((navEl, index) => { 
  navEl.textContent = siteContent.nav[`nav-item-${index + 1}`];
});

// Append and prepend additional anchors
nav.appendChild(navItem);
nav.prepend(navItem2);

// Change nav color to green
const navChildren = Array.from(nav.children);
navChildren.forEach(navEl => navEl.style.color = 'green');

// Assign .cta JSON content
cta.h1.innerHTML = siteContent.cta.h1.split(' ').join(' <br> ');
cta.button.textContent = siteContent.cta.button;
cta.img.setAttribute('src', siteContent.cta["img-src"]);

// Assign .main-content
const siteContentMain = Object.values(siteContent['main-content']);
mainContent.forEach((e, i) => {
  return (i === 4) ? e.setAttribute('src', siteContentMain[i]) : e.textContent = siteContentMain[i];
});


// Assign .contact JSON content
contact.h4.textContent = siteContent.contact["contact-h4"];
contact.address.innerHTML = siteContent.contact["address"].split('t ').join('t<br>');
contact.phone.textContent = siteContent.contact["phone"];
contact.email.textContent = siteContent.contact["email"];

// Assign footer JSON content
footer.textContent = siteContent.footer.copyright;


// ******************* MAKE A BUTTON *************************
// Change colors on elements on button click
const changeH1ToRandomColor = () => {
   const randomColor = `rgb(${Math.floor(Math.random() * 250)}, ${Math.floor(Math.random() * 250)}, ${Math.floor(Math.random() * 250)})`;
   const randomColor2 = `rgb(${Math.floor(Math.random() * 250)}, ${Math.floor(Math.random() * 250)}, ${Math.floor(Math.random() * 250)})`;
   const body = document.querySelector('body');
   body.style.color = randomColor;
   body.style.backgroundColor = randomColor2;
   cta.button.style.color = randomColor;
   cta.button.style.backgroundColor = randomColor2;
   navChildren.forEach(navEl => navEl.style.color = randomColor);
}

cta.button.addEventListener('click', changeH1ToRandomColor);