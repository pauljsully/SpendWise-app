import React from 'react';
import './home.css'; // Import the CSS file for styling
import BBTech from '../../assets/img/expensetrack.png';
import serverDev from '../../assets/img/smartmoney.png';
import logo from '../../assets/img/logo.png';


const Home = () => {
  return (
    <section id='about'>
      <p className="aboutDesc">WELCOME TO</p>
<span className="aboutTitle">Spendwise</span> <br/>


<span className="aboutDesc">SpendWise is a React.js application developed to empower individuals in 
managing their finances effectively. With a modern and intuitive user interface, SpendWise provides users with
 a comprehensive platform to track expenses, set budgets, and gain insights into their financial habits. <br /> <br />
 </span>

<div className="aboutCards">
    <div className="aboutCard">
        <img src={BBTech} alt="BBTech" className='aboutImg'/>
        <div className="aboutText">
            <h2>Expense Tracking History</h2>
            <p>Browser-based technologies are essential for web development, shaping the foundation of the user interface and functionality. HTML and 
                CSS provide the structure and styling, while JavaScript and jQuery enhance interactivity and dynamic content creation. </p>
        </div>
    </div>
    <div className="aboutCard">
        <img src={serverDev} alt="serverDev" className='aboutImg'/>
        <div className="aboutText">
            <h2>Responsible Money Management</h2>
            <p>Server-side development involving managing the backend of a web application, handling data, 
                processing requests, and server management. Developed "Progressive Web Applications" (PWAs),
                which offer app-like experiences with features like offline access.
            </p>
        </div>
    </div>
</div>
<img src={logo} alt='logo' className='logo'></img>
    </section>
  )
}

export default Home
