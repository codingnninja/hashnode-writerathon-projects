
//connvert el to data...single(static&dynamic...display...next...previous...paginate...slide...carousel) & multiple (multiple in single) display.

const images = [
    { path: 'assets/images/Digital-Marketing.jpg', title: 'good image', description: 'good image'},
    { path: 'assets/images/danial-igdery-FCHlYvR5gJI-unsplash.jpg', title: 'good title', description: 'goood description2'},
    { path: 'assets/images/icons8-team-OLzlXZm_mOw-unsplash.jpg', title: 'title3', description: 'description3'},
    {path:'assets/images/istockphoto-1136972579-612x612.jpg', title: 'title4', description: 'description4'},
]

let currentImageIndex = 0;
const lastImageIndex = images.length - 1;
0
const display = (currentImageIndex) => {
    //display slide image
    const sliderImage = document.getElementById('slider_image');
    sliderImage.src = images[currentImageIndex].path;

    //display slide title
   const slideTitle = document.querySelector('.slide-title');
   slideTitle.innerHTML = images[currentImageIndex].title;

   //display slide description
   const slideDescription = document.querySelector('.slide-description');
   slideDescription.innerHTML = images[currentImageIndex].description;

   //create slide number
   makeSlideNumber(currentImageIndex, lastImageIndex);
}

display(currentImageIndex);// Display the first image in the array

paginate(images);// make dots as paginators

const next = (increment) => {
    if(currentImageIndex < lastImageIndex) {
        currentImageIndex = currentImageIndex + increment;
    }
    display(currentImageIndex);
}

const previous = (decrement) => {
    if(currentImageIndex > 0 ) {
        currentImageIndex = currentImageIndex + decrement;
    }
    display(currentImageIndex);
}

//This uses multiple display
function paginate (images) {
    const dotsFromDOM = document.querySelector('.dots');
    const dots = images.map( (image, index) => {            
        const defaultActiveDot = index === 0 ? 'active' : '';// make the first item active.
        return `<div class="dot ${defaultActiveDot}" id="dot${index}" onclick="display(${index})"></div>`;
    });
    dotsFromDOM.innerHTML = dots.join(' ');

    dotsFromDOM.addEventListener('click', (event) => {
        makeActive(event.target);
    })
}

function makeActive(element){
    const activeElement = document.querySelector('.active');
    activeElement.classList.remove('active');

    element.classList.add('active');
}

function makeSlideNumber (currentImageIndex, lastImageIndex) {
    const slideNumber = `${currentImageIndex + 1} / ${lastImageIndex + 1}`;

    const slideNumberUI = document.querySelector('.slide-number');
    slideNumberUI.innerHTML = slideNumber;
}




