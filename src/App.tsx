import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Layout from "./components/Layout";
// pages
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import Upcoming from "./pages/Upcoming";
// wrapper

const App: React.FC = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/upcoming" element={<Upcoming />} />
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App