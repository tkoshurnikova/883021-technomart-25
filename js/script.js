var nextImage = document.querySelector(".arrow-right");
var previousImage = document.querySelector(".arrow-left");
var slides = document.querySelectorAll(".catalog-slider");

nextImage.addEventListener("click", function (evt) {
	evt.preventDefault();
	slides[0].classList.add("catalog-slider-closed");
	slides[1].classList.remove("catalog-slider-closed");
});

previousImage.addEventListener("click", function (evt) {
	evt.preventDefault();
	slides[1].classList.add("catalog-slider-closed");
	slides[0].classList.remove("catalog-slider-closed");
});

var popupWhiteUs = document.querySelector(".white-us");
var openForm = document.querySelector(".open-form");
var popupMap = document.querySelector(".popup-map");
var openMap = document.querySelector(".open-map");
var closeWhiteUs = popupWhiteUs.querySelector(".close-popup");
var closeMap = popupMap.querySelector(".close-popup");
var form = document.querySelector(".write-us-form");
var formName = document.querySelector("[name=form-name]");
var formEmail = document.querySelector("[name=form-email]");
var formMessage = document.querySelector("[name=form-message]");
var isStorageSupport = true;
var storage = "";

try {
	storage = localStorage.getItem("formName");
} catch (err) {
	isStorageSupport = false;
}

openForm.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupWhiteUs.classList.add("popup-opened");
	popupWhiteUs.classList.remove("popup-error");
	if (storage) {
		formName.value = storage;
		formEmail.value = localStorage.getItem("formEmail");
	}
});

openMap.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupMap.classList.add("popup-opened");
});

closeMap.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupMap.classList.remove("popup-opened");
});

closeWhiteUs.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupWhiteUs.classList.remove("popup-opened");
});

form.addEventListener("submit", function (evt) {
	if (!formName.value || !formEmail.value || !formMessage.value) {
		evt.preventDefault();
		popup.classList.remove("popup-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("popup-error");
	} else {
		if (isStorageSupport) {
			localStorage.setItem("formName", formName.value);
			localStorage.setItem("formEmail", formEmail.value);
		}
	}
});

