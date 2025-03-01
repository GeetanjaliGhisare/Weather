const apiKey = "0e92d68683ec9f95d296576033607728"; 
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    try {
        const response = await fetch(apiUrl + encodeURIComponent(city) + `&appid=${apiKey}`);
        const data = await response.json();

        console.log("API Response:", data); // Debugging output

        if (data.cod === "404") {
            document.querySelector(".city").innerText = "City not found!";
            document.querySelector(".temp").innerText = "--°C";
            document.querySelector(".humidity").innerText = "--%";
            document.querySelector(".wind").innerText = "--Km/h";
            weatherIcon.src = "images/error.png";
            return;
        }

        if (!data.name) {
            console.error("Error: City name is undefined in API response");
            return;
        }

        // Update UI with weather data
        document.querySelector(".city").innerText = data.name;
        document.querySelector(".temp").innerText = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerText = data.main.humidity + "%";
        document.querySelector(".wind").innerText = data.wind.speed + "Km/h";

        // Set weather icon
        const weatherCondition = data.weather[0]?.main.toLowerCase();
        const iconMap = {
            "clouds": "images/clouds.png",
            "clear": "images/clear.png",
            "rain": "images/rain.png",
            "drizzle": "images/drizzle.png",
            "mist": "images/mist.png"
        };
        
        weatherIcon.src = iconMap[weatherCondition] || "images/default.png";
    } catch (error) {
        console.error("Error fetching weather:", error);
        alert("Could not fetch weather data. Check console for details.");
    }
}

// Event listeners for search
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value.trim());
});

searchBox.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchBox.value.trim());
    }
});
