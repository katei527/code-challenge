let h1 = document.getElementById("heading");

h1.style.color = "white";
h1.style.backgroundColor = "black";
h1.style.textAlign = "center";

const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "ramen/shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "ramen/miso.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "ramen/tonkotsu.jpg" },
    { id: 4, name: "Naruto Ramen", restaurant: "Ichigo", image: "ramen/naruto.jpg" },
    { id: 5, name: "Kojiro Ramen", restaurant: "Ragna", image: "ramen/kojiro.jpg" },
];

let form = document.getElementById("form");

form.addEventListener('submit', function(event) {
    event.preventDefault();
});

document.addEventListener("DOMContentLoaded", displayRamens);

function displayRamens() {
    const ramenDetail = document.getElementById("ramen-menu");
    
    ramens.forEach(ramen => {
        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener("click", () => handleClick(ramen));
        ramenDetail.appendChild(img);
    });
}

function handleClick(ramen) {
    document.getElementById("detail-image").src = ramen.image;
    document.getElementById("ramen-name").innerText = ramen.name;
    document.getElementById("ramen-restaurant").innerText = ramen.restaurant;
    document.getElementById("ramen-rating").innerText = ramen.rating || "N/A";
    document.getElementById("ramen-comment").innerText = ramen.comment || "No comments available.";
}

document.getElementById("click").addEventListener("click", function() {
    const newRamen = {
        id: ramens.length + 1,
        name: document.getElementById("name").value,
        restaurant: document.getElementById("restaurant").value,
        image: document.getElementById("image").value,
        rating: document.getElementById("rating").value,
        comment: document.getElementById("comment").value
    };

    ramens.push(newRamen);
    displayRamens();
    clearForm();
});

function clearForm() {
    document.getElementById("name").value = '';
    document.getElementById("restaurant").value = '';
    document.getElementById("image").value = '';
    document.getElementById("rating").value = '';
    document.getElementById("comment").value = '';
}
























                            












