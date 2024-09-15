import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chatbot from "./pages/Chatbot";
import Translator from "./pages/Translator";
import Faq from "./pages/Faq";
import Home from "./pages/Home";
import Signin from "./pages/Signin"; // Ensure case matches your folder structure
import About from "./pages/About"; // Import About component

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/ChatBot" element={<Chatbot />} />
          <Route path="/Translator" element={<Translator />} />
          <Route path="/Faq" element={<Faq />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
