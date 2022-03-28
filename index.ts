const ratings = document.querySelectorAll(".card__rating");
const submit = document.querySelector("button");
const cardInit = document.querySelector(".card[data-type='normal']");
const cardThank = document.querySelector(".card[data-type='thank you']");
const cardNumber = document.querySelector(".card__number");
let number: number;

// add active and save value
ratings.forEach((rating) => {
  rating.addEventListener("click", (e: any) => {
    // delete active on other ratings
    ratings.forEach((item) => {
      item.classList.remove("active");
    });

    e.target.classList.add("active");
    number = Number(e.target.innerText);

    // add acitve to submit
    submit?.addEventListener("click", () => {
      if (number === undefined) {
        return;
      }
      cardInit?.classList.remove("active");
      cardThank?.classList.add("active");
      cardNumber!.textContent = "" + number;
    });
  });
});
