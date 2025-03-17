// let body = document.body

let h1 = document.getElementById("heading");
// h1.innerText = "Ramen Rater"
// console.log(h1);
h1.style.color = "white"
h1.style.backgroundColor = "black"
h1.style.alignItems = "center"



const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "ramen-images/shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "ramen-images/miso.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "ramen-images/tonkotsu.jpg" },
    { id: 4, name: "Naruto Ramen", restaurant: "Ichigo", image: "ramen-images/naruto.jpg"},
    { id: 5, name: "Kojiro Ramen", restaurant: "Ragna", image: "ramen-images/kojiro.jpg"},
];
let form = document.getElementById("form")

form.addEventListener('submit', function(event){
    event.preventDefault()
})

document.addEventListener("DOMContentLoaded", displayRamens)

function displayRamens(){
    const ramenDetail = document.getElementById("ramen-detail")

    ramens.forEach(ramen =>{
        const img = document.createElement("img")
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener("click", () => handleClick(ramen));
        ramenDetail.appendChild(img);
    })
}


























                            












