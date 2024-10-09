import React from 'react';
import Portfolio from './components/portfolio'; 
import './App.css';




const App:React.FC = () => {
  return (
    
    <div className="app">


     <header className="appheader">
      <button>EXPLORE</button>
      </header>
      


      <main>
        <Portfolio />
      </main>





      <footer className="appfooter">
        <p>&copy; {new Date().getFullYear()} Chino. All rights reserved.</p>
      </footer>

      
    </div>
  );
};

export default App;




