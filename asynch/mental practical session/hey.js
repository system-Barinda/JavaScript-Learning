// function addTwoNumber(num1,num2)
// {
//     return new Promise((resolved,rejected) => {
//         setTimeout(() => {
//             if(typeof num1 === 'number' && typeof num2 === 'number')
//             {
//                 resolved(num1 + num2);
//             }
//             else 
//             {
//                 rejected("please enter the valid data");
//             }
//         },2000);
//     });
// }
// function subtractTwoNumber(num1,num2)
// {
//     return new Promise((resolved,rejected) => {
//         setTimeout(() => {
//             if(typeof num1 === 'number' && typeof num2 === 'number')
//             {
//                 resolved(num1 - num2);
//             }
//             else 
//             {
//                 rejected("please enter the valid data");
//             }
//         },2000);
//     });
// }
// const promises = [
//     addTwoNumber(10,10),
//     subtractTwoNumber(100,10)
// ];
// Promise.allSettled(promises)
// .then((result) => {
//     result.forEach(result =>{
//        if(result.status === 'fulfilled')
//        {
//         console.log("operation succeful",result.value);
//        }
//        else if(result.status === 'rejected')
//        {
//          console.log("data are rejected too",result.reason);
//        }
//     });
// })




// Simulate fetching user data
// Simulate fetching user data
async function fetchUserData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("User data fetched.");
            resolve({ id: 1, name: "John Doe" });
        }, 1000); // Simulate delay of 1 second
    });
}

// Simulate fetching posts
async function fetchPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Posts fetched for user with ID: ${userId}`);
            resolve([{ id: 101, title: "Post 1" }, { id: 102, title: "Post 2" }]);
        }, 1500); // Simulate delay of 1.5 seconds
    });
}

// Simulate fetching comments for a post
async function fetchComments(postId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Comments fetched for post with ID: ${postId}`);
            resolve([{ id: 1, text: "Great post!" }, { id: 2, text: "Nice work!" }]);
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Function to execute all tasks in sequence using await
async function executeTasks() {
    try {
        // Step 1: Fetch user data
        const user = await fetchUserData();

        // Step 2: Fetch posts for the fetched user
        const posts = await fetchPosts(user.id);

        // Step 3: Fetch comments for the first post
        const comments = await fetchComments(posts[0].id);

        // Print the results
        console.log("User:", user);
        console.log("Posts:", posts);
        console.log("Comments:", comments);
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

// Execute the tasks
executeTasks();
