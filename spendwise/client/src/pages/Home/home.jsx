import React from 'react';
import './home.css'; // Import the CSS file for styling

const Home = () => {
  return (
      <main className="main-content">
        <section className="product-intro">
          <h1>Welcome to Spendwise</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. 
          </p>
        </section>
        <section className="features">
          <h2>Features</h2>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            {/* Add more features as needed */}
          </ul>
        </section>
      </main>
  );
}

export default Home;
