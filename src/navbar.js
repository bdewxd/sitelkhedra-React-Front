import css from "./navbar.css";
import {Link} from "react-router-dom";
import { Status } from './App.js';
import { useContext, useState } from "react";
import logging from './logout.js';
let Navbar = (props)=>{
    let context = useContext(Status);
    let [links, setLinks] = useState('login');
    context.setNavLinks = setLinks;
    let l = '';
    let txt = [['Products', 'Products', ()=>{l=2}],  ['Cartel','Cartel', ()=>{l=2}] ,['About us','AboutUs', ()=>{l=2}], [links,'Login', ()=>{setLinks('Login');logging(links)}],
     ['SignUp','SignUp', ()=>{l=2}]];
    return (
        <div>
             <nav className="navbar navbar-expand-lg navbar-light our-nav">
                <Link className="navbar-brand" id='brando' to='/'><i style={{fontSize:"24px"}} className='fas clover'>&#xf4d8;</i>Les Maitres de frutell</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                {
                        txt.map((e,i)=>{
                            return <Link to={`/${e[1]}`} className="nav-item nav-link links" key={i}>
                                <div className="list" onClick={e[2]}>{e[0]}</div></Link>
                        })
                    }
                </div>
            </div>
            <div className="input-container">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <a href='https://www.google.com' id="search"><i className="fa">&#xf002;</i></a>
                            </div>
                        </div>
                        <input type="text" className="form-control" aria-label="Text input with checkbox" />
            </div>
            </nav>
        </div>
    )
}

export default Navbar;