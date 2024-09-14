
# Asynchronous JavaScript Project with Then Catch, Try Catch, Callback, Promise, and method fetch

## Introduction
This project contains examples of using asynchronous JavaScript with various techniques such as Promise, async/await, and callbacks. Each script demonstrates the application of these concepts in different scenarios, such as checking workdays, retrieving weather data, verifying student names, and fetching data from an API.

## Installation
To run this project, you need to have Node.js installed on your system. You can download it [here](https://nodejs.org).

Once Node.js is installed, you can run the scripts directly from the terminal.

## Usage
1. Clone or download this repository to your computer.
2. Open the terminal and navigate to the directory containing the JavaScript files.
3. Use the following commands to run each script:
    - To run `1.js`:
      ```bash
      node 1.js
      ```
    - To run `2.js`:
      ```bash
      node 2.js
      ```
    - To run `3.a.js`:
      ```bash
      node 3.a.js
      ```
    - To run `3.js`:
      ```bash
      node 3.js
      ```
    - To run `4.js`:
      ```bash
      node 4.js
      ```

## Features

### 1. Workday Check (`1.js`)
This script checks if the provided day is a workday. There are two methods to handle the check:
- **Then Catch**
- **Try Catch**

Example:
```javascript
// using then catch
cekharikerja('senin')
    .then(cekkerja => console.log(cekkerja)) // Output: senin
    .catch(error => console.error(error));    // If the day is not a workday

// using try catch 
async function cekhari(day) {
    try{
        const harikerja = await cekharikerja(day);
        console.log(harikerja)
    } catch (error) {
        console.error(error)
    }
}
```

### 2. Retrieve Month Data (`2.js`)
This script uses a callback to retrieve month data from an array after a simulated 4-second delay. It also handles potential errors by displaying an error message if the data is not found.

Example:
```javascript
getMonth(ShowMonth);  // Output: Displays the list of months from January to December
```

### 3. 
#### a. Weather Check (`3.a.js`)
This script checks the weather data for specific cities using a `Promise`. If the weather data for the requested city is available, it will be displayed; if not, an error message will be shown.

Example:
```javascript
checkWeather('Jakarta')
  .then(result => console.log(result))  // Output: Weather in Jakarta: Clear
  .catch(error => console.error(error));  // If the city is not found
```

#### b. Student Name Check (`3.js`)
This script checks if the requested name exists in the list of students using a `Promise`. If the name is found, it will be displayed; if not, an error message will be shown.

Example:
```javascript
chekNameStudent('Tegar')
    .then(chekName => console.log(chekName))  // Output: Tegar
    .catch(error => console.error(error));    // If the name is not found
```

### 4. Fetching Data from REST API (`4.js`)
This script fetches data from a REST API using the `fetch` method. The data fetched is a list of users from the API `jsonplaceholder.typicode.com`, then it displays the name of each user.

Example:
```javascript
fetch(ApiUrl)
  .then(response => response.json())
  .then(data => {
    data.forEach(user => {
      console.log(user.name);  // Output: The name of each user from the API
    });
  })
  .catch(error => console.error('Error fetching data:', error));  // If there is an error fetching the data
```

## Files

- **1.js**: Checks whether a day is a workday using `Then Catch` and `Try Catch`.
- **2.js**: Retrieves month data using a callback with error handling.
- **3.a.js**: Checks weather data for a city using `Promise`.
- **3.js**: Checks if a student’s name exists in a list using `Promise`.
- **4.js**: Fetches data from a REST API and displays the data using `fetch`.

## Contributor
- **NandaHasnan** - Developer
