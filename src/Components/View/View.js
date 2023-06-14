import React,{useContext,useEffect,useState}from 'react';
import { postContext } from '../../contexts/postContext';
import { collection, query, where, getDocs } from "firebase/firestore";
import './View.css';
import { FirebaseContext } from '../../contexts/context';

function View() {
  const[userDetails,setUserDetails] = useState()
  const {postDetails} = useContext(postContext)
  const [proDetails,setProDetails] = useState()
  const db = useContext(FirebaseContext)
  useEffect(()=>{
    const {userId} = postDetails
    const q = query(collection(db, "users"), where("id", "==",userId));
     getDocs(q).then(snapshot=>{
      snapshot.forEach((doc) => {
        setUserDetails(doc.data())
      });
      

     })
     setProDetails(postDetails)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  console.log("details",userDetails);
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={proDetails?.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {proDetails?.price} </p>
          <span>{proDetails?.name}</span>
          <p>{proDetails?.category}</p>
          <span>{proDetails?.date}</span>
        </div>
        {userDetails&&
         <div className="contactDetails">
          <p>{userDetails?.name}</p>
          <p>{userDetails?.phone}</p>
          <p></p>
          </div>
            }
      </div>
    </div>
  );
}
export default View;
