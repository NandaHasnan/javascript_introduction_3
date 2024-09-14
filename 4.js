// URL dari REST API
const ApiUrl = 'https://jsonplaceholder.typicode.com/users';

// Menggunakan method fetch untuk mengambil data dari API
fetch(ApiUrl)
  .then(response => response.json()) // Mengubah response ke format JSON
  .then(data => {
    // Menampilkan hanya name dari setiap user
    data.forEach(user => {
      console.log(user.name);
    });
  })
  .catch(error => console.error('Error fetching data:', error));

  