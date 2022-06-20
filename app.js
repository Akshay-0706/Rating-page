const submitButton = document.querySelector("#submitButton");
const ratingSection = document.querySelector("#ratingSection");
const thankYouSection = document.querySelector("#thankYouSection");
const ratingSelected = document.querySelector("#ratingSelected");
const ratingNum = document.querySelector("#ratingNum");
const buttons = document.querySelectorAll(".notSelected");

submitButton.addEventListener("click", submitClicked);

function submitClicked() {
    let isRated = false, rating = 1;
    for (const ratingButton of buttons) {
        if (ratingButton.classList.contains("selected")) {
            isRated = true;
            break;
        }
        rating++;
    }
    if (isRated) {
        ratingSection.style.display = "none";
        thankYouSection.style.display = "block";
        ratingSelected.innerHTML = rating;
    }
    else {
        for (const ratingButton of buttons) {
            ratingButton.classList.add("error");
        }
        setTimeout(function () {
            for (const ratingButton of buttons) {
                ratingButton.classList.remove("error");
            }
        }, 1000)
    }
}

for (const ratingButton of buttons) {
    ratingButton.addEventListener("click", () => {
        for (const ratingButtons of buttons) {
            if (ratingButtons.classList.contains("selected"))
                ratingButtons.classList.toggle("selected");
            if (ratingButtons.classList.contains("error"))
                ratingButtons.classList.toggle("error");
        }
        ratingButton.classList.toggle("selected");
    })
}