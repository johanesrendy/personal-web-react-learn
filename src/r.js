const navbar = document.getElementById("navbar");
const open = document.getElementById("open");
const navMenu = document.querySelector("#navbar li");

navbar.addEventListener("click", () => {
  navbar.classList.toggle("hidden");
});

open.addEventListener("click", () => {
  navbar.classList.toggle("hidden");
});

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwfXBWNGz7XwwdxUMSzO4L3Xd9zE4DSlpQHvYmivR9GOwOacrSMOw172wuwJVN0q8sB/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});

const submit = document.getElementById("submit");

submit.onclick = function () {
  submit.innerHTML =
    '<div class="flex justify-center items-center w-full h-full"><div id="loader" class="animate-spin h-5 md:h-7 w-5 md:w-7 border-2 border-solid border-transparent border-t-red-600 rounded-full"></div></div>';
  setTimeout(() => {
    submit.innerHTML = "Submitted";
    this.classList =
      "px-4 py-1 md:px-10 md:py-2 rounded-3xl bg-red-600 float-right mb-3 text-sm w-full md:text-lg";
    setTimeout(() => {
      submit.innerHTML = "Submit";
      this.classList =
        "px-4 py-1 md:px-10 md:py-2  rounded-3xl hover:bg-red-600 border-2 border-solid border-red-600 float-right mb-3 text-sm w-full md:text-lg";
    }, 3000);
  }, 2000);
};
