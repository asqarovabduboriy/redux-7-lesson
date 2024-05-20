import React from 'react'
import './Search.css'
import { useNavigate } from 'react-router-dom'

const Search = ({data,setValue}) => {
    const navigate = useNavigate()
    const handlepage = (id)=>{
      navigate(`/product/${id}`)
        setValue('')
    }
    let data_serch = data?.products.map((el)=>(
         <div onClick={()=>handlepage(el.id)} className='search_wrapper_card' key={el.id}>
             <img src={el.images[0]} alt="" />
            <h3>{el.title}</h3>
            <p>${el.price}</p>
         </div>
    ))
  return (
    <>
      <div className='search_modal'>
        {data_serch}
      </div>
    </>
  )
}

export default Search