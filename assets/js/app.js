const weatherCard = [
    { id: 1, title: 'Colombo, Western, Sri Lanka', time: 'Monday, 2:15 PM', icon: 'assets/images/icons8-sun.svg', condition: 'Sunny', temperature: '31°C / 88°F', feels: 'Feels like: 33°C' },
    { id: 2, title: 'Gampaha, Western, Sri Lanka', time: 'Monday, 2:15 PM', icon: 'assets/images/icons8-partly-cloudy.svg', condition: 'Partly Cloudy', temperature: '30°C / 86°F', feels: 'Feels like: 31°C' },
    { id: 3, title: 'Kalutara, Western, Sri Lanka', time: 'Monday, 2:15 PM', icon: 'assets/images/icons8-rain.svg', condition: 'Rainy', temperature: '29°C / 84°F', feels: 'Feels like: 30°C' },
    { id: 4, title: 'Kandy, Central, Sri Lanka', time: 'Monday, 2:15 PM', icon: 'assets/images/icons8-partly-cloudy.svg', condition: 'Partly Cloudy', temperature: '28°C / 82°F', feels: 'Feels like: 29°C' },
    { id: 5, title: 'Matale, Central, Sri Lanka', time: 'Monday, 2:15 PM', icon: 'assets/images/icons8-sun.svg', condition: 'Sunny', temperature: '29°C / 84°F', feels: 'Feels like: 30°C' },
    { id: 6, title: 'Nuwara Eliya, Central, Sri Lanka', time: 'Monday, 2:15 PM', icon: 'assets/images/icons8-rain.svg', condition: 'Rainy', temperature: '20°C / 68°F', feels: 'Feels like: 19°C' },
    { id: 7, title: 'Galle, Southern, Sri Lanka', time: 'Monday, 2:15 PM', icon: 'assets/images/icons8-rain.svg', condition: 'Rainy', temperature: '27°C / 81°F', feels: 'Feels like: 28°C' },
    { id: 8, title: 'Matara, Southern, Sri Lanka', time: 'Monday, 2:15 PM', icon: 'assets/images/icons8-partly-cloudy.svg', condition: 'Cloudy', temperature: '28°C / 82°F', feels: 'Feels like: 29°C' },
    { id: 9, title: 'Hambantota, Southern, Sri Lanka', time: 'Monday, 2:15 PM', icon: 'assets/images/icons8-sun.svg', condition: 'Sunny', temperature: '32°C / 90°F', feels: 'Feels like: 33°C' },
    { id: 10, title: 'Jaffna, Northern, Sri Lanka', time: 'Monday, 2:15 PM', icon: 'assets/images/icons8-sun.svg', condition: 'Sunny', temperature: '32°C / 90°F', feels: 'Feels like: 34°C' },
    { id: 11, title: 'Kilinochchi, Northern, Sri Lanka', time: 'Monday, 2:15 PM', icon: 'assets/images/icons8-partly-cloudy.svg', condition: 'Cloudy', temperature: '31°C / 88°F', feels: 'Feels like: 32°C' },
    { id: 12, title: 'Mannar, Northern, Sri Lanka', time: 'Monday, 2:15 PM', icon: 'assets/images/icons8-rain.svg', condition: 'Rainy', temperature: '30°C / 86°F', feels: 'Feels like: 31°C' },
    { id: 13, title: 'Vavuniya, Northern, Sri Lanka', time: 'Monday, 2:15 PM', icon: 'assets/images/icons8-sun.svg', condition: 'Sunny', temperature: '33°C / 91°F', feels: 'Feels like: 34°C' },
    { id: 14, title: 'Mullaitivu, Northern, Sri Lanka', time: 'Monday, 2:15 PM', icon: 'assets/images/icons8-partly-cloudy.svg', condition: 'Partly Cloudy', temperature: '31°C / 88°F', feels: 'Feels like: 32°C' },
    { id: 15, title: 'Batticaloa, Eastern, Sri Lanka', time: 'Monday, 2:15 PM', icon: 'assets/images/icons8-rain.svg', condition: 'Rainy', temperature: '29°C / 84°F', feels: 'Feels like: 30°C' },
    { id: 16, title: 'Ampara, Eastern, Sri Lanka', time: 'Monday, 2:15 PM', icon: 'assets/images/icons8-sun.svg', condition: 'Sunny', temperature: '32°C / 90°F', feels: 'Feels like: 33°C' },
    { id: 17, title: 'Trincomalee, Eastern, Sri Lanka', time: 'Monday, 2:15 PM', icon: 'assets/images/icons8-partly-cloudy.svg', condition: 'Cloudy', temperature: '30°C / 86°F', feels: 'Feels like: 31°C' },
    { id: 18, title: 'Kurunegala, North Western, Sri Lanka', time: 'Monday, 2:15 PM', icon: 'assets/images/icons8-sun.svg', condition: 'Sunny', temperature: '33°C / 91°F', feels: 'Feels like: 35°C' },
    { id: 19, title: 'Puttalam, North Western, Sri Lanka', time: 'Monday, 2:15 PM', icon: 'assets/images/icons8-partly-cloudy.svg', condition: 'Partly Cloudy', temperature: '32°C / 90°F', feels: 'Feels like: 33°C' },
    { id: 20, title: 'Anuradhapura, North Central, Sri Lanka', time: 'Monday, 2:15 PM', icon: 'assets/images/icons8-sun.svg', condition: 'Sunny', temperature: '34°C / 93°F', feels: 'Feels like: 36°C' },
    { id: 21, title: 'Polonnaruwa, North Central, Sri Lanka', time: 'Monday, 2:15 PM', icon: 'assets/images/icons8-partly-cloudy.svg', condition: 'Cloudy', temperature: '32°C / 90°F', feels: 'Feels like: 33°C' },
    { id: 22, title: 'Badulla, Uva, Sri Lanka', time: 'Monday, 2:15 PM', icon: 'assets/images/icons8-rain.svg', condition: 'Rainy', temperature: '25°C / 77°F', feels: 'Feels like: 26°C' },
    { id: 23, title: 'Monaragala, Uva, Sri Lanka', time: 'Monday, 2:15 PM', icon: 'assets/images/icons8-sun.svg', condition: 'Sunny', temperature: '31°C / 88°F', feels: 'Feels like: 32°C' },
    { id: 24, title: 'Ratnapura, Sabaragamuwa, Sri Lanka', time: 'Monday, 2:15 PM', icon: 'assets/images/icons8-partly-cloudy.svg', condition: 'Partly Cloudy', temperature: '29°C / 84°F', feels: 'Feels like: 30°C' },
    { id: 25, title: 'Kegalle, Sabaragamuwa, Sri Lanka', time: 'Monday, 2:15 PM', icon: 'assets/images/icons8-sun.svg', condition: 'Sunny', temperature: '30°C / 86°F', feels: 'Feels like: 31°C' }
];

const hourlyForecast = [
    { id: 1, icon: '☀️', title: 'Sunny', temp: '30°C', time: '1 PM' },
    { id: 2, icon: '🌨️', title: 'Cloudy', temp: '29°C', time: '2 PM' },
    { id: 3, icon: '🌧️', title: 'Rain', temp: '18°C', time: '3 PM' },
    { id: 4, icon: '💨', title: 'Windy', temp: '20°C', time: '4 PM' },
    { id: 5, icon: '⛈️', title: 'Storm', temp: '15°C', time: '5 PM' },
    { id: 6, icon: '☀️', title: 'Sunny', temp: '35°C', time: '6 PM' },
    { id: 7, icon: '🌨️', title: 'Cloudy', temp: '25°C', time: '7 PM' }
];
const weatherDetails = [
    { id: 1, icon: '💨', title: 'Wind', value: '15 KPH' },
    { id: 2, icon: '💧', title: 'Humidity', value: '65%' },
    { id: 3, icon: '☁️', title: 'Cloud', value: '10%' },
    { id: 4, icon: '🌞', title: 'UV Index', value: '5' },
    { id: 5, icon: '📏', title: 'Pressure', value: '1015 hPa' },
    { id: 6, icon: '👀', title: 'Visibility', value: '10 km' }
];
const dailyForecast = [
    { id: 1, day: 'Tuesday', icon: '☀️', maxTemp: '32°C', minTemp: '26°C', condition: 'Sunny' },
    { id: 2, day: 'Wednesday', icon: '🌧️', maxTemp: '28°C', minTemp: '24°C', condition: 'Rainy' },
    { id: 3, day: 'Thursday', icon: '🌨️', maxTemp: '30°C', minTemp: '25°C', condition: 'Cloudy' },
    { id: 4, day: 'Friday', icon: '☀️', maxTemp: '33°C', minTemp: '27°C', condition: 'Sunny' },
    { id: 5, day: 'Saturday', icon: '⛈️', maxTemp: '29°C', minTemp: '23°C', condition: 'Stormy' },
    { id: 6, day: 'Sunday', icon: '🌨️', maxTemp: '31°C', minTemp: '26°C', condition: 'Partly Cloudy' }
];
const hourlyForecastContainer = document.getElementById('hourly');
hourlyForecast.forEach(hour => {
    const hourItem = document.createElement('div');
    hourItem.className = 'bg-gradient-to-b from-blue-200 to-white rounded-xl shadow p-4 min-w-[110px] text-center';
    hourItem.innerHTML = `
        <p class="text-blue-600 font-semibold mb-1">${hour.time}</p>
        <h1 class="text-2xl">${hour.icon}</h1>
        <p class="text-blue-700 text-sm mb-1">${hour.title}</p>
        <p class="text-xl font-bold text-blue-900">${hour.temp}</p>
    `;
    hourlyForecastContainer.appendChild(hourItem);
});
const dailyForecastContainer = document.getElementById('daily-forecast');
dailyForecast.forEach(daily => {
    const dailyItem = document.createElement('div');
    dailyItem.className = 'bg-gradient-to-b from-cyan-100 to-white rounded-xl shadow p-4 text-center';
    dailyItem.innerHTML = `
        <p class="font-bold text-blue-700">${daily.day}</p>
        <h1 class="text-2xl">${daily.icon}</h1>
        <p class="text-blue-900">Max: ${daily.maxTemp}</p>
        <p class="text-blue-500">Min: ${daily.minTemp}</p>
        <span class="text-blue-400 text-xs">${daily.condition}</span>
    `;
    dailyForecastContainer.appendChild(dailyItem);
});

const weatherDetailsContainer = document.getElementById('weather-Details');
weatherDetails.forEach(weather => {
    const weatherDetail = document.createElement('div');
    weatherDetail.className = 'bg-blue-100 rounded-xl p-3 shadow';
    weatherDetail.innerHTML = `
       <span class="text-2xl">${weather.icon}</span>
        <div class="text-blue-700 font-semibold mt-1" id="wind-speed">${weather.value}</div>
        <div class="text-xs text-blue-400">${weather.title}</div>
    `;
    weatherDetailsContainer.appendChild(weatherDetail);
});
const navbarContainer = document.getElementById('navbar');
if (navbarContainer) {
    const navItem = document.createElement('nav');
    navItem.className = 'bg-white border-gray-200 dark:bg-gray-900';
    navItem.innerHTML = `
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="assets/images/icons8-sun.svg" class="h-8" alt="Flowbite Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Daily Accu</span>
        </a>
        <div class="flex md:order-2">
          <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false"
            class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
            <span class="sr-only">Search City</span>
          </button>
          <div class="relative hidden md:block">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
              <span class="sr-only">Search icon</span>
            </div>
            <input type="text" id="search-navbar"
              class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search...">
          </div>
          <button data-collapse-toggle="navbar-search" type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-search" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
          <div class="relative mt-3 md:hidden">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="text" id="search-navbar"
              class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search...">
          </div>
          <ul
            class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#"
                class="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white 
                md:dark:hover:bg-transparent dark:border-gray-700">About</a>
            </li>
            <li>
              <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white 
                md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
            </li>

          </ul>
        </div>
      </div>
        `;
    navbarContainer.appendChild(navItem);
}
const heroContainer = document.getElementById('hero');
if (heroContainer) {
    const heroItem = document.createElement('div');
    heroItem.className = 'relative';
    heroItem.innerHTML = `
      <video autoplay muted loop playsinline class="absolute inset-0 w-full h-full object-cover z-0">
      <source src="assets/images/istockphoto-962500712-640_adpp_is.mp4" type="video/mp4">
    </video>
    <div class="relative z-10 text-center py-8 bg-gradient-to-r from-blue-300/80 to-cyan-500/80 shadow-lg">
      <h1 class="text-4xl font-extrabold text-white drop-shadow-lg">Daily Weather Reports</h1>
      <form class="max-w-md mx-auto mt-8 mb-2">
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="search" id="default-search"
            class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search city, location or zip-code..." required />
          <button type="submit"
            class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><a href="index.html">Search</a></button>
        </div>
      </form>
    </div>
    `;
    heroContainer.appendChild(heroItem);
}
const mapContainer = document.getElementById('map');
if (mapContainer) {
    const mapItem = document.createElement('div');
    mapItem.className = 'max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8';
    mapItem.innerHTML = `
      <div class="max-w-2xl lg:max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-extrabold text-gray-900">Visit Our Location</h2>
        <p class="mt-4 text-lg text-gray-500">A clear and concise address, directions, and potentially a map.</p>
      </div>
      <div class="mt-16 lg:mt-20">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
              width="100%" height="480" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
          </div>
          <div>
            <div class="max-w-full mx-auto rounded-lg overflow-hidden">
              <div class="px-6 py-4">
                <h3 class="text-lg font-medium text-gray-900">Our Address</h3>
                <p class="mt-1 text-gray-600">123 Main St, Kegalle, Sri Lanka</p>
              </div>
              <div class="border-t border-gray-200 px-6 py-4">
                <h3 class="text-lg font-medium text-gray-900">Hours</h3>
                <p class="mt-1 text-gray-600">Monday - Friday: 9am - 5pm</p>
                <p class="mt-1 text-gray-600">Saturday: 10am - 4pm</p>
                <p class="mt-1 text-gray-600">Sunday: Closed</p>
              </div>
              <div class="border-t border-gray-200 px-6 py-4">
                <h3 class="text-lg font-medium text-gray-900">Contact</h3>
                <p class="mt-1 text-gray-600">Email: accuweather@example.com</p>
                <p class="mt-1 text-gray-600">Phone: +94 71165 2388</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    mapContainer.appendChild(mapItem);
}