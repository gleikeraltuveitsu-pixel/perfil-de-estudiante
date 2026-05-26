App.jsx
import { Header } from "./components/Header";
import { FeaturesSection } from "./components/FeaturesSection";
import { Footer } from "./components/Footer";
import "./App.css";

function App() {
  return (
    <article className="container">
      <Header />
      <FeaturesSection />
      <Footer />
    </article>
  );
}

export default App;