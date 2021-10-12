import React,{useState} from 'react'
import Loginbtn from './Loginbtn';

function Login() {
    
    const [enteredemail, setEnteredEmail] = useState('');
    const [enteredpassword, setEnteredPassword] = useState('');
    
    const emailChangeHandler=(e)=>{
        setEnteredEmail(e.target.value)
    }
    const passwordChangeHandler=(e)=>{
        setEnteredPassword(e.target.value)
    }

    return (
        <div>
            <div className="brand_color">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <div className="titlepage">
                            <h2>Login</h2>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">

                            <form  className="main_form">
                                <div className="row">
                                    <div className=" col-md-12">
                                        <input type="email" className="form-control" id="email" name="email" placeholder="Email"
                                        value={enteredemail} onChange={emailChangeHandler}/>
                                    </div>

                                    <div className=" col-md-12">
                                        <input type="password" className="form-control" id="password" name="password" placeholder="Password"
                                        value={enteredpassword} onChange={passwordChangeHandler}/>
                                    </div>
                                    <Loginbtn email={enteredemail} pass={enteredpassword}/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
