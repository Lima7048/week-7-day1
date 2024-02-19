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
