import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Signup from './pages/Signup';
import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById("root"));




root.render(

  <React.StrictMode>
    <Router>

      <Routes>
        <Route exact path='/' element={<App />}></Route>
        <Route exact path='/signup' element={<Signup />}></Route>
      </Routes>

    </Router>
  </React.StrictMode>
);















// const root = ReactDOM.createRoot(document.getElementById('root'));



// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// ReactDOM.render((
//   <BrowserRouter>
//     <App /> {/* The various pages will be displayed by the `Main` component. */}
//   </BrowserRouter>
//   ), document.getElementById('root')
// );