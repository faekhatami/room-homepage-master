// data for changing image
const descriptionParagraphs = [
  `We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.`,
  `With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities  throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.`,
  `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.`,
];

const descriptionTitles = [
  `Discover innovative ways to decorate`,
  `We are available all across the globe`,
  `Manufactured with the best materials`,
];

// variables

const moveBtns = document.querySelectorAll(".move-btn");
const elementsMaxIndex = descriptionTitles.length - 1;
const animationDur = 0.4;

let currentIndex = 0;
let descriptionTitleEl = document.querySelector(
  ".description-section .main-title"
);
let descriptionParEl = document.querySelector(".description-section__content");
let mainImageTag = document.querySelector(".header__img-container img");
let mainPictureSourceTag = document.querySelector(
  ".header__img-container source"
);
let shopNowBtn = document.querySelector(".description-section__btn");
let animationInProgress = false;

// functions

function animateEl(imgEl, dur = animationDur) {
  animationInProgress = true;
  imgEl.style.animation = `showImage ${dur}s ease-in`;
  setTimeout(() => {
    imgEl.style.animation = ``;
    animationInProgress = false;
  }, dur * 1000);
}

function changeText(el, dataForEl, curInd) {
  el.innerText = dataForEl[curInd];
  animateEl(el);
}

// eventListeners

moveBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    if (animationInProgress) return;
    let direction = btn.id === "forw" ? 1 : -1;
    currentIndex =
      currentIndex === 0 && direction === -1
        ? elementsMaxIndex
        : (currentIndex + direction) % 3;
    changeText(descriptionTitleEl, descriptionTitles, currentIndex);
    changeText(descriptionParEl, descriptionParagraphs, currentIndex);
    mainImageTag.setAttribute(
      "src",
      `images/mobile-image-hero-${currentIndex + 1}.jpg`
    );
    mainPictureSourceTag.setAttribute(
      "srcset",
      `images/desktop-image-hero-${currentIndex + 1}.jpg`
    );
    animateEl(mainImageTag);
    animateEl(shopNowBtn);
  })
);
