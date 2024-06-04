const city_names = {
    0:"LONDON",
    1:"NEW YORK",
    2:"TOKYO",
    3:"PARIS",
}

const images = [
    "./img/sp_img/sp-0.png",
    "./img/sp_img/sp-1.png",
    "./img/sp_img/sp-2.png",
    "./img/sp_img/sp-3.png",
]

let counter = 0;

function increase() {
    counter += 1;
    console.log(counter)

    if ((counter % 4) === 0) {
        document.getElementById("main_image").src = images[0];
        document.getElementById("thumb1").src = images[3];
        document.getElementById("thumb2").src = images[1];
        document.getElementById("main_city_name").textContent = city_names[0];
        document.getElementById("thumb1_city_name").textContent = city_names[3];
        document.getElementById("thumb2_city_name").textContent = city_names[1];
        document.getElementById("page").textContent = ((counter + 1) % 4)
    } else if ((counter % 4) === 1) {
        document.getElementById("main_image").src = images[1];
        document.getElementById("thumb1").src = images[0];
        document.getElementById("thumb2").src = images[2];
        document.getElementById("main_city_name").textContent = city_names[1];
        document.getElementById("thumb1_city_name").textContent = city_names[0];
        document.getElementById("thumb2_city_name").textContent = city_names[2];
        document.getElementById("page").textContent = ((counter + 1) % 4)
    } else if ((counter % 4) === 2) {
        document.getElementById("main_image").src = images[2];
        document.getElementById("thumb1").src = images[1];
        document.getElementById("thumb2").src = images[3];
        document.getElementById("main_city_name").textContent = city_names[2];
        document.getElementById("thumb1_city_name").textContent = city_names[1];
        document.getElementById("thumb2_city_name").textContent = city_names[3];
        document.getElementById("page").textContent = ((counter + 1) % 4)
    } else if ((counter % 4) === 3) {
        document.getElementById("main_image").src = images[3];
        document.getElementById("thumb1").src = images[2];
        document.getElementById("thumb2").src = images[0];
        document.getElementById("main_city_name").textContent = city_names[3];
        document.getElementById("thumb1_city_name").textContent = city_names[2];
        document.getElementById("thumb2_city_name").textContent = city_names[0];
        document.getElementById("page").textContent = ((counter + 1) % 4)
    }
}

function decrease() {
    counter -= 1;
    console.log(counter)

    if ((counter % 4) === 0) {
        document.getElementById("main_image").src = images[0];
        document.getElementById("thumb1").src = images[3];
        document.getElementById("thumb2").src = images[1];
        document.getElementById("main_city_name").textContent = city_names[0];
        document.getElementById("thumb1_city_name").textContent = city_names[3];
        document.getElementById("thumb2_city_name").textContent = city_names[1];
    } else if ((counter % 4) === 1) {
        document.getElementById("main_image").src = images[1];
        document.getElementById("thumb1").src = images[0];
        document.getElementById("thumb2").src = images[2];
        document.getElementById("main_city_name").textContent = city_names[1];
        document.getElementById("thumb1_city_name").textContent = city_names[0];
        document.getElementById("thumb2_city_name").textContent = city_names[2];
    } else if ((counter % 4) === 2) {
        document.getElementById("main_image").src = images[2];
        document.getElementById("thumb1").src = images[1];
        document.getElementById("thumb2").src = images[3];
        document.getElementById("main_city_name").textContent = city_names[2];
        document.getElementById("thumb1_city_name").textContent = city_names[1];
        document.getElementById("thumb2_city_name").textContent = city_names[3];
    } else if ((counter % 4) === 3) {
        document.getElementById("main_image").src = images[3];
        document.getElementById("thumb1").src = images[2];
        document.getElementById("thumb2").src = images[0];
        document.getElementById("main_city_name").textContent = city_names[3];
        document.getElementById("thumb1_city_name").textContent = city_names[2];
        document.getElementById("thumb2_city_name").textContent = city_names[0];
    }
}