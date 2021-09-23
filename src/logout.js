let logout = (status) =>{
    console.log(status);
    if(status == 'Logout'){
        fetch(`http://localhost:5000/${status}`, {credentials: 'include', withCredentials: true});
    }
}
export default logout;