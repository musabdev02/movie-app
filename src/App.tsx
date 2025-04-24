import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Layout from "./components/Layout";
// pages
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App