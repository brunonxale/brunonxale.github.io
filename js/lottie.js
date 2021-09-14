const animation = document.getElementsByClassName("animation");
const buttonPlay = document.getElementById("play");
const buttonPause = document.getElementById("pause");
const buttonSpeed = document.getElementById("x2");
const buttonReset = document.getElementById("reset");

const anim = lottie.loadAnimation({
	container: animation [0],
	renderer: "svg",
	loop: true,
	autoplay:true,
	path: './plant.json'
});

buttonPlay.addEventListener('click', () => {
	anim.play();
})

buttonPause.addEventListener('click', () => {
	anim.pause();
})

buttonSpeed.addEventListener('click', () => {
	anim.setSpeed(2)
})

buttonReset.addEventListener('click', () => {
	anim.setSpeed(1)
})