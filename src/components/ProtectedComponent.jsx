import React, { useEffect} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase'; 

const ProtectedComponent = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if(!user){
            navigate('/');
            return;
        }
    }, [user, navigate]);
    console.log(user);

  if(loading){
    return;
  }
  else {
    return children;
  }
}

export default ProtectedComponent;