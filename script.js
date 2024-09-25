"use strict";

const box = document.querySelector(".box");

let observer = new MutationObserver((mutationRecors) => {
  console.log(mutationRecors);
});

observer.observe(box, { childList: true });

observer.disconnect();
