import { BrowserRouter } from "react-router-dom";
import Footer from "./components/regions/Footer";
import { MainNav } from "./components/regions/MainNav";
import "./index.css";
import PagesRouter from "./PagesRouter";

function App() {
  return (
    <BrowserRouter>
      <section className="pt-6 px-16 mx-8">
        <MainNav />
        <div className="m-5">
          <PagesRouter />
        </div>
        <Footer />
      </section>
    </BrowserRouter>
  );
}

export default App;
