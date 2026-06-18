import Cursor from "./components/ui/Cursor";
import GrainOverlay from "./components/ui/GrainOverlay";
import SmoothScroll from "./components/layout/SmoothScroll";
import Hero from "./components/sections/Hero";
import Work from "./components/sections/Work";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <SmoothScroll>
      <Cursor />
      <GrainOverlay />
      <Hero />
      <Work />
      <Footer />
    </SmoothScroll>
  );
}

export default App;
