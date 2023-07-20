// const imageContainer = document.getElementById('image-container');
// const loader = document.getElementById('loader');

let photosArray = [];

const count = 30;
const apiKey = 'BvlJDIiVQBrJpwHa8RlTm7Xf_tFiPHKKXirJbkojUs0';
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Create Elements For Links & Photos, Add to DOM
// Helper function
function setAttributes(element, attributes) {
    for(const key in attributes) {
        element.setAttribute(key, attributes[key])
    }
}

function displayPhotos() {
    photosArray.forEach((photo) => {
        const item = document.createElement('a');
        setAttributes(item, {
            href: photo.links.html,
            targent: '_blank',
        });
    
        const image = document.createElement('img');
        setAttributes(item, {
            src: photosArray.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        })

        item.appendChild(image);
        image.appendChild(item);
    })
};

async function getPhotos() {
    try {
        const response = await fetch(apiURL);
        photosArray = await response.json();
        displayPhotos();
    } catch (error) {
        alert(error);
    }
};

getPhotos();