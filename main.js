let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let mosab = document.querySelector(".mosab");
let mains = document.querySelector(".main");

window.onscroll = function () {
  let val = scrollY;
  stars.style.left = val + "px";
  moon.style.top = val * 4 + "px";
  mountains3.style.top = val * 2 + "px";
  mountains4.style.top = val * 1.5 + "px";
  river.style.top = val + "px";
  boat.style.top = val + "px";
  boat.style.left = val * 3 + "px";
  mosab.style.fontSize = val + "px";

  if (scrollY >= 65) {
    mosab.style.fontSize = 65 + "px";
    mosab.style.position = "fixed";
    if (scrollY >= 478) {
      mosab.style.display = "none";
    } else {
      mosab.style.display = "block";
    }
    if (scrollY >= 127) {
      mains.style.background = `linear-gradient(#376281,#10001f)`;
    } else {
      mains.style.background = `linear-gradient(#200016, #10001f)`;
    }
  }
};
