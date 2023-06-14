import React,{ useState} from 'react';
import {Link,useNavigate} from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Logo from '../../olx-logo.png';
import './Login.css';



function Login() {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate()
  const [complete,setComplete] = useState(true) 
  const [error,setError] = useState('')


  const handleLogin =(e)=>{
    e.preventDefault();


    if(email&&password){
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
     .then(async(userCredential) => {
       const user = userCredential.user;
      if(user){
       navigate('/')
      }
       
     })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       console.log(errorCode +":" + errorMessage);
       setError(errorCode)

     });

    }else{
      setComplete(false)

    }
   
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt=''></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value);

            }}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
           value={password}
           onChange={(e)=>{
            setPassword(e.target.value)
           }}
          />
          <br />
          <br />
          {error?<span style={{color:'red'}}>{error}</span>:""}
          <button type='submit'>Login</button>
        </form>
        <Link to='/signup' >Signup</Link>
        {!complete?<span style={{color:'red'}}>all field is required</span>:""}
      </div>
    </div>
  );
}

export default Login;
