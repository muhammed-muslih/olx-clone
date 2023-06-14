import React,{useEffect,useContext} from 'react';
import {AuthContext} from './contexts/context'
import './App.css';
import Home from './Pages/Home';
import { getAuth, onAuthStateChanged } from "firebase/auth";


function App() {
  const {setUser} = useContext(AuthContext)
  useEffect(()=>{
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
  if (user) {
    setUser(user)
  } else {
   console.log('user not found');
  }
});

  })
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
