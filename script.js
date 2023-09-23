const IMAGE0 =
"https://w0.peakpx.com/wallpaper/713/632/HD-wallpaper-fantasy-bosque-magic.jpg"
const IMAGE1 =
"https://w0.peakpx.com/wallpaper/587/463/HD-wallpaper-fantasy-creature-wolf-forest-water-magical-creatures-night-fantasy.jpg"
const IMAGE2 =
"https://w0.peakpx.com/wallpaper/24/579/HD-wallpaper-magical-forest.jpg"
const IMAGE3 =
"https://w0.peakpx.com/wallpaper/998/618/HD-wallpaper-magical-forest-forest-flowers-magical-beautiful-blue.jpg"
const images = [IMAGE0, IMAGE1, IMAGE2, IMAGE3]
const image0 = document.getElementById("image0")
const image1 = document.getElementById("image1")
const image2 = document.getElementById("image2")
const image3 = document.getElementById("image3")
const lightbox = document.getElementById("lightbox")
const previewImg = document.getElementById("preview-image")
const modalImagesBlock = document.getElementById(
"modal-images-block"
)
image0.src = IMAGE0
image1.src = IMAGE1
image2.src = IMAGE2
image3.src = IMAGE3
let activeId = null
previewImg.src = images[0]
const modalImagesElements =
modalImagesBlock.getElementsByTagName("img")
const modalImages = Object.values(modalImagesElements)
modalImages.forEach((imageElement, i) => {
console.log(imageElement)
imageElement.src = images[i]
})
function openModal(imgId) {
if (activeId !== null) {
modalImages[activeId].classList.remove("active")
}
activeId = imgId
lightbox.classList.add("visible")
previewImg.src = images[imgId]
modalImages[imgId].classList.add("active")
}
function closeModal() {
lightbox.classList.remove("visible")
}
function control(direction) {
const prevId = activeId
if (direction === 1) {
// next
activeId =
activeId + 1 > images.length - 1
? // then go to the beginning
(activeId = 0)
: (activeId = activeId + 1)
} else {
// previous
activeId =
activeId - 1 < 0
? // then go to the end
(activeId = images.length - 1)
: activeId - 1
}
previewImg.src = images[activeId]
modalImages[activeId].classList.add("active")
modalImages[prevId].classList.remove("active")
}


const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const images9 = document.querySelectorAll(".card");
const totalImages = images9.length;
let index = 0;
prev.addEventListener("click", () => {
nextImage("prev");
});
next.addEventListener("click", () => {
nextImage("next");
});
function nextImage(direction) {
if (direction === "next") {
index++;
if (index === totalImages) {
index = 0;
}
} else if (direction === "prev") {
if (index == 0) {
index = totalImages - 1;
} else {
index--;
}
}
for (let i = 0; i < images9.length; i++) {
images9[i].classList.add("hidden-card");
}
images9[index].classList.remove("hidden-card");
}
