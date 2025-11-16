// What is Axios?
// Axios is a popular JavaScript library used to make HTTP requests from both the browser and Node.js environments. 
// Axios is a promised-based HTTP client used to communicate with APIs or Backend services.

// In simple words : Axios helps react apps to send and receive data from external sources like servers or APIs.

// It is built on top of the XMLHttpRequest interface and provides a simple and intuitive API for sending asynchronous requests to servers, handling responses, and managing errors.


// Examples Tasks :

    // Get all users from an API
    // Form submission
    // Authentication (login/logout)
    // Fetching data for display
    // Updating user profiles
    // Deleting resources

// Key Features of Axios:

// Promise-based: Axios uses Promises, making it easier to work with asynchronous operations and handle responses using .then() and .catch() methods.

// Supports HTTP methods: Axios supports all standard HTTP methods like GET, POST, PUT, DELETE, PATCH, etc.

// Automatic JSON transformation: Axios automatically transforms JSON data when sending requests and receiving responses.


// Why do use Axios?

// React itself cannot fetch data.
// To interact with any API, we need a library to make HTTP requests.

// We have two options :
    // Fetch API (built-in browser API)
    // Axios (third-party library)

// Option 1: Fetch API

    // Built-in browser API, no installation required
    // Hard syntax for complex requests
    // No automatic JSON transformation
    // Error handling can be difficult

// Option 2: Axios

    // Requires installation via npm or yarn
    // Simple and clean syntax for making requests
    // Automatic JSON transformation
    // Better error handling with status codes

// Note Point : Axios is popular in production applications due to its ease of use and additional features compared to the Fetch API.

// Installation of Axios in React:

    // Using npm:
        // npm install axios

    // Using yarn:
        // yarn add axios
        
// After installation, you can import Axios in your React components and start making HTTP requests to interact with APIs or backend services.