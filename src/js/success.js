const tl = gsap
	.timeline({
		default: { ease: "Power3.easeOut" },
	})
	.from(".thanks__h1", {
		opacity: 0,
		x: -100,
		duration: 0.8,
		delay: 0.4,
	})
	.from(
		".thanks__h2",
		{
			opacity: 0,
			x: -100,
			duration: 0.8,
			delay: 0.5,
		},
		"-=1"
	)
	.from(".thanks__logo", {
		opacity: 0,
		duration: 1.1,
	})
	.from(
		".nav__socials",
		{
			opacity: 0,
			duration: 1.1,
		},
		"-=1"
	)
	.from(
		".thanks__back",
		{
			y: 10,
			opacity: 0,
			duration: 1.1,
			delay: 0.5,
		},
		"-=1"
	);
