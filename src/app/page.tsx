'use client';

import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { CustomBox } from './style';
import { CardCurrentTemperature } from '@/components/CardCurrentTemperature';
import { CardCityInformation } from '@/components/CardCityInformation';
import { CardTemperatureDaysOfWeek } from '@/components/CardTemperatureDaysOfWeek';
import { useQuery } from '@tanstack/react-query';
import { weatherForecastWebService } from '@/services/web/WeatherForecastWebService';

interface WeatherForecast {
  time: string[];
  weathercode: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
}

export default function Home() {
  const { data, isFetching } = useQuery({
    queryKey: ['getWeatherForecast'],
    queryFn: () => weatherForecastWebService.getWeatherForecast(),
    refetchOnWindowFocus: false,
  });

  if (isFetching || !data) return <p>Carregando...</p>;

  const { daily } = data as { daily: WeatherForecast };

  return (
    <main>
      <CustomBox>
        <Grid
          container
          spacing={2}
          sx={{ width: '100%', margin: '0 auto', padding: '2rem', maxWidth: '100%' }}
        >
          <Grid
            size={12}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <CardCityInformation />
            <CardCurrentTemperature />
          </Grid>
          <Grid size={12}>
            <Box sx={{ display: 'flex', gap: '1rem' }}>
              {daily.time.map((date, index) => (
                <CardTemperatureDaysOfWeek
                  key={date}
                  date={date}
                  weatherCode={daily.weathercode[index]}
                  maxTemp={daily.temperature_2m_max[index]}
                  minTemp={daily.temperature_2m_min[index]}
                />
              ))}
            </Box>
          </Grid>
        </Grid>
      </CustomBox>
    </main>
  );
}
