const allStars = document.querySelector(".stars");

const stars = document.querySelectorAll(".stars a");

stars.forEach((star, idx) => {
    star.addEventListener("click", () => {
        allStars.classList.add("disabled");
        console.log(idx)
        // star.classList.add("active");

        stars.forEach((otherStar, otherIdx) => {
            if(otherIdx <= idx) {
                otherStar.classList.add("active");
            }
        })

    })
})