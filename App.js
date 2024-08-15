
// src/App.js

import React, { useState } from 'react';
import './App.css';
import img1 from './1.png'
import img2 from './2.png'
import img3 from './3.png'
import img4 from './4.png'
import img5 from './5.png'
import img6 from './6.png'

// Components

// home page
const Home = () => (
  <div className="home-container">
    <div className="home-header">
      <h2>BLUSH BOUQUET</h2>
      <p className="subtitle">Where Scent Meets Passion</p>
    </div>
    <div className="home-content">
      <p>Embark on a journey of self-expression through our meticulously curated collection of statements.</p>
      <p>Welcome to the enchanting world of Blush Bouquet, where each fragrance unfolds
      a captivating tale, and elegance blossoms with every spritz!</p>
    </div>
    <div className="home-cta">
      <p className="highlight">Ready to Elevate Your Scent Game?</p>
      <button >Explore Now</button>
    </div>
  </div>
);


// product page
const Products = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (productName, price) => {
    const newItem = { id: productName, name: productName, price: price };
    setCart([...cart, newItem]);
    alert(`${productName} added to cart!`);
  };

  const emptyCart = () => {
    setCart([]);
    alert('Cart emptied!');
  };

  return (
    <div>
      <h2>Our Latest Products</h2>
      <div className='contain'>
      <div className="product">
        <img src={img1} alt="Product 1" height={450} width={250} />
        <p>HIBISCUS</p>
        <p>$49.99</p>
        <button onClick={() => addToCart("HIBISCUS", 49.99)}>Add to Cart</button>
      </div>
     

      <div className="product">
        <img src={img2} alt="Product 2" height={450} width={250} />
        <p>ORANGE HONEY</p>
        <p>$70.0</p>
        <button onClick={() => addToCart("ORANGE HONEY", 60.0)}>Add to Cart</button>
      </div>

      <div className="product">
        <img src={img3} alt="Product 3" height={450} width={250} />
        <p>GARDENIA - 100ml</p>
        <p>$120.0</p>
        <button onClick={() => addToCart("GARDENIA", 120.0)}>Add to Cart</button>
      </div>

      <div className="product">
        <img src={img4} alt="Product 4" height={450} width={250} />
        <p>NUDE BOUQUET</p>
        <p>$87.0</p>
        <button onClick={() => addToCart("NUDE BOUQUET", 87.0)}>Add to Cart</button>
      </div>

      <div className="product">
        <img src={img5} alt="Product 5" height={450} width={250} />
        <p>RUBY SYRUP</p>
        <p>$90.0</p>
        <button onClick={() => addToCart("RUBY SYRUP", 90.0)}>Add to Cart</button>
      </div>

      <div className="product">
        <img src={img6} alt="Product 6" height={450} width={250} />
        <p>ORCHID - 100ml</p>
        <p>$110.0</p>
        <button onClick={() => addToCart("ORCHID", 110.0)}>Add to Cart</button>
      </div>

      </div>

      <div className="cart">
        <h3>Shopping Cart</h3>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            <ol>
              {cart.map(item => (
                <li key={item.id}>
                  {item.name} - ${item.price}
                </li>
              ))}
            </ol>
            <button onClick={emptyCart}>Empty Cart</button>
          </div>
        )}
      </div>
    </div>
  );
};

//about page
const About = () => (
  <div className="about-container">
    <h2 className="about-header">Our Story</h2>
    <div className="about-content">
   
  <p>Nestled in the heart of olfactory sophistication, our brand is more 
    than just perfumes; it's a symphony of scents that celebrates individuality, 
    creativity, and the pleasure of embracing your unique essence.</p>
  <p>At Blush Bouquet, we believe in the enchanting power of scents. Each perfume is
     meticulously crafted to evoke emotions, inspire memories, and add a delightful touch
      of sophistication to your olfactory journey.</p>
    </div>
    <div className="about-values">
      <h3>Our Values</h3>
      <ul>
        <li className="value-item">Creativity</li>
        <li className="value-item">Quality Craftsmanship</li>
        <li className="value-item">Inclusivity</li>
        <li className="value-item">Sustainability</li>
      </ul>
    </div>
  </div>
);



// contact page
const Contact = () => (
  <div className="contact">
    <h2 className="header">Get in Touch</h2>
    <div className="content">
      <p>Have a query or need assistance with your order? Our friendly customer support team is here to help!</p>
      <p>Reach out to us via email at <strong className="email">support@blushbouquet.com</strong> or fill out the form below. We'll get back to you as soon as possible.</p>
    </div>
    <form className="form">
      <label htmlFor="name">Your Name:</label>
      <input type="text" id="name" name="name" placeholder="Enter your name" />

      <label htmlFor="email">Your Email:</label>
      <input type="email" id="email" name="email" placeholder="Enter your email" />

      <label htmlFor="message">Your Query:</label>
      <textarea id="message" name="message" placeholder="Type your query here"></textarea>

      <button type="submit">Send Message</button>
    </form>
  </div>
);



//nav bar
const Navigation = ({ setPage }) => (
  <nav className="navigation">
    <ul>
      <li><button onClick={() => setPage('home')}>Home</button></li>
      <li><button onClick={() => setPage('products')}>Products</button></li>
      <li><button onClick={() => setPage('about')}>About</button></li>
      <li><button onClick={() => setPage('contact')}>Contact</button></li>
    </ul>
  </nav>
);

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  let content;
  switch (currentPage) {
    case 'home':
      content = <Home />;
      break;
    case 'products':
      content = <Products />;
      break;
    case 'about':
      content = <About />;
      break;
    case 'contact':
      content = <Contact />;
      break;
    default:
      content = <Home />;
  }

  return (
    <div className="app">
      <h1>Blush Bouquet</h1>
      <Navigation setPage={setCurrentPage} />
      <div className="content">{content}</div>
    </div>
  );
}

export default App;
