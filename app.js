"use strict";

const switchBtn = document.querySelector(".switch-btn");
const btn = document.querySelector(".switch");
const vid = document.querySelector(".vid-container");

switchBtn.addEventListener("click", () => {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    vid.pause();
  } else {
    btn.classList.remove("slide");
    vid.play();
  }
});

//pre-loader
const preLoader = document.querySelector(".pre-loader");

window.addEventListener("load", () => {
  preLoader.classList.add("hide-preloader");
});
