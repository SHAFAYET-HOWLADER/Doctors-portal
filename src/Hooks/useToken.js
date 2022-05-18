import {useState} from 'react';
const useToken = user=>{
    const [token, setToken] = useState('')
    const email = user?.user?.email;
    const currentUser = {email:email};
    if(email){
        fetch(`http://localhost:5000/user/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(currentUser)
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data)
            const accessToken  = data.accessToken;
            localStorage.setItem('accessToken', accessToken);
            setToken(accessToken);
        })












        
    }
    return [token, setToken];
  }
  export default useToken;