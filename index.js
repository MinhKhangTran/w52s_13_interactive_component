var ratings = document.querySelectorAll(".card__rating");
var submit = document.querySelector("button");
var cardInit = document.querySelector(".card[data-type='normal']");
var cardThank = document.querySelector(".card[data-type='thank you']");
var cardNumber = document.querySelector(".card__number");
var number;
// add active and save value
ratings.forEach(function (rating) {
    rating.addEventListener("click", function (e) {
        // delete active on other ratings
        ratings.forEach(function (item) {
            item.classList.remove("active");
        });
        e.target.classList.add("active");
        number = Number(e.target.innerText);
        // add acitve to submit
        submit === null || submit === void 0 ? void 0 : submit.addEventListener("click", function () {
            if (number === undefined) {
                return;
            }
            cardInit === null || cardInit === void 0 ? void 0 : cardInit.classList.remove("active");
            cardThank === null || cardThank === void 0 ? void 0 : cardThank.classList.add("active");
            cardNumber.textContent = "" + number;
        });
    });
});
