import React,{useState,useEffect} from 'react'

function Cart() {
    const [plist,setPlist]=useState([])

    useEffect(()=>{
        var data = JSON.parse(localStorage.getItem('cart'))
        setPlist(data)
    },[setPlist])
    

    return (
        <>
        <div className="container">
    
                <table className="table table-bordered">
                    <tr>
                        <th>Product Title</th>
                        <th>Product Price</th>
                        <th colspan="2">Action</th>
                    </tr>
                    
                        {plist.map((p,index)=>(
                            <tr key={index}>
                            <td >{p.ProductTitle}</td>
                            <td>{p.ProductPrice}</td>
                            <td>
                                <a >
                                    Remove
                                </a>
                            </td> 
                            </tr>
                        ))}
           
                    <tr>
                        <td colspan="4"><a title="Buy All">Buy All</a></td>
                    </tr>
                </table>	
                
            </div>
        </>
    )
}

export default Cart
