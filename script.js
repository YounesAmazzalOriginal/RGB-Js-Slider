const body = document.querySelector("body");
// rgb(255, 255, 255)

const inp1 = document.querySelector(".inp1");
const inp2 = document.querySelector(".inp2");
const inp3 = document.querySelector(".inp3");
//
const sliderParent = document.querySelector(".sliderParent");
//
const colorCode = document.querySelector(".colorCode");
//
//
function inputFunc() {
  const span1 = document.querySelector(".span1");
  span1.innerHTML = inp1.value;
  const span2 = document.querySelector(".span2");
  span2.innerHTML = inp2.value;
  const span3 = document.querySelector(".span3");
  span3.innerHTML = inp3.value;
  //
  body.style.backgroundColor = `rgb(
    ${inp1.value}, ${inp2.value}, ${inp3.value}
  )`;

  document.querySelectorAll(".sliderContainer").forEach((element) => {
    element.style.color = body.style.backgroundColor;
  });
  document.querySelectorAll("input").forEach((eachInput) => {
    eachInput.style.backgroundColor = body.style.backgroundColor;
  });
  document.querySelector("h4").style.color = body.style.backgroundColor;
}
