function checkWeather(city) {
  return new Promise((resolve, reject) => {
    const weatherData = {
      'Jakarta': 'Cerah',
      'Bandung': 'Hujan',
      'Surabaya': 'Berawan'
    };
    setTimeout(() => {
      const weather = weatherData[city];
      if (weather) {
        resolve(`Cuaca di ${city}: ${weather}`);
      } else {
        reject(new Error(`Data cuaca untuk ${city} tidak ditemukan`));
      }
    }, 2000); // Simulasi operasi asinkron
  });
}

// Menggunakan Promise
checkWeather('Jakarta')
  .then(result => console.log(result))  // Output: Cuaca di Jakarta: Cerah
  .catch(error => console.error(error));

  