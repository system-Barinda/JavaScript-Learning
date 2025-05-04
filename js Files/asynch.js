// Sample object with values
const userData = {
    id: 1,
    name: "Alice",
    age: 25,
    email: "alice@example.com"
  };
  
  // Function that returns a Promise
  function getUserData(userId) {
    return new Promise((resolve, reject) => {
      console.log("Fetching user data...");
  
      setTimeout(() => {
        if (userData.id === userId) {
          resolve(userData); // Successfully found user
        } else {
          reject("User not found!"); // Error case
        }
      }, 2000); // Simulate delay (2 seconds)
    });
  }
  
  // Calling the Promise function
  getUserData(1)
    .then((data) => {
      console.log("User Data:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  