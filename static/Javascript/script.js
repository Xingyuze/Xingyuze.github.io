let btn = document.querySelector("button.mode");
let content = btn.innerHTML;
let link = document.querySelectorAll("link")[0];
let style1 = 'static/scss/style1.css';
let style2 = 'static/scss/style2.css';

btn.onclick = () => {
  let currentStyle = link.getAttribute("href");
  if (currentStyle === style1) {
    link.setAttribute("href", style2);
    let icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-sun");
    btn.innerHTML = " Light mode";
    btn.insertBefore(icon, btn.firstChild);
  } else {
    link.setAttribute("href", style1);
    let icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-moon");
    btn.innerHTML = " Dark mode";
    btn.insertBefore(icon, btn.firstChild);
  }
}

let navHeight = document.querySelector(".navbar").offsetHeight;
document.querySelector(".home").style.paddingTop = navHeight + "px";

