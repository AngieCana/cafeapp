import './App.css';
import { useState, useContext, useEffect } from 'react';
import AuthPage from './pages/auth';
import OrderHistoryPage from './pages/order_history';
import NewOrder from './pages/new_order';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Nav';
import SignupForm from './components/signupform';




function App() {
  let { user, setUser } = useState(null)
  return (
    <main className='App'>
      {/* the lines below check if there is a logged in user and directs them to their order if so, if not it sends the user to authentification page */}
      { user ?
      <>
        <Navbar />
        <Routes>
          <Route path='/orders/new' element={<NewOrder />}/>
          <Route path='/orders' element={<OrderHistoryPage/>}/>
        </Routes>
        </> 
      :
      <AuthPage/>

      
      }
    </main>
  );
}

export default App;
