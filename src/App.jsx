import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main className="mx-4 md:mx-5 space-y-4 mt-[64px]">
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
