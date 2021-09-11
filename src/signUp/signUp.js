import css from "./signUp.css";
import {useState} from 'react';



let SignUp = ()=>{
    let [fullname,setFullname] = useState("");
    let [email,setEmail] = useState("");
    let [phoneNumber,setPhoneNumber] = useState("");
    let [password,setPassword] = useState("");
    let [repeatedPass,setRepeatedPass] = useState("");

  
    function handlesubmit(event){
        event.preventDefault();
        fetch ("http://localhost:5000/SignUp", {
            method :"POST",
            headers :{'Content-Type': 'application/json',
                      'Accept': 'Application/json'},
            body: JSON.stringify({
                fullname,
                email,
                phoneNumber,
                password,
                repeatedPass
            })
        })
    }

    return(
        <div className='article-signUp'>
            <article className="card-body mx-auto" style={{maxWidth: '400px'}}>
                <h4 className="card-title mt-3 text-center">Create Account</h4>
                <p className="text-center">Get started with your free account</p>
                <form onSubmit={handlesubmit}>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                        </div>
                        <input name="" className="form-control" value={fullname} onChange={(event)=> setFullname(event.target.value)} placeholder="Full name" type="text" />
                    </div> 
                    {/* <!-- form-group// --> */}
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
                        </div>
                        <input name="" className="form-control" value={email} onChange={(event)=> setEmail(event.target.value)} placeholder="Email address" type="email" />
                    </div> 
                    {/* <!-- form-group// --> */}
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-phone"></i> </span>
                        </div>
                        <select className="custom-select" style={{maxWidth: '120px'}}>
                            <option defaultValue="">+212</option>
                        </select>
                        <input name="" className="form-control" value={phoneNumber} onChange={(event)=> setPhoneNumber(event.target.value)} placeholder="Phone number" type="text" />
                    </div> 
                    {/* <!-- form-group end.// --> */}
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                        </div>
                        <input className="form-control" placeholder="Create password" value={password} onChange={(event)=> setPassword(event.target.value)} type="password" />
                    </div> 
                    {/* <!-- form-group// --> */}
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                        </div>
                        <input className="form-control" value={repeatedPass} placeholder="Repeat password" type="password" onChange={(event)=> setRepeatedPass(event.target.value)}/>
                    </div> 
                    {/* <!-- form-group// -->*/}
                    <div className="form-group">
                        <button type="submit" className="btn btn-success btn-block"> Create Account  </button>
                    </div>            
                    <p className="text-center">Have an account? <a href="">Log In</a> </p>                                                           
                </form>
            </article>
        </div>
    )
}


export default SignUp;
