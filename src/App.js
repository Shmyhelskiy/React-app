import "./App.css";
import Nav from "./components/nav/Nav";
import Post from "./components/post/Post";
import * as img from "./components/post/image/post-image";

const postData = {
  author: {
    name: "Anakin skywalker",
    photo: img.ANAKIN_IMAGE,
    nickname: "@dart_vader",
  },
  content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
  image: img.RAY_IMAGE,
  date: "26 лют.",
};

function App() {
  return (
    <div className="App">
      <Nav />
      <Post postdata={postData} />
    </div>
  );
}

export default App;
