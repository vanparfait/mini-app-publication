import { BrowserRouter, Route, Routes } from "react-router-dom";
import Posts from "./pages/Posts";

import PostDetail from "./pages/PostDetail";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/publication/:id" element={<PostDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
