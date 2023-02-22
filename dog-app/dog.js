const select = document.querySelector('#breeds');


async function dogBreed() {

    const response = await fetch('https://dog.ceo/api/breeds/list/all');
    const data = await response.json();
    const breedsObj = data.message;
    const breedsArray = Object.keys(breedsObj);

    // looping through the breeds array and creating dom element for every breed and appending it to select element
    for (let i = 0; i < breedsArray.length; i++) {
        const option = document.createElement('option');
        option.value = breedsArray[i];
        option.innerText = breedsArray[i];
        select.appendChild(option)

    }
}

const img = document.querySelector('.dog-img');
const spinner = document.querySelector('.spinner');

async function breedImg(byBreedUrl) {

    // adding show class on spinner & removing show class from image
    spinner.classList.add('show');
    img.classList.remove('show');

    const response = await fetch(byBreedUrl);
    const data = await response.json();

    img.src = data.message;

}

// load event listener on image
img.addEventListener('load', () => {
    spinner.classList.remove('show');
    img.classList.add('show');
})

select.addEventListener('change', (e) => {
    const breed = e.target.value;
    const byBreedUrl = `https://dog.ceo/api/breed/${breed}/images/random`;

    breedImg(byBreedUrl).catch((err) => {
        console.log('Unable to fetch dog images due to', err);
    });

})

// dogBreed() is an async function, it returns promise after resolving and rejecting the request, we are handling promise rejection using catch method
dogBreed().catch((err) => {
    console.log('Unable to fetch all breeds', err);
});
