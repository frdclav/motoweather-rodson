import axios from 'axios';

export default {
    // Try to Login
    userLogin: (userData) => {
        return axios.post('/api/users/login', userData);
    },
    userRegister: (userData) => {
        return axios.post('/api/users/register', userData);
    },
    userInput: (userInput) => {
        return axios.post('/api/search/search', userInput);
    },
    pastSearches: (id) => {
        return axios.get(`/api/search/findById/${id}`);
    },

    getWeather: async (search) => {
        const { lat, lon } = search;
        const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`;
        try {
            const weather = await axios.get(weatherUrl);
            return weather.data;
        } catch (error) {
            console.log(error);
        }
    }
};
