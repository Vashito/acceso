import React, { useState } from 'react';
import { LoadingButton } from '@mui/lab';
import { Box, Container, TextField, Typography } from '@mui/material';

const API_WEATHER = 'http://api.openweathermap.org/data/2.5/weather';

const App = () => {
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    hasError: false,
    message: '',
  });
  const [weather, setWeather] = useState({
    city: '',
    country: '',
    temp: '',
    condition: '',
    icon: '',
    conditionText: '',
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError({
      hasError: false,
      message: '',
    });

    const api_key = 'e836ef2d51d7c079bb635f037879e0b5';

    try {
      if (!city.trim()) throw { message: 'El campo ciudad es obligatorio' };

      const response = await fetch(`${API_WEATHER}?q=${city}&appid=${api_key}`);
      const data = await response.json();

      if (data.cod !== 200) {
        throw { message: data.message || 'Error al obtener datos climáticos' };
      }

      setWeather({
        city: data.name,
        country: data.sys.country,
        temp: (data.main.temp - 273.15).toFixed(2),
        condition: data.weather[0].main,
        icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
        conditionText: data.weather[0].description,
      });
    } catch (error) {
      console.error(error);
      setError({
        hasError: true,
        message: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container id="root" maxWidth="xs" sx={{ mt: 2, margin: 'auto' }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        Weather Report
      </Typography>
      <Box
        sx={{ display: 'grid', gap: 2 }}
        component="form"
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <TextField
          id="city"
          label="Ciudad"
          variant="outlined"
          size="small"
          required
          fullWidth
          value={city}
          onChange={(e) => setCity(e.target.value)}
          error={error.hasError}
          helperText={error.message}
        />
        <LoadingButton
          type="submit"
          variant="contained"
          loading={loading}
          loadingIndicator="Procesando..."
        >
          Buscar
        </LoadingButton>
      </Box>

      {weather.city && (
        <Box
          sx={{
            mt: 2,
            display: 'grid',
            gap: 2,
            textAlign: 'center',
          }}
        >
          <Typography variant="h4" component="h2">
            {weather.city}, {weather.country}
          </Typography>
          <Box
            component="img"
            alt={weather.conditionText}
            src={weather.icon}
            sx={{ margin: '0 auto' }}
          />
          <Typography variant="h5" component="h3">
            {weather.temp} °C
          </Typography>
          <Typography variant="h6" component="h4">
            {weather.conditionText}
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default App;
