/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselContainer = document.querySelector(".carousel-container");
const photoPaths = [
	"./assets/carousel/mountains.jpeg",
	"./assets/carousel/computer.jpeg",
	"./assets/carousel/trees.jpeg",
	"./assets/carousel/turntable.jpeg"
];

const Carousel = () => {
	const carousel = document.createElement("div");
	carousel.classList.add("carousel");

	const leftBtn = document.createElement("div");
	leftBtn.classList.add("left-button");
	carousel.appendChild(leftBtn);

	const rightBtn = document.createElement("div");
	rightBtn.classList.add("right-button");
	carousel.appendChild(rightBtn);

	const photos = photoPaths.map(photo => {
		const carouselImg = document.createElement("img");
		carouselImg.src = photo;
		carousel.appendChild(carouselImg);
		return carouselImg;
	});

	let photoIndex = 1;

	const showPhoto = index => {
		index > photos.length ? (photoIndex = 1) : index;
		index < 1 ? (photoIndex = photos.length) : index;
		console.log(index, photoIndex);

		photos.forEach(photo => (photo.style.display = "none"));

		photos[photoIndex - 1].style.display = "block";
	};

	showPhoto(photoIndex);

	const plusIndex = num => {
		showPhoto((photoIndex += num));
	};

	leftBtn.addEventListener("click", () => {
		plusIndex(-1);
	});

	rightBtn.addEventListener("click", () => {
		plusIndex(1);
	});

	console.log(photos);

	return carousel;
};

carouselContainer.appendChild(Carousel());
