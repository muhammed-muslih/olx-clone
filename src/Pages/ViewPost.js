import React,{useEffect,useContext} from 'react';

import Header from '../Components/Header/Header'
import View from '../Components/View/View'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { AuthContext } from '../contexts/context';


function ViewPost(props) {


    const {setUser} = useContext(AuthContext)
    useEffect(()=>{
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
    if (user) {
      // console.log(user.displayName);
      setUser(user)
    } else {
     console.log('user not found');
    }
  });
  
    })



    return (
        <div>
            <Header />
            <View/>
        </div>
    )
}

export default ViewPost
