import { useState } from "react";
import Carousel from "./Carousel/Carousel";
import RecipesCarousel from "./RecipesCarousel/RecipesCarousel.jsx";

/* const images = [
  "https://placehold.co/800x450/4f46e5/ffffff?text=1",
  "https://placehold.co/800x450/0ea5e9/ffffff?text=2",
  "https://placehold.co/800x450/10b981/ffffff?text=3",
  "https://placehold.co/800x450/f59e0b/ffffff?text=4",
]; */

function App() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? 'הסתר קרוסלה' : 'הצג קרוסלה'}
      </button>
      {show && <RecipesCarousel />}    </div>
  );
}

export default App;