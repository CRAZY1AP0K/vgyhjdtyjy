const images = ["img/3F3F.webp", "img/756079611261831.jpg", "img/754598700535463.jpeg","img/png-clipart-shrek-shrek.png"];
const image = document.querySelector("#image");
const btnLeft = document.querySelector("#left");
const btnRight = document.querySelector("#right");
const indicatorBlock = document.querySelector("#indicators");

// индекс картинки 
let i = 0;

image.src = images[i];

// функция перехода к след изображениею 
function nextImg(e) {
    btnLeft.addEventListener('click', prevImg);
    btnLeft.classList.remove('no-active');

 
    // проверяем,если изоб последниее, то удаление по кнопке оброботчик события
    if (i == images.length - 1) {
        btnRight.classList.add('no-active');
        btnRight.removeEventListener('click', nextImg);
    } 
        i++;
        image.src = images[i];
    }




// функция перехода к след изображениею 
function prevImg(e) {
    btnRight.addEventListener('click', nextImg);
    btnRight.classList.remove('no-active');
    // проверяем,если изоб последниее, то удаление по кнопке оброботчик события
    if (i == 0) {
        btnLeft.classList.add('no-active');
        btnLeft.removeEventListener('click', prevImg);
    } 
        i--;
    image.src = images[i];
    }

 

btnRight.addEventListener('click', nextImg);
btnLeft.addEventListener('click', prevImg);
