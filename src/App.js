import { BrowserRouter } from "react-router-dom";
import Footer from "./components/regions/Footer";
import { MainNav } from "./components/regions/MainNav";
import "./index.css";
import PagesRouter from "./PagesRouter";

function App() {
  return (
    <BrowserRouter>
      <section className="pt-6 mx-auto max-w-[1200px]">
        <MainNav />
        <div className="">
          <PagesRouter />
        </div>
        <Footer />
      </section>
    </BrowserRouter>
  );
}

export default App;
