// DOM..
const rate = document.getElementById("rate");
const form = document.getElementById("form");
const btn = document.getElementById("btn");
const numPut = document.getElementById("rate-num")
const inputs = document.querySelectorAll(".center-circle-input");
const thanks = document.getElementById("thanks");

inputs.forEach((input) => {
    input.addEventListener("change", (e) => {
        btn.disabled = false;
    })
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    numPut.textContent = formData.get("rating")
    rate.classList.add("hide");
    thanks.classList.remove("hide");
});