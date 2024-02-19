{/* <button>Click me</button>

const button = document.querySelector("button");

button.addEventListener("click", () => {
    console.log("Button clicked!");
}); */}

{/* <div id="app"></div>

const app = document.querySelector("#app");

app.innerHTML = "<h1>Hello world</h1>"; */}


// <div id="app"></div>

// const app = document.querySelector("#app");

// const isLoggedIn = false;

// if (isLoggedIn) {
//     app.innerHTML = "<h1>Welcome back</h1>";
// } else {
//     app.innerHTML = "<h1>Please log in</h1>";
// }

<div id="app"></div>

const app = document.querySelector("#app");

async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    return posts;
}

async function main() {
    const posts = await getPosts();
    app.innerHTML = `
     <ul>
       ${posts.map((post) => `<li>${post.title}</li>`).join("")}
     </ul>
   `;
}


<div id="app"></div>

const app = document.querySelector("#app");

let count = 0;

app.innerHTML = `
   <p>You clicked ${count} times</p>
   <button>Click me</button>
 `;

const button = document.querySelector("button");

button.addEventListener("click", () => {
    count++;
    app.innerHTML = `
   <p>You clicked ${count} times</p>
   <button>Click me</button>
 `;
});
