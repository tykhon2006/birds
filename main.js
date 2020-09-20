let modal = document.getElementById("modal");
let sign_in = document.getElementById("sign_in");
let close_modal = document.getElementById("close_modal");
close_modal.addEventListener("click", closeModal);
sign_in.addEventListener("click", showModal);
function showModal(){
	modal.className = "modal-block";
}
function closeModal(){
	modal.className = "display-none";
}

//aside-slider
const slide = document.querySelectorAll(".slide");
const slideTime = 2000;
const slides = document.getElementById("slides");
const slidesMin = document.getElementById("slidesMin");
const slideMin = document.querySelectorAll(".slideMin");

let currentSlide = 0;
let slideInterval;

continueSlideInterval();
slides.addEventListener("mouseover", stopSlide);
slides.addEventListener("mouseout", continueSlideInterval);
slidesMin.addEventListener("click", toggleSlide);

function continueSlideInterval(){
	slideInterval = setInterval(nextSlide, slideTime);
}

function nextSlide(){
	slideReset();
	// currentSlide = ++currentSlide == slide.length ? 0 : currentSlide;
	currentSlide = ++currentSlide % slide.length;
	slideSet();
}

function stopSlide(){
	clearInterval(slideInterval);
}
function slideReset(){
	slide[currentSlide].className = "slide";
	slideMin[currentSlide].className = "slideMin";
}
function slideSet(){
	slide[currentSlide].className = "slide show";
	slideMin[currentSlide].className = "slideMin showMin";
}
function toggleSlide(){
	if(event.target.tagName == "IMG"){
		stopSlide();
		slideReset();
		currentSlide = event.target.id;
		slideSet();
	}
}