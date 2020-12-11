const title = document.querySelector(".js-clock");

const CLICKED_CLASS = "clicked";

function handleClick() {
title.classList.toggle(CLICKED_CLASS);
}

function a() {
title.addEventListener("click", handleClick);
}
a();