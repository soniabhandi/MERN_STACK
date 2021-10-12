import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Cartbtn from './Cartbtn'
import { useSelector} from "react-redux";

function Dynamicprod() {
    const [prodDetails,setprodDetails]=useState([])
    const { isLoggedInUser } = useSelector((state) => state.auth);

    useEffect(()=>{
        axios.get('http://localhost:3000/webapiuser/fetchProdDetails').then(res=>{
            console.log(res)
            setprodDetails(res.data)
        })
    },[setprodDetails])
    return (
        <>
            {prodDetails.map(s=>(
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                    <div className="product-box">
                        <i><img src={`../assets/product/${s.prodimg}`} /></i>
                        <h3>{s.ptitle}</h3>
                        <span>Rs.{s.pdescription}</span><br/><br/>
                        {(isLoggedInUser) &&
                        <Cartbtn ptitle={s.ptitle} price={s.pdescription}/> }
                        
                    </div>
                </div>
            ))}
            
        </>
    )
}

export default Dynamicprod
