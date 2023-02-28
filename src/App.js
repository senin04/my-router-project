import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Article from "./pages/Article";
import NoPage from "./pages/NoPage";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Blogs" element={<Blogs />}></Route>
        <Route path="/Blogs/:id" element={<Article />}></Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
