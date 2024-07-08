import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>page d'accueil</h1>} />
          <Route
            path="/publication/:id"
            element={<h1>page de publication</h1>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
