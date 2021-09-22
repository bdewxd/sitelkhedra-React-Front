import { useState } from "react";
import { Redirect } from "react-router";

let Login = ()=>{
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState('');
    let [errMsg, setErrMsg] = useState('');
    let [url, setUrl] = useState('');
    function handlesubmit(event){
        event.preventDefault();
        setErrMsg('');
        fetch('http://localhost:5000/login', {
            method: "POST",
            headers :{'Content-Type': 'Application/json',
                      'Accept': 'Application/json',
                      'Access-Control-Allow-Origin': 'https://localhost:5000'},
            credentials: "include",
            withCredentials: true,
            body: JSON.stringify({email, password})
        })
        .then(res=> {
            if(res.status == 404){
                res.json().then(({errMsg}) => setErrMsg(errMsg));
            }else{
                setUrl('profile');
            }
        })
        
        .catch(err=> console.log(err))
    }
    if(url){
        return <Redirect to={url} />
    }
    return (
        <div>
            <article className="card-body mx-auto" style={{maxWidth: '400px'}}>
                <h4 className="card-title mt-3 text-center">Login to your account</h4>
                <p className="text-center">get all the features</p>
                {errMsg && <div className="alert alert-danger" role="alert">
                    {errMsg}
                </div>}
                <form onSubmit={handlesubmit}>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
                        </div>
                        <input name="" className="form-control" placeholder="Email address" type="email" value={email}
                         onChange={(event)=> setEmail(event.target.value)} />
                    </div> 
                    {/* <!-- form-group// --> */}
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                        </div>
                        <input className="form-control" placeholder="Enter your password" type="password" value={password}
                        onChange={(event)=> setPassword(event.target.value)} />
                    </div>
                    {/* <!-- form-group// -->*/}
                    <div className="form-group">
                        <button type="submit" className="btn btn-success btn-block"> Login  </button>
                    </div>                                                               
                </form>
            </article>
        </div>
    )
}
export default Login;