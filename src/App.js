import React from 'react';
// import logo from './logo.svg';
import Header from './Header';
import Footer from './Footer';
import SearchForm from './SearchForm';
import './App.css';






function App() {

  return (
    <div className='App'>
      <Header />


      <main className='main'>

          <SearchForm />
  
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}



export default App;
