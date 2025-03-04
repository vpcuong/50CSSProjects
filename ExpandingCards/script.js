
const divImages = document.getElementsByClassName("img-container");

for (let i = 0; i < divImages.length; i++) {
  divImages[i].addEventListener("click", (e) => {
		const parent = e.target.closest('.img-container')
		resetImages();
    parent.classList.toggle("activeDivImage");
		e.target.classList.toggle('imageObjectFill')
  });
}

const resetImages = () => {
  for (let i = 0; i < divImages.length; i++) {
    divImages[i].classList.remove("activeDivImage");
  }
};
