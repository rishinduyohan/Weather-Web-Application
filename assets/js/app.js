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
    dailyItem.className = 'bg-blue-100 rounded-xl shadow p-4 text-center';
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
    navItem.className = 'bg-white border-gray-200 dark:bg-gray-900 ';
    navItem.innerHTML = `
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
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
          <div>
          <button 
                id="themeToggle" 
                class="flex items-center gap-2 px-4 py-2 transition-all duration-200"
            >
                <span id="themeIcon" class="text-lg">🌙</span>
            </button>
            </div>
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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15831.555923537337!2d80.33542144397657!3d7.253474534048998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae316b5affca98d%3A0xec4aece6bdbb55b1!2sKegalle!5e0!3m2!1sen!2slk!4v1754999178282!5m2!1sen!2slk" width="600" height="450" style="border:0;" 
            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
const footerContainer = document.getElementById('footer');
if (footerContainer) {
    const footerItem = document.createElement('div');
    footerItem.className = 'mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8';
    footerItem.innerHTML = `
      <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
          <a href="index.html" class="flex items-center">
            <img src="assets/images/icons8-sun.svg" class="h-8 me-3" alt="FlowBite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Daily Accu</span>
          </a>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li class="mb-4">
                <a href="index.html" class="hover:underline">Homepage</a>
              </li>
              <li>
                <a href="index.html" class="hover:underline">About Us</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li class="mb-4">
                <a href="https://github.com/rishinduyohan" class="hover:underline ">Github</a>
              </li>
              <li>
                <a href="https://github.com/rishinduyohan" class="hover:underline">Discord</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li class="mb-4">
                <a href="#" class="hover:underline">Privacy Policy</a>
              </li>
              <li>
                <a href="#" class="hover:underline">Terms &amp; Conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="index.html"
            class="hover:underline">Daily Accu™</a>. All Rights Reserved.
        </span>
        <div class="flex mt-4 sm:justify-center sm:mt-0">
          <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
              viewBox="0 0 8 19">
              <path fill-rule="evenodd"
                d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                clip-rule="evenodd" />
            </svg>
            <span class="sr-only">Facebook page</span>
          </a>
          <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
              viewBox="0 0 21 16">
              <path
                d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
            </svg>
            <span class="sr-only">Discord community</span>
          </a>
          <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
              viewBox="0 0 20 17">
              <path fill-rule="evenodd"
                d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                clip-rule="evenodd" />
            </svg>
            <span class="sr-only">Twitter page</span>
          </a>
          <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
              viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                clip-rule="evenodd" />
            </svg>
            <span class="sr-only">GitHub account</span>
          </a>
          <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
              viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                clip-rule="evenodd" />
            </svg>
            <span class="sr-only">Dribbble account</span>
          </a>
        </div>
      </div>
    `;
    footerContainer.appendChild(footerItem);
}