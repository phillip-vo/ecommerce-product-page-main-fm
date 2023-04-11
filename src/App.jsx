import { useState } from "react";
import "./App.scss";
import { Carousel, Cart, Lightbox, Navbar, Product } from "./components";

function App() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [cartItems, setCartItems] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  console.log(isLightboxOpen);

  return (
    <div className="app">
      <Navbar
        isPanelOpen={isPanelOpen}
        setIsPanelOpen={setIsPanelOpen}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        cartItems={cartItems}
      />
      <main>
        <Carousel
          setIsLightboxOpen={setIsLightboxOpen}
          currentImageIndex={currentImageIndex}
          setCurrentImageIndex={setCurrentImageIndex}
        />
        <Product setCartItems={setCartItems} />
      </main>
      {isLightboxOpen && (
        <Lightbox
          setIsLightboxOpen={setIsLightboxOpen}
          currentImageIndex={currentImageIndex}
        />
      )}
      {isCartOpen && <Cart cartItems={cartItems} setCartItems={setCartItems} />}
      {isLightboxOpen && <div className="app__overlay"></div>}
      {isPanelOpen && <div className="app__overlay"></div>}
    </div>
  );
}

export default App;
