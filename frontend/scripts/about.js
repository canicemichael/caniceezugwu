let cert1 = document.getElementById("cert_1");
let cert2 = document.getElementById("cert_2");
let cert3 = document.getElementById("cert_3");
let cert4 = document.getElementById("cert_4");

const certOne = document.getElementById("cert_one");
const certTwo = document.getElementById("cert_two");
const certThree = document.getElementById("cert_three");
const certFour = document.getElementById("cert_four");

certOne.addEventListener("click", () => {
  cert1.style.display = "block";
  cert2.style.display = "none";
  cert3.style.display = "none";
  cert4.style.display = "none";

  certOne.classList.add("hightlight_select");
  certTwo.classList.remove("hightlight_select");
  certThree.classList.remove("hightlight_select");
  certFour.classList.remove("hightlight_select");
});

certTwo.addEventListener("click", () => {
  cert1.style.display = "none";
  cert3.style.display = "none";
  cert2.style.display = "block";
  cert4.style.display = "none";

  certTwo.classList.add("hightlight_select");
  certOne.classList.remove("hightlight_select");
  certThree.classList.remove("hightlight_select");
  certFour.classList.remove("hightlight_select");
});

certThree.addEventListener("click", () => {
  cert2.style.display = "none";
  cert3.style.display = "block";
  cert1.style.display = "none";
  cert4.style.display = "none";

  certThree.classList.add("hightlight_select");
  certOne.classList.remove("hightlight_select");
  certTwo.classList.remove("hightlight_select");
  certFour.classList.remove("hightlight_select");
});

certFour.addEventListener("click", () => {
  cert2.style.display = "none";
  cert1.style.display = "none";
  cert4.style.display = "block";
  cert3.style.display = "none";

  certFour.classList.add("hightlight_select");
  certOne.classList.remove("hightlight_select");
  certTwo.classList.remove("hightlight_select");
  certThree.classList.remove("hightlight_select");
});
