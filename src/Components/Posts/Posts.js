import React,{useState,useEffect,useContext} from 'react';
import { FirebaseContext } from '../../contexts/context';
import { collection, getDocs } from "firebase/firestore"; 
import Heart from '../../assets/Heart';
import './Post.css';
import { postContext } from '../../contexts/postContext';
import { useNavigate } from 'react-router-dom';
import { searchContext } from '../../contexts/search';


function Posts() { 
  const navigate = useNavigate()
  const {searchText} = useContext(searchContext)
  const [products,setProducts] = useState([])
  const [filterProducts,setFilterProducts] = useState([])
  const db = useContext(FirebaseContext)
  const {setPostDetails} = useContext(postContext)

 
 

  useEffect(()=>{
    getDocs(collection(db, "products")).then((snapshot)=>{
     const data = snapshot.docs.map(doc=>{
        return {
          ...doc.data(),
          id:doc.id
        }
      })
      setProducts(data)
      setFilterProducts(data)
      

     
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  useEffect(()=>{

    if(searchText){
      const filter = products.filter((product) => {
        return product?.name?.toLowerCase()?.includes(searchText.toLowerCase()) ||
        product?.category?.toLowerCase()?.includes(searchText.toLowerCase()) 
      });
      setFilterProducts(filter)
    }else{
      setFilterProducts(products)

    }
// eslint-disable-next-line react-hooks/exhaustive-deps
  },[searchText])
  

 




  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {
  
          
          
          filterProducts.map(product=>{
           
            return(
              <div
              className="card"
              key={product?.id}
              onClick={()=>{
                setPostDetails(product)
                navigate('/view')
              }}
            >
              <div className="favorite">
                <Heart></Heart>
              </div>
              <div className="image">
                <img src={product.url} alt="" />
              </div>
              <div className="content">
                <p className="rate">&#x20B9; {product.price}</p>
                <span className="kilometer" style={{fontSize:'20px'}}><b> {product.name}</b></span>
                <p className="name"><b>{product.category}</b></p>
              </div>
              <div className="date">
                <span>{product.date}</span>
              </div>
            </div>
            )
          })}
         
        </div>
      </div>
    </div>
  );
}

export default Posts;
