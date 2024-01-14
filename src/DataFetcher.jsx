import React, { useEffect, useState } from 'react'
import axios from 'axios'
const DataFetcher = () => {
const [data,setData]=useState([])
const code = `
function greet() {
  console.log('Hello, World!');
}
`;
useEffect(()=>{
 
axios.get("https://dummyjson.com/products").then(res=>setData([...res.data.products])).catch(err=>console.log(err))
},[])
  return (
    <div>
      <h1>Data Fetcher</h1>
      {data&&data.map((item,i)=>(
        <pre key={i}>
         { ` ${item.id}.) ${item.title}:-

            ${item.description}
        ` }
        </pre>
   
       ))}
       
    </div>
  )
}

export default DataFetcher