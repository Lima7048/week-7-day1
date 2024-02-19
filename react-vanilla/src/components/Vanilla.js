<button>Click me</button>
const button = document.querySelector("button");
button.addEventListener("click", () => {
    console.log("Button clicked!");
});

<div id="app"></div>
const app = document.querySelector("#app");
app.innerHTML = "<h1>Hello world</h1>";


<div id="app"></div>
const app = document.querySelector("#app");
const isLoggedIn = false;
if (isLoggedIn) {
    app.innerHTML = "<h1>Welcome back</h1>";
} else {
    app.innerHTML = "<h1>Please log in</h1>";
}

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

<div id="app"></div>
const app = document.querySelector("#app");
function Button(props) {
    return `<button>${props.text}</button>`;
}
app.innerHTML = Button({ text: "Click me" });

<div id="app"></div>
const app = document.querySelector("#app");
function Button(props) {
    return `<button class="button">${props.text}</button>`;
}
app.innerHTML = Button({ text: "Click me" });
 .button {
    background - color: red;
}


<div id="app"></div>
const app = document.querySelector("#app");
function Form() {
    return `
     <form>
       <input type="text" name="name" />
       <button>Submit</button>
     </form>
   `;
}
app.innerHTML = Form();
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    console.log(formData.get("name"));
});

<div id="app"></div>
const app = document.querySelector("#app");
function Home() {
    return "<h1>Home</h1>";
}
function About() {
    return "<h1>About</h1>";
}
function Contact() {
    return "<h1>Contact</h1>";
}
function renderPage() {
    const path = window.location.pathname;
    if (path === "/") {
        app.innerHTML = Home();
    } else if (path === "/about") {
        app.innerHTML = About();
    } else if (path === "/contact") {
        app.innerHTML = Contact();
    }
}
window.addEventListener("popstate", renderPage);
renderPage();
