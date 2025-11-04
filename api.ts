export type WeatherData = {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  weather: {
    main: string;
    description: string;
  }[];
  dt: number; 
};

export const getWeatherData = async (city: string): Promise<WeatherData | null> => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dee663a7adac8de1ba18e93c1cbc30cc&units=metric&lang=ru`
    );

    const data: WeatherData = await response.json();

    const currentTime = new Date(data.dt * 1000).toLocaleTimeString("ru-RU", {
      hour: "2-digit",
      minute: "2-digit",
    });

    console.log("Weather data:", data);
    console.log("Время запроса:", currentTime);

    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};
