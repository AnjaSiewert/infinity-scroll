const count = 5;
const apiKey = 'BvlJDIiVQBrJpwHa8RlTm7Xf_tFiPHKKXirJbkojUs0';
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

async function getPhotos() {
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        // Catch error here
    }
};

getPhotos();