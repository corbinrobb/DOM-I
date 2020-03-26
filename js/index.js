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

// Select anchors in nav
const navAnchors = Array.from(document.querySelectorAll('nav a'));

// Select .cta child elements
const cta = {
  h1: document.querySelector('.cta-text h1'),
  button: document.querySelector('.cta-text button'),
  img: document.querySelector('#cta-img')
};

// Select descendant elements of main-content
const mainContent = {
  top: {
    features: {
      h4: document.querySelector('.top-content div:first-child h4'),
      p: document.querySelector('.top-content div:first-child p')
    },
    about: {
      h4: document.querySelector('.top-content div:last-child h4'),
      p: document.querySelector('.top-content div:last-child p')
    }
  },
  middle: {
    img: document.querySelector('#middle-img')
  },
  bottom: {
    services: {
      h4: document.querySelector('.bottom-content div:nth-child(1) h4'),
      p: document.querySelector('.bottom-content div:nth-child(1) p')
    },
    product: {
      h4: document.querySelector('.bottom-content div:nth-child(2) h4'),
      p: document.querySelector('.bottom-content div:nth-child(2) p')
    },
    vision: {
      h4: document.querySelector('.bottom-content div:nth-child(3) h4'),
      p: document.querySelector('.bottom-content div:nth-child(3) p')
    }
  }
};

// Select children of .contact
const contact = {
  h4: document.querySelector('.contact h4'),
  address: document.querySelector('.contact p:nth-child(2)'),
  phone: document.querySelector('.contact p:nth-child(3)'),
  email: document.querySelector('.contact p:nth-child(4)')
}

// Select footer
const footer = document.querySelector('footer p');


// Assign Nav anchors JSON content
navAnchors.forEach((navEl, index) => navEl.textContent = siteContent.nav[`nav-item-${index + 1}`]);

// Assign .cta JSON content
cta.h1.textContent = siteContent.cta.h1;
cta.button.textContent = siteContent.cta.button;
cta.img.setAttribute('src', siteContent.cta["img-src"]);


// Assign .main-content .top-content JSON content
mainContent.top.features.h4.textContent = siteContent["main-content"]["features-h4"];
mainContent.top.features.p.textContent = siteContent["main-content"]["features-content"];

mainContent.top.about.h4.textContent = siteContent["main-content"]["about-h4"];
mainContent.top.about.p.textContent = siteContent["main-content"]["about-content"];


// Assign .main-content .middle-content JSON content
mainContent.middle.img.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Assign .main-content .bottom-content JSON content
mainContent.bottom.services.h4.textContent = siteContent["main-content"]["services-h4"];
mainContent.bottom.services.p.textContent = siteContent["main-content"]["services-content"];

mainContent.bottom.product.h4.textContent = siteContent["main-content"]["product-h4"];
mainContent.bottom.product.p.textContent = siteContent["main-content"]["product-content"];

mainContent.bottom.vision.h4.textContent = siteContent["main-content"]["vision-h4"];
mainContent.bottom.vision.p.textContent = siteContent["main-content"]["vision-content"];

// Assign .contact JSON content
contact.h4.textContent = siteContent.contact["contact-h4"];
contact.address.textContent = siteContent.contact["address"];
contact.phone.textContent = siteContent.contact["phone"];
contact.email.textContent = siteContent.contact["email"];

// Assign footer JSON content
footer.textContent = siteContent.footer.copyright;