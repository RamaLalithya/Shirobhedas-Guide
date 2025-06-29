function playSloka() {
    const slokaAudio = new Audio("sloka.mp3.mp3");
    slokaAudio.play();
}

function showDetails(name) {
    const details = {
        sama: {
            title: "Sama Shirobheda",
            description: "Keeping the head straight and steady. Used in the beginning of the performance, showing calmness, peace, or a normal state.",
            image: "images/sama.png.jpg"
        },
        udvahitham: {
            title: "Udvahitham Shirobheda",
            description: "Lifting the head upward. Used to look at the sky, show pride, wonder, or search for something above.",
            image: "images/udvahitham.png.jpg"
        },
        adhomukham: {
            title: "Adhomukham Shirobheda",
            description: "Lowering the head downward. Used to express shyness, sorrow, humility, or looking at the ground.",
            image: "images/adhomukham.png.jpg"
        },
        alolitham: {
            title: "Alolitham Shirobheda",
            description: "Moving the head in a circular motion. Expresses dizziness, intoxication, or swirling emotions.",
            image: "images/alolitham.png.jpg"
        },
        dhutham: {
            title: "Dhutham Shirobheda",
            description: "Shaking the head side to side. Used to show disagreement, rejection, or warning.",
            image: "images/dhutham.png.jpg"
        },
        kampitham: {
            title: "Kampitham Shirobheda",
            description: "Shaking the head up and down. Indicates approval or a response like “yes.”",
            image: "images/kampitham.png.jpg"
        },
        paravrittam: {
            title: "Paravrittam Shirobheda",
            description: "Turning the head to one side. Shows looking back, anger, arrogance, or indifference.",
            image: "images/paravrittam.png.jpg"
        },
        ukshiptham: {
            title: "Ukshiptham Shirobheda",
            description: "Tilting the head to the side. Expresses teasing, playfulness, or affection.",
            image: "images/ukshiptham.png.jpg"
        },
        parivahitham: {
            title: "Parivahitham Shirobheda",
            description: "Moving the head smoothly from side to side. Depicts grace and charm.",
            image: "images/parivahitham.png.jpg"
        }
    };

    const selected = details[name];
    const container = document.getElementById("shirobheda-details");

    if (selected) {
        container.innerHTML = `
            <h2>${selected.title}</h2>
            <img src="${selected.image}" alt="${selected.title}">
            <p>${selected.description}</p>
        `;
    } else {
        container.innerHTML = `<p>Shirobheda details not available.</p>`;
    }
}
