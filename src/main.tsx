import React from "react";

import ReactDOM from "react-dom/client";
// import App from "./App";
import "./styles.scss";

ReactDOM.createRoot(document.getElementById("map") as HTMLElement).render(
  <React.StrictMode>
    <PigMap />
  </React.StrictMode>
);

import detectScroll from "./utils/scrolling";
const progressBar = document.querySelector(".progress-bar") as HTMLElement;
const preloader = document.querySelector("#preloader");
const up = document.querySelector("#up") as HTMLElement;
const headerElement = document.querySelector("header") as HTMLElement;
const socials = document.querySelectorAll(".social") as NodeListOf<HTMLElement>;
const scrolling = (sp: number) => {
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (sp / height) * 100;
  progressBar.style.width = scrolled + "%";
  if (scrolled > 5) {
    if (headerElement) {
      headerElement.classList.add("scrolled");
      up.classList.add("show");
    }
    if (socials) {
      socials.forEach((soc) => {
        soc.classList.add("show");
      });
    }
  } else {
    socials.forEach((soc) => {
      soc.classList.remove("show");
    });

    headerElement.classList.remove("scrolled");
    up.classList.remove("show");
  }
};
detectScroll(scrolling, 40);

const init = () => {
  if (preloader) {
    preloader.classList.add("hide-preloader");
  }
};
window.onload = init;
const jumpTargets = document.querySelectorAll(`[data-name]`);
const overlay = document.querySelector(".overlay");
const langList = document.querySelector(".lang-list") as HTMLElement;
const langBtns = document.querySelectorAll(".lang-btn");
langBtns?.forEach((langBtn) => {
  langBtn.addEventListener("click", openLang);
});

// dropDowns?.forEach((dm) => {
//   dm.addEventListener("click", dmClicked);
// });

function closeLang() {
  overlay?.classList.add("hide-overlay");
  overlay?.removeEventListener("click", closeLang);
  overlay?.classList.add("hide-overlay");

  langList?.classList.add("hide-lang-list");
}
function openLang() {
  overlay?.addEventListener("click", closeLang);
  overlay?.classList.remove("hide-overlay");
  langList.classList.remove("hide-lang-list");
}

// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
import { PigMap } from "./components/PigMap";
import debounce from "./utils/debounce";
// register Swiper custom elements

register();

const hamburger = document.querySelector(".hamburger") as HTMLDivElement;
const aside = document.querySelector("aside") as HTMLElement;
if (hamburger) {
  hamburger.addEventListener("click", () => {
    showAside();
  });
}

function hideAside() {
  overlay?.classList.add("hide-overlay");
  aside.classList.remove("show-aside");
  overlay?.removeEventListener("click", hideAside);
  aside?.removeEventListener("click", hideAside);
}

function showAside() {
  overlay?.classList.remove("hide-overlay");
  aside.classList.add("show-aside");
  overlay?.addEventListener("click", hideAside);
  aside.addEventListener("click", hideAside);
}

window.addEventListener("resize", (event) => {
  console.log("event", event);
});
