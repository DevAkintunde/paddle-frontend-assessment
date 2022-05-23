import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/regions/Footer";
import { MainNav } from "./components/regions/MainNav";
import "./index.css";
import Contact from "./pages/Contact";
import PagesRouter from "./PagesRouter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="contact-us" element={<Contact />} />
        <Route
          path="*"
          element={
            <section className="pt-6 mx-auto max-w-[1200px]">
              <MainNav />
              <div className="">
                <PagesRouter />
              </div>
              <Footer />
            </section>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
