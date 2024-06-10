# honestSky - Weather App

A live weather web app with Open Weather API that displays the current forecast which dynamically changes according to the user input city.
Initially added 'Jhansi' as a default city. 

- Can checkout different weather by searching :
for example - Amsterdam (Rain weather)
            - Greenland (Cold weather)
            - Bhopal (Hot weather).





## Features

- Fetches the Live Open Weather API
- Light/dark mode toggle
- Shown the full weather information also changes units for better clarity
- Images and icon changes according to the weather condition for better UI.
- Used Context API for better state management also made a custom hook for toggle theme.



## Tech Stack

**Client:** React, TailwindCSS

**Server:** Open Weather API


## Installation

This application utilizes the React, Tailwind CSS. To set it up and run locally, follow these steps:



    
## Run Locally

Clone the project

```bash
  git clone https://github.com/ayush-ac7/honestSky.git
```

Go to the project directory

```bash
  cd honestSky
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Issues & Limitations

- OpenWeatherAPI has free tier limitations on the number of API calls you can make per day. Users need to upgrade their plan if they need more frequent updates.

- While unlikely, the OpenWeatherMap API might experience downtime or outages. App relies on the API's availability.

- Data Accuracy: Weather data is not always perfect which might not reflect real-time conditions with absolute accuracy.

- Unit Conversion: the conversion is based on calculations and might not be perfectly aligned with user preferences for specific temperature scales.

- Detailed Forecast: users can't access a more detailed forecast within the app itself.