import React,{useState, useEffect} from 'react'
import axios from 'axios';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/actions/authAction";

function Cpadmin() {
    const [opass, setoldPassword] = useState('');
    const [npass, setnewPassword] = useState('');
    const [cnpass, setcnPassword] = useState('');
    const [msg,setMsg] = useState('')
    const history = useHistory();
    const dispatch = useDispatch();

    const oldPassChangeHandler=(e)=>{
        setoldPassword(e.target.value)
    }
    const newPassChangeHandler=(e)=>{
        setnewPassword(e.target.value)
    }
    const cdPassChangeHandler=(e)=>{
        setcnPassword(e.target.value)
    }

    const submitHandler=(e)=>{
        e.preventDefault();
        const  cpdata= {
            opass: opass,
            npass: npass,
            cnpass: cnpass,
            username : localStorage.getItem('username')
        }
        axios.post('http://localhost:3000/webapiadmin/cpadmin',cpdata).then(res=>{
            if (res.data.response == 0){
                setMsg('Invalid Old Password')
            }else if (res.data.response == 1){
                setMsg('New & confirm new pass does not match')
            }else {
                setMsg('password changed succussfully, Please login again')
                localStorage.removeItem('token')
                history.push("/login");
            }
        })
        
        dispatch(logout());
    }

    return (
        <>
            <div className="container">

                <form onSubmit={submitHandler}>
                {msg}
                <div className="form-group">
                    <input type="password" className="form-control" id="opass" name="opass" placeholder='Password' 
                    value={opass} onChange={oldPassChangeHandler}/>
                    </div>

                    <div className="form-group">
                    <input type="password" className="form-control" id="npass" name="npass" placeholder='New password'
                    value={npass} onChange={newPassChangeHandler}/>
                    </div>

                    <div className="form-group">
                        <input type="password" className="form-control" id="cnpass" name="cnpass"placeholder='Confirm new Password'
                        value={cnpass} onChange={cdPassChangeHandler}/>
                    </div>

                    <button type="submit" className="btn btn-default">Submit</button>

                </form>

            </div>
        </>
    )
}

export default Cpadmin
