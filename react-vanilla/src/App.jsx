import { useState } from "react";
import Vanilla from "./components/Vanilla";
import "./App.css";

export default function App() {
  function Button() {
    function handleClick() {
      console.log("Button clicked!");
    }

    return <button onClick={handleClick}>Click me</button>;
    <Vanilla />;
  }
}
function Greet() {
  return <h1>Hello world</h1>;
}

function App() {
  const isLoggedIn = false;
  if (isLoggedIn) {
    return <h1>Welcome back</h1>;
  } else {
    return <h1>Please log in</h1>;
  }
}

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getPosts() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const posts = await response.json();

      setPosts(posts);
    }

    getPosts();
  }, []);

  return (
    <ul>
      {posts.map((post) => (
        <li>{post.title}</li>
      ))}
    </ul>
  );
}

function App() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

function Button(props) {
  return <button>{props.text}</button>;
}
function App() {
  return <Button text="Click me" />;
}
function Button(props) {
  return <button className="button">{props.text}</button>;
}


.button {
  background-color: red;
}


function Form() {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    console.log(formData.get("name"));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" />
      <button>Submit</button>
    </form>
  );
}

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

function Contact() {
  return <h1>Contact</h1>;
}

function App() {
  const path = window.location.pathname;

  if (path === "/") {
    return <Home />;
  } else if (path === "/about") {
    return <About />;
  } else if (path === "/contact") {
    return <Contact />;
  }
}
 