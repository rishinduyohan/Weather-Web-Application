weather =[
    {city: "Kandy",temperature: 22,description: "Sunny"},
    {city: "Colombo",temperature: 28,description: "Clear"},
    {city: "Anuradhapura",temperature: 18,description: "Cloudy"},
    {city: "Galle",temperature: 26,description: "Rainy"},
    {city: "Jaffna",temperature: 30,description: "Hot"},
    {city: "Nuwara Eliya",temperature: 16,description: "Foggy"},
    {city: "Trincomalee",temperature: 27,description: "Windy"},
    {city: "Matara",temperature: 25,description: "Thunderstorms"},
    {city: "Batticaloa",temperature: 29,description: "Humid"},
    {city: "Kurunegala",temperature: 24,description: "Partly Cloudy"}
];

const weatherContainer = document.getElementById('weather');

weather.forEach(item => {
    const weatherCard = document.createElement('div');
    weatherCard.classList.add('weather-card');
    weatherCard.innerHTML = `
        <h2>${item.city}</h2>
        <p>Temperature: ${item.temperature}°C</p>
        <p>Description: ${item.description}</p>
    `;
    weatherContainer.appendChild(weatherCard);
});
