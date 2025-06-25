document.querySelector('.main-img');

let img = document.querySelector('.main-img');

// var
// const
// let


const mainImg = document.querySelector('.main-img');
console.log("Hello!", mainImg);

const mainImgPicture = document.querySelector('.main-img>img');
mainImgPicture.src = 'assets/gallery_main.png';
const mainImgTitle = document.querySelector('.main-img>h4');
// mainImgTitle.innerHTML = 'Yello Shirt';


console.log(mainImgPicture.src);
console.log(mainImgPicture.style);
// mainImgPicture.src = './assets/Yello.jpg';
console.log(mainImgTitle.innerHTML);


/* function <func_name>(arg1, arg2...){
======some code=======
return <variable>

 */

// setImgDetails();
function setImgDetails() {
    mainImgPicture.src = './assets/Yello.jpg';
    mainImgTitle.innerHTML = 'Yello Shirt';
}

function setImgDetails2(src, text) {
    mainImgPicture.src = src;
    mainImgTitle.innerHTML = text;
}


mainImgPicture.addEventListener('click', setImgDetails);

mainImgPicture.addEventListener('dblclick', function () {
    setImgDetails2('./assets/Yello.jpg', 'Yello Shirt');
});


const prevArr = document.querySelectorAll('.prev img');
for (let i = 0; i < prevArr.length; i++) {
    prevArr[i].addEventListener('click', () => {
        setImgDetails2(prevArr[i].src, prevArr[i].getAttribute('data-text'));
    });

}

mainImgTitle.onclick = function () {
    mainImgTitle.style.color = 'red';
}





