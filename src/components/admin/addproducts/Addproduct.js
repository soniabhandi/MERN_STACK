import React, { useState, useEffect } from "react";
import axios from "axios";

function Addproduct() {
  const [plist, setplist] = useState([]);
  const [enteredprodname, setProdName] = useState("");
  const [enteredprodprice, setProdPrice] = useState("");
  const [file, setFile] = useState({});

  useEffect(() => {
    //run some additional code after React has updated the DOM
    axios.get("http://localhost:3000/webapiadmin/fectprod").then((res) => {
      console.log(res.data);
      setplist(res.data);
    });
  }, [setplist]);

  const productChangeHandler = (e) => {
    setProdName(e.target.value);
  };
  const priceChangeHandler = (e) => {
    setProdPrice(e.target.value);
  };
  const addProduct = (e) => {
    const pDetails = {
      ptitle: enteredprodname,
      pdescription: enteredprodprice,
    };
    axios
      .post("http://localhost:3000/webapiadmin/addproduct", pDetails)
      .then((res) => {
        console.log(res.data.response);
      });
  };
  const handleChangePic = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };
  const upload = (pid) => {
    // console.log(file.name)
    // const formData = new FormData()
    // formData.append(
    //     'product_image',
    //     file
    // )
    // formData.append('pid',pid);
    // axios.post('http://localhost:3000/webapiadmin//uploadpic', formData).then(res=>{
    //     console.log(res)
    // })
  };

  return (
    <>
      <h1>Add Product Details Here...</h1>
      <div className="container">
        <form onSubmit={addProduct}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="ptitle"
              name="ptitle"
              placeholder="Product Name"
              value={enteredprodname}
              onChange={productChangeHandler}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="pdescription"
              name="pdescription"
              placeholder="Product Price"
              value={enteredprodprice}
              onChange={priceChangeHandler}
            />
          </div>
          <div>
            <button type="submit" className="btn btn-default">
              Submit
            </button>
          </div>
        </form>
        <br />
        <table className="table">
          <tr>
            <th>S.No.</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Upload Image</th>
          </tr>

          {plist.map((p, index) => (
            <tr>
              <td>{p._id}</td>
              <td>{p.ptitle}</td>
              <td>{p.pdescription}</td>
              <td>
                <img
                  src={`../assets/product/${p.prodimg}`}
                  height="120"
                  width="140"
                  alt=""
                />
              </td>
              <td>
                <input
                  type="file"
                  onChange={handleChangePic}
                  className="form-control"
                />
                <button className="btn btn-primary" onClick={upload(p._id)}>
                  Upload
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}

export default Addproduct;
