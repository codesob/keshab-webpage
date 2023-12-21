const imagesData = [
    { src: "img1.jpg" },
    { src: "img2.jpg" },
    { src: "img3.jpg" },
];

let currentImageIndex = 0;
let opacity = 0.3;


function setOpacity(value) {
    opacity = value;
    document.getElementById("imageSlider").style.opacity = opacity;
}

function prevImage() {
    currentImageIndex =
        currentImageIndex === 0 ? imagesData.length - 1 : currentImageIndex - 1;
    updateImage();
}

function nextImage() {
    currentImageIndex =
        currentImageIndex === imagesData.length - 1 ? 0 : currentImageIndex + 1;
    updateImage();
}

function updateImage() {
    const image = document.getElementById("sliderImage");
    image.src = imagesData[currentImageIndex].src;
    image.alt = `Slide ${currentImageIndex}`;
}

document.addEventListener("scroll", handleScroll);

updateImage();

setInterval(() => {
    nextImage();
}, 5000);
