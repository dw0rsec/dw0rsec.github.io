const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

const hck = '%cHAPPY HACKING !!! 🏴‍☠️';
console.log(hck, 'color: green');

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}

function setCookie(name, value) {
  document.cookie = `${name}=${value}; path=/`;
}

if (!getCookie('darkReaderAlertShown')) {
  const isDarkReaderDetected = [...document.querySelectorAll('style')].some((el) => el.classList.contains('darkreader'));

  if (isDarkReaderDetected) {
    alert("Recommendation: Turn off Dark Reader for maximum beauty. My site is built dark mode only. 😅");
    
    setCookie('darkReaderAlertShown', 'true');
  }
}
