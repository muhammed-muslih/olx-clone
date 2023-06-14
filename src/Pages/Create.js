import React, { Fragment,useEffect,useContext} from 'react';
import Header from '../Components/Header/Header';
import Create from '../Components/Create/Create';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {AuthContext} from '../contexts/context'


const CreatePage = () => {

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
    <Fragment>
      <Header />
      <Create/>
    </Fragment>
  );
};

export default CreatePage;
