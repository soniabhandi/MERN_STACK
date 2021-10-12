import React from 'react'
import { login } from "../../redux/actions/authAction";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Loginbtn(props) {
    const { isLoggedInAdmin } = useSelector((state) => state.auth);
    const { isLoggedInUser } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const history = useHistory();

    const loginHandler=(event)=>{
        event.preventDefault();
        
        const email= props.email;
        const password= props.pass;
        dispatch(login(email, password));

        if(isLoggedInAdmin){
            history.push("/adminhome");
            
        }else if(isLoggedInUser){
            history.push('/userhome')
        }else history.push('/login')
        
    }
    return (
        <>
        <div className=" col-md-12">
            <button type="submit" className="send" onClick={loginHandler}>Submit</button>
        </div>
        </>
    )
}

export default Loginbtn
