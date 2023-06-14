import React,{useContext} from 'react';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate,Link } from 'react-router-dom';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext } from '../../contexts/context';
import { searchContext } from '../../contexts/search';
function Header() {
  const{setSearchtext} = useContext(searchContext)
  const {user,setUser} = useContext(AuthContext);
  const navigate = useNavigate()

 
  return (

    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">

            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
              onChange={(e)=>{
                setSearchtext(e.target.value)
              }}
            />

          </div>
          <div className="searchAction" >
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage" style={{display:'flex'}}>

          {user ?<button>{user.displayName}</button> :<button> <Link to='/login'>Login</Link></button>}

          <hr />
          {user && <button style={{marginLeft:'1rem'}} 
          onClick={()=>{
           
            const auth = getAuth();
            signOut(auth).then(() => {
              // Sign-out successful.
              setUser('')
              navigate('/')
              
            }).catch((error) => {
              // An error happened.
              console.log(error);
            });

          }}
          >Logout</button>}
         < hr/>
        </div>

        <div className="sellMenu">
          <Link to='/create'>
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
