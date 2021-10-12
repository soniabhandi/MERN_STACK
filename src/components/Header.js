import React from 'react'
import AdminNavbar from './AdminNavbar'
import UserNavbar from './UserNavbar'
import Navbar from './navbar'
import { useSelector} from "react-redux";

function Header() {
   
    const { isLoggedInAdmin } = useSelector((state) => state.auth);
    const { isLoggedInUser } = useSelector((state) => state.auth);
    
    if(isLoggedInAdmin){
        return <AdminNavbar/>
    }else if(isLoggedInUser){
        return <UserNavbar/>
    }
    else return <Navbar/>
    
   
}

export default Header
