import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Layout from "./components/Layout";
// pages
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import Upcoming from "./pages/Upcoming";
import Favorites from "./pages/Favorites";
import Moviedetail from "./pages/Moviedetail";

const App: React.FC = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/upcoming" element={<Upcoming />} />
          </Route>
          <Route path="/movie/:id" element={<Moviedetail />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App