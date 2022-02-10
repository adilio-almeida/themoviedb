import { Routes, Route } from "react-router-dom";
import Details from "./pages/Details";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Details />} />
      </Routes>
    </>
  );
}
