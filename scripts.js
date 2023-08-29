const bodies = [
  {
    id: 1,
    img: "./images/andrey-k-65ZgGvh9RQc-unsplash.jpg",
    text: "Beautiful Morning",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/18077920/pexels-photo-18077920/free-photo-of-vapurda-genc-kadin.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
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
  {
    id: 6,
    img: "https://images.pexels.com/photos/7525053/pexels-photo-7525053.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    text: "Stay Vibrant",
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/11113311/pexels-photo-11113311.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    text: "Trying My best",
  },
  {
    id: 8,
    img: "https://images.pexels.com/photos/18022526/pexels-photo-18022526/free-photo-of-person-in-traditional-clothing-and-with-tattoos.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    text: "Embrace Your Culture",
  },
  {
    id: 9,
    img: "https://images.pexels.com/photos/18120373/pexels-photo-18120373/free-photo-of-woman-looking-at-the-camera.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    text: "Don't be Limited",
  },
  {
    id: 10,
    img: "https://images.pexels.com/photos/16733841/pexels-photo-16733841/free-photo-of-young-woman-with-curly-hair-sitting-with-her-back-against-the-wall.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    text: "see you in your dreams",
  },
];

//;
const randomButton = document.getElementById("randomButton");
const image = document.getElementById("image");
const next = document.getElementById("next");
const prev = document.getElementById("previous");
const text = document.getElementById("text");
var index = 0;
window.addEventListener("DOMContentLoaded", () => {
	item = bodies[index];
	image.innerHTML = `
  <img src=${item.img} alt="image" draggable="false" />
  `;
	text.innerText = item.text;
});

function Person(index) {
	item = bodies[index];
	image.innerHTML = `
  <img src=${item.img} alt="image" draggable="false" />
  `;
	text.innerText = item.text;
}

randomButton.addEventListener("click", () => {
	const randomNumber = Math.floor(Math.random() * bodies.length);
	Person(randomNumber);
});

next.addEventListener("click", () => {
	index++;
	if (index > bodies.length - 1) {
		index = 0;
	}
	Person(index);
});

prev.addEventListener("click", () => {
	index--;
	if (index == undefined) {
		index = 0;
	}
	Person(index);
});
