function checkPassword() {

    const password =
        document.getElementById("passwordInput").value;

    if (password === "2405") {

        document.getElementById("passwordPage")
            .style.display = "none";

        document.getElementById("mainWebsite")
            .style.display = "block";

    } else {

        document.getElementById("error")
            .innerHTML = "Wrong Password ❤️";

    }
}

function scrollToGallery() {

    document.getElementById("gallery")
        .scrollIntoView({
            behavior: "smooth"
        });

}

// Days Counter
const startDate = new Date("2026-05-12");
const today = new Date();

const days = Math.floor(
    (today - startDate) /
    (1000 * 60 * 60 * 24)
);

document.getElementById("daysCounter").innerHTML =
    `${days} Days Together ❤️`;

// Music
const music = document.getElementById("bgMusic");

document.getElementById("musicBtn")
    .addEventListener("click", () => {

        if (music.paused) {
            music.play();
        } else {
            music.pause();
        }

    });

// Voice Note
const voice = document.getElementById("voiceAudio");
const playBtn = document.getElementById("playBtn");
const progress = document.querySelector(".progress");

playBtn.addEventListener("click", () => {

    if (voice.paused) {

        voice.play();
        playBtn.innerHTML = "⏸ Pause Voice Note";

    } else {

        voice.pause();
        playBtn.innerHTML = "▶ Play Voice Note";

    }

});

voice.addEventListener("timeupdate", () => {

    if (voice.duration) {

        const percentage =
            (voice.currentTime / voice.duration) * 100;

        progress.style.width =
            percentage + "%";

    }

});

// Floating Hearts
function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    heart.style.left =
        Math.random() * window.innerWidth + "px";

    heart.style.animationDuration =
        (Math.random() * 3 + 4) + "s";

    document.getElementById("hearts")
        .appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);

}

setInterval(createHeart, 400);

// Photo Lightbox
const images =
    document.querySelectorAll(".polaroid img");

const lightbox =
    document.getElementById("lightbox");

const lightboxImg =
    document.getElementById("lightboxImg");

const closeLightbox =
    document.getElementById("closeLightbox");

images.forEach(img => {

    img.addEventListener("click", () => {

        lightbox.style.display = "flex";
        lightboxImg.src = img.src;

    });

});

if (closeLightbox) {

    closeLightbox.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

}

lightbox.addEventListener("click", () => {

    lightbox.style.display = "none";

});
setInterval(() => {

const petal = document.createElement("div");
petal.classList.add("petal");
petal.innerHTML = "🌸";

petal.style.left =
Math.random()*100 + "vw";

petal.style.animationDuration =
(6 + Math.random()*4) + "s";

document.body.appendChild(petal);

setTimeout(()=>{
petal.remove();
},10000);

},700);