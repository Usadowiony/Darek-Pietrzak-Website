////////////////////////////////////////////
////////////////////////////////////////////
/////////  NAV MOBILE CLICK EFFECT  ////////
////////////////////////////////////////////
////////////////////////////////////////////
const navLiItem = document.querySelectorAll(".nav__ul-a");
const navSocialsA = document.querySelectorAll(".nav__socials-a");
const navHamb = document.querySelector(".nav__ul-hamburger");
const headerBtn = document.querySelector(".header__btn");

if (window.innerWidth < 769) {
	navLiItem.forEach(e => {
		e.addEventListener("click", () => {
			e.classList.add("nav__ul-a--click");
			setTimeout(() => {
				e.classList.remove("nav__ul-a--click");
			}, 1010);
		});
	});
	navSocialsA.forEach(e => {
		e.addEventListener("click", () => {
			e.classList.add("nav__socials-a--click");
			setTimeout(() => {
				e.classList.remove("nav__socials-a--click");
			}, 1010);
		});
	});
}
if (window.innerWidth < 769) {
	headerBtn.addEventListener("click", () => {
		headerBtn.classList.add("header__btn--click");
		setTimeout(() => {
			headerBtn.classList.remove("header__btn--click");
		}, 1010);
	});
}
if (window.innerWidth < 769) {
	navHamb.addEventListener("click", () => {
		navHamb.classList.add("nav__ul-hamburger--click");
		setTimeout(() => {
			navHamb.classList.remove("nav__ul-hamburger--click");
		}, 1010);
	});
}
////////////////////////////////////////////
////////////////////////////////////////////
/////////////  NAV RESPONSIVE  /////////////
////////////////////////////////////////////
////////////////////////////////////////////
const hamburger = document.querySelector(".nav__ul-hamburger");
const navUl = document.querySelector(".nav__ul");
const navSocials = document.querySelector(".nav__socials");

hamburger.addEventListener("click", () => {
	if (hamburger.classList.contains("fa-bars")) {
		hamburger.classList.remove("fa-solid", "fa-bars");
		hamburger.classList.add("fa-sharp", "fa-solid", "fa-xmark");
		navUl.classList.add("nav__ul--active");
		navSocials.classList.add("nav__socials--active");
	} else {
		hamburger.classList.remove("fa-sharp", "fa-solid", "fa-xmark");
		hamburger.classList.add("fa-solid", "fa-bars");
		navUl.classList.remove("nav__ul--active");
		navSocials.classList.remove("nav__socials--active");
	}
});
////////////////////////////////////////////
///////////  NAV SECTION TRACKER  //////////
////////////////////////////////////////////
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", navHighlighter);
function navHighlighter() {
	let scrollY = window.pageYOffset;
	sections.forEach(current => {
		const sectionHeight = current.offsetHeight;
		const sectionTop = current.offsetTop - 150;
		sectionId = current.getAttribute("id");
		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document
				.querySelector("li a[href*=" + sectionId + "]")
				.classList.add("nav__ul-a--active");
		} else {
			document
				.querySelector("li a[href*=" + sectionId + "]")
				.classList.remove("nav__ul-a--active");
		}
	});
}
////////////////////////////////////////////
////////////////////////////////////////////
////////////////  CONTACT  /////////////////
////////////////////////////////////////////
////////////////////////////////////////////
const inputs = document.querySelectorAll(".contact__input");
inputs.forEach(e => {
	e.addEventListener("focus", () => {
		e.parentNode.classList.add("focus");
		e.parentNode.classList.add("not-empty");
	});
	e.addEventListener("blur", () => {
		if (e.value == "") {
			e.parentNode.classList.remove("not-empty");
		}
		e.parentNode.classList.remove("focus");
	});
});
////////////////////////////////////////////
//////////////////  GSAP  //////////////////
////////////////////////////////////////////
//----------------------------------------//
////////////////////////////////////////////
/////////////////  NAV BG  //////////////////
////////////////////////////////////////////
const tlNav = gsap
	.timeline({
		default: { ease: "Power1.InOut" },
		scrollTrigger: {
			trigger: ".header",
			start: "center 28%",
			end: "center 5%",
			scrub: 1,
			toggleActions: "restart none none none",
		},
	})
	.to(".nav__bg", {
		duration: 1.3,
		opacity: 1,
	});
////////////////////////////////////////////
/////////////////  HEADER  /////////////////
////////////////////////////////////////////
const tl = gsap.timeline({ default: { ease: "power1.out" } });

tl.to(".header", { opacity: 1, duration: 1 });
tl.to(".nav", { opacity: 1, duration: 1.5, delay: 0.4 }, "-=1");
tl.to(".nav__socials-a", { opacity: 1, duration: 1.2 }, "-=1");
tl.to(
	".header__h3",
	{ opacity: 1, x: "0%", duration: 0.6, ease: Power2.easeInOut },
	"-=1"
);
tl.to(
	".header__h1",
	{ opacity: 1, x: "0%", duration: 0.6, delay: 0.2, ease: Power2.easeInOut },
	"-=1"
);
tl.to(
	".header__h2",
	{ opacity: 1, x: "0%", duration: 0.6, delay: 0.4, ease: Power2.easeInOut },
	"-=1"
);
tl.to(
	".header__btn",
	{ opacity: 1, y: "0%", duration: 0.7, delay: 0.2, ease: Power1.easeIn },
	"-=1"
);
const tlClose = gsap
	.timeline({
		default: { ease: "Power0.easeNone" },
		scrollTrigger: {
			trigger: ".header",
			start: "bottom 25%",
			end: "bottom 15%",
			scrub: 1,
			toggleActions: "restart none none none",
		},
	})
	.to(".header", {
		opacity: 0,
		duration: 1.3,
	});
////////////////////////////////////////////
//////////////////  ABOUT  /////////////////
////////////////////////////////////////////
gsap.to(".about-me__photo", {
	x: 40,
	duration: 2,
	scrollTrigger: {
		trigger: ".about-me__photo",
		scrub: 1,
		toggleActions: "restart none none none",
	},
});
const tl2 = gsap.timeline({
	default: { ease: " Power1.easeInOut" },
	scrollTrigger: ".about-me__photo",
});
tl2
	.from(".about-me__h1", { x: 80, opacity: 0, duration: 1.2 })
	.from(".about-me__h2", { x: 80, opacity: 0, duration: 1.2 }, "-=1")
	.from(".about-me__photo", { opacity: 0, duration: 1, delay: 0.2 }, "-=1")
	.from(
		".about-me__education",
		{ opacity: 0, duration: 0.8, delay: 0.4 },
		"-=1"
	)
	.from(
		".about-me__education-li",
		{
			y: 10,
			opacity: 0,
			duration: 0.8,
			delay: 0.2,
			stagger: 0.25,
		},
		"-=1"
	);
const tl2Close = gsap
	.timeline({
		default: { ease: "Power0.easeNone" },
		scrollTrigger: {
			trigger: ".about",
			start: "bottom 45%",
			end: "bottom 25%",
			scrub: 1,
			toggleActions: "restart none none none",
		},
	})
	.to(".about", {
		duration: 1.3,
		backgroundColor: "rgb(18, 19, 19)",
	})
	.to(".about-me", {
		opacity: 0,
		duration: 1.3,
	});
////////////////////////////////////////////
//////////////////  OFFERT /////////////////
////////////////////////////////////////////
const tl3Content = gsap
	.timeline({
		default: { ease: "Power0.easeNone" },
		scrollTrigger: {
			trigger: ".offert",
			start: "top 70%",
		},
	})
	.to(".offert__header--h1", {
		x: 0,
		opacity: 1,
		duration: 1,
		ease: "power1.inOut",
	})
	.to(
		".offert__container",
		{
			x: 0,
			opacity: 1,
			stagger: 0.6,
			delay: 0.6,
			duration: 0.7,
		},
		"-=1"
	);
const tl3Open = gsap.timeline({
	default: { ease: "Power0.easeNone" },
	scrollTrigger: {
		trigger: ".offert",
		scrub: true,
		start: "top 90%",
		end: "top 70%",
		toggleActions: "restart none none none",
	},
});
const tl3Close = gsap
	.timeline({
		default: { ease: "Power3.easeOut" },
		scrollTrigger: {
			trigger: ".offert",
			scrub: 1,
			start: "bottom 40%",
			end: "bottom 15%",
			toggleActions: "restart none none none",
		},
	})
	.to(".offert", {
		opacity: 0,
		duration: 0.6,
	});
////////////////////////////////////////////
//////////////  OFFERT HOVER ///////////////
////////////////////////////////////////////
const oc1 = document.querySelector(".offert__container--1");
const cw1 = document.querySelector(".offert__content-wrapper--1");
const ofHover1 = gsap
	.timeline({
		default: { ease: "Power2.easeInOut" },
	})
	.to(".offert__content-wrapper--1", {
		y: 0,
		duration: 0.1,
	});
oc1.addEventListener("mouseenter", () => {
	ofHover1.restart();
});
oc1.addEventListener("mouseleave", () => {
	ofHover1.reverse();
});
///////////////
const oc2 = document.querySelector(".offert__container--2");
const cw2 = document.querySelector(".offert__content-wrapper--2");
const ofHover2 = gsap
	.timeline({
		default: { ease: "Power2.easeInOut" },
	})
	.to(".offert__content-wrapper--2", {
		y: 0,
		duration: 0.1,
	});
oc2.addEventListener("mouseenter", () => {
	ofHover2.restart();
});
oc2.addEventListener("mouseleave", () => {
	ofHover2.reverse();
});
///////////////
const oc3 = document.querySelector(".offert__container--3");
const cw3 = document.querySelector(".offert__content-wrapper--3");
const ofHover3 = gsap
	.timeline({
		default: { ease: "Power2.easeInOut" },
	})
	.to(".offert__content-wrapper--3", {
		y: 0,
		duration: 0.1,
	});
oc3.addEventListener("mouseenter", () => {
	ofHover3.restart();
});
oc3.addEventListener("mouseleave", () => {
	ofHover3.reverse();
});
ofHover1.reverse();
ofHover2.reverse();
ofHover3.reverse();
////////////////////////////////////////////
////////////////  GALLERY //////////////////
////////////////////////////////////////////
const tl4Open = gsap
	.timeline({
		default: { ease: "Power0.easeNone" },
		scrollTrigger: {
			trigger: ".gallery",
			start: "top 80%",
			end: "top 50%",
			scrub: 1,
			toggleActions: "restart none none none",
		},
	})
	.from(".gallery", {
		duration: 0.6,
		backgroundColor: "rgba(16, 17, 17, 1)",
	});
const tl4 = gsap
	.timeline({
		default: { ease: "Power3.easeOut" },
		scrollTrigger: {
			trigger: ".gallery__photo",
			scrub: 1,
			start: "top 80%",
			end: "top 20%",
		},
	})
	.to(".gallery__photo", {
		stagger: 0.2,
		opacity: 1,
		y: 0,
		duration: 3,
	});
const tl4Close = gsap
	.timeline({
		default: { ease: "Power0.easeNone" },
		scrollTrigger: {
			trigger: ".gallery",
			start: "bottom 45%",
			end: "bottom 25%",
			scrub: 1,
			toggleActions: "restart none none none",
		},
	})
	.to(".gallery", {
		duration: 1.3,
		backgroundColor: "rgba(16, 17, 17, 1)",
	})
	.to(".gallery__container", {
		opacity: 0,
		duration: 1.3,
	});
////////////////////////////////////////////
////////////////  CONTACT //////////////////
////////////////////////////////////////////
gsap.to(".contact__img", {
	x: 60,
	duration: 2,
	scrollTrigger: {
		trigger: ".contact__img",
		scrub: 1,
		toggleActions: "restart none none none",
	},
});
if (window.innerWidth > 960) {
	const tl5 = gsap
		.timeline({
			default: { ease: "Power3.easeOut" },
			scrollTrigger: {
				trigger: ".contact",
				start: "top 80%",
			},
		})
		.from(
			".contact__h1",
			{
				x: -30,
				opacity: 0,
				duration: 0.7,
				delay: 1.5,
			},
			"-=1"
		)
		.from(
			".contact__h2",
			{
				x: -30,
				opacity: 0,
				duration: 0.7,
				delay: 0.6,
			},
			"-=1"
		)
		.from(".contact__input-wrap", {
			x: -10,
			opacity: 0,
			duration: 0.6,
			stagger: 0.2,
		})
		.from(
			".contact__buttons",
			{
				y: 10,
				opacity: 0,
				duration: 0.6,
				stagger: 0.3,
				delay: 0.7,
			},
			"-=1"
		)
		.from(
			".contact__img",
			{
				opacity: 0,
				duration: 2,
			},
			"-=1"
		);
} else {
	const tl5 = gsap
		.timeline({
			default: { ease: "Power3.easeOut" },
			scrollTrigger: {
				trigger: ".contact",
				start: "top 80%",
			},
		})
		.from(".contact__h1", {
			x: -30,
			opacity: 0,
			duration: 0.8,
			delay: 0.4,
		})
		.from(
			".contact__h2",
			{
				x: -30,
				opacity: 0,
				duration: 0.8,
				delay: 0.3,
			},
			"-=1"
		)
		.from(".contact__input-wrap", {
			x: -10,
			opacity: 0,
			duration: 0.3,
			stagger: 0.2,
		})
		.from(
			".contact__buttons",
			{
				y: 10,
				opacity: 0,
				duration: 0.3,
				stagger: 0.3,
				delay: 0.8,
			},
			"-=1"
		)
		.from(
			".contact__img",
			{
				opacity: 0,
				duration: 2,
			},
			"-=1"
		);
}

////////////////////////////////////////////
////////////////////////////////////////////
//////////////////  LENIS  /////////////////
////////////////////////////////////////////
////////////////////////////////////////////
const lenis = new Lenis({
	duration: 1.2,
	easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
	direction: "vertical", // vertical, horizontal
	gestureDirection: "vertical", // vertical, horizontal, both
	smooth: true,
	mouseMultiplier: 1.3,
	smoothTouch: false,
	touchMultiplier: 2,
	infinite: false,
});

//get scroll value
// lenis.on("scroll", ({ scroll, limit, velocity, direction, progress }) => {
// 	console.log({ scroll, limit, velocity, direction, progress });
// });

function raf(time) {
	lenis.raf(time);
	requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
