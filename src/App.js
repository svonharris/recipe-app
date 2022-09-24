import React from 'react';
// import logo from './logo.svg';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchForm from './components/SearchForm';
import './components/styles/variables.module.scss';
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
