import { useContext, useState } from 'react';
import css from './profile.css';
import ProfileInfo from "./components/profile info/profileInfo.js";
import Security from "./components/security/security.js";
import ManageItems from './components/manageItems/manageItems.js';
import { useEffect } from 'react/cjs/react.development';
import { Redirect } from 'react-router';
import Navbar from '../navbar';
import { Status } from '../App.js';

let profileArr = ["profile", "security", 'manage Items', "log out"];

function Profile() {
    let contextData = useContext(Status);
    console.log(contextData);
    let [url, setUrl] = useState('');
    useEffect(()=>{
        fetch('http://localhost:5000/profile', {credentials: 'include', withCredentials: true})
        .then(res=> res.json())
        .then(res=> {
            if(!res.approved){
                setUrl(res.url);
                contextData.setNavLinks('Login');
            }else{
                contextData.setNavLinks('Logout');
            }
        })
    }, [url])

    return (
        <div>{url ? <Redirect to={url} /> : 
            <div className="mappy container container-fluid">
                <div className='header'>
                    <h2>Profile</h2>
                    <ProfileInfo />
                </div>


                <div className='header'>
                    <h2>Security</h2>
                    <Security />
                </div>


                <div className='header'>
                    <h2>ManageItems</h2>
                    <ManageItems/>
                </div>
            </div>}
        </div>
    );
}

export default Profile;