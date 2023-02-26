import React,{useEffect, useReducer} from 'react'
import axios from 'axios'
import  CartReducer  from '../Reducer/CartReducer'
import Simple from './Simple';

function Home() {
  const [state,dispatch] = useReducer(CartReducer,{
    products:[],
    cart:[],
  });
  
  console.log(state)
  const feachProdu =async () => {
    const { data } = await axios.get("https://dummyjson.com/posts") 
    
    dispatch({
      type: "ADD_PRODUCT",
      payload: data.posts,
    })
  }
  
  useEffect(()=>{
    feachProdu()
  },[])
  return (
    <div >
      <Simple state={state} dispatch={dispatch} />
    </div>
    
  )
}

export default Home