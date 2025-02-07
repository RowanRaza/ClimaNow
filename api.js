import axios from "axios";

const API_KEY = "396349aa106a415a14234b4d1f51afa7"
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export async function fetchWeatherData(city, units) {
    try{
        const response = await axios.get(`${BASE_URL}/weather`, {
            params: {
                q: city,
                appid: API_KEY,
                units: units,
            },
        });
        return response.data;
    }catch(error) {
        throw(error)
    }
}