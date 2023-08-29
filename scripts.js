const bodies = [
	{
		id: 1,
		img: "./images/andrey-k-65ZgGvh9RQc-unsplash.jpg",
		text: "Beautiful Morning",
	},
	{
		id: 2,
		img: "./images/mohammadreza-alidoost-1fgLmEkIHt0-unsplash.jpg",
		text: "Heartbreak Aniversary",
	},
	{
		id: 3,
		img: "./images/sir-simo-aBPji0lB6II-unsplash.jpg",
		text: "you're better now",
	},
	{
		id: 4,
		img: "./images/tommao-wang-jbzT23kbgK8-unsplash.jpg",
		text: "don't look back",
	},
	{
		id: 5,
		img: "./images/yves-talom-Fstts8pQTyM-unsplash.jpg",
		text: "see you in your dreams",
	},
];

//
const randomButton = document.getElementById("randomButton");
const image = document.getElementsByTagName("img");
const next = document.getElementById("next");
const prev = document.getElementById("previous");
const text = document.getElementById("text");
var index = 0
window.addEventListener("DOMContentLoaded", () => {
	item = bodies[index];
	image.src = item.img;
	text.innerText = item.text;
});

function Person(index) {
	item = bodies[index];
	image.src = item.img;
	text.innerText = item.text;
}

randomButton.addEventListener("click", () => {
	const randomNumber = Math.floor(Math.random() * bodies.length);
	Person(randomNumber);
});


next.addEventListener('click', ()=>{
    index++
    if (index > bodies.length - 1) {
        index = 0;
      }
    Person(index)
})

prev.addEventListener('click', ()=>{
    index--
    if (index > bodies.length - 1) {
        index = 0;
      }
    Person(index)
})