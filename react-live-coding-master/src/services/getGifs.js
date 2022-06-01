import { API_KEY, API_URL } from "./settings";

const fromApiResponseToGifs = (apiResponse) => {
    const { data = [] } = apiResponse; // if data is undefined, set it to an empty array
    if (Array.isArray(data)) {
        // if data is an array
        const gifs = data.map((image) => {
            const { images, title, id } = image; // destructuring
            const { url } = images.downsized_medium;
            return { title, id, url }; // return the object
        });
        return gifs; // return the array
    }
    return []; // if data is not an array
};

export default function getGifs({
    limit = 15,
    rating = "g",
    keyword = "morty",
    page = 0,
} = {}) {
    const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${
    page * limit
  }&rating=${rating}&lang=en`; // Creating the apiURL with the parameters we want to send to the API (keyword, limit, page, rating)

    return fetch(apiURL)
        .then((res) => res.json()) // convert to json
        .then(fromApiResponseToGifs); // return the array of gifs
}