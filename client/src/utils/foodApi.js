require('dotenv').config({ path: '../../../.env'});
const fetch = require('node-fetch');

const apiKey = process.env.ZOM_API_KEY;

export const apiCall = async (location, cuisineId) => {

    const cityCall = await fetch(`https://developers.zomato.com/api/v2.1/cities?q=${location}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'user-key': `${apiKey}`
        }
    })

    const cityData = await cityCall.json()

    const cityId = cityData.location_suggestions[0].id

    const restaurantSearch = await fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&entity_type=city&cuisines=${cuisineId}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'user-key': `${apiKey}`
        }
    });

    const resData = await restaurantSearch.json();

    let restaurants = resData.restaurants;

    const randomSelect = Math.floor(Math.random() * restaurants.length);

    let {restaurant} = restaurants[randomSelect];

    return restaurant;
};