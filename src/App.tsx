import { BrowserRouter, Route, Routes } from "react-router-dom";
import Posts from "./pages/Posts";
import Post from "./pages/Post";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/publication/:id" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
