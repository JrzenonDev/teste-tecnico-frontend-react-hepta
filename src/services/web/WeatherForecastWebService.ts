import axios, { AxiosError } from 'axios';

class WeatherForecastWebService {
  getWeatherForecast = async () => {
    try {
      const response = await axios.get('https://api.open-meteo.com/v1/forecast', {
        params: {
          latitude: -23.5505,
          longitude: -46.6333,
          daily: ['temperature_2m_max', 'temperature_2m_min'],
          timezone: 'auto',
        },
      });
      return response.data;
    } catch (error) {
      const err = error as AxiosError;
      throw err.response;
    }
  };
}

export const weatherForecastWebService = new WeatherForecastWebService();
