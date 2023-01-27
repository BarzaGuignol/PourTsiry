const lights = document.querySelectorAll(".js-headlights"),
  lightsWrap = document.querySelectorAll(".js-headlights-wrap"),
  car = document.querySelector(".js-car-svg"),
  btn = document.querySelector(".js-btn"),
  btnText = document.querySelector(".js-btn-text"),
  body = document.getElementsByTagName("body")[0],
  brightness = 210,
  brightnessOff = 0;

btn.onclick = () => {
  let dataStatus = btn.getAttribute("data-status"),
    textOn = btn.getAttribute("data-text-on"),
    textOff = btn.getAttribute("data-text-off");

  if ("off" == dataStatus) {
    btn.setAttribute("data-status", "on");
    btnText.textContent = textOff;
    for (let i = 0; i < lights.length; i++) {
      lights[i].style.setProperty("--size", brightness + "px");
    }
    car.style.setProperty("--opacity", 1);
    _headlightsMove();
  } else {
    btn.setAttribute("data-status", "off");
    btnText.textContent = textOn;
    for (let i = 0; i < lights.length; i++) {
      lights[i].style.setProperty("--size", brightnessOff + "px");
    }
    car.style.setProperty("--opacity", 0.8);
    for (let i = 0; i < lightsWrap.length; i++) {
      lightsWrap[i].style.setProperty("--x", 0 + "px");
      lightsWrap[i].style.setProperty("--y", 0 + "px");
    }
  }
};

function _headlightsMove() {
  body.onmousemove = function (e) {
    let x = e.pageX / window.innerWidth;
    let y = e.pageY / window.innerHeight;
    x = x * -10;
    y = y * -10;

    for (let i = 0; i < lightsWrap.length; i++) {
      lightsWrap[i].style.setProperty("--x", x + "px");
      lightsWrap[i].style.setProperty("--y", y + "px");
    }
  };
}
