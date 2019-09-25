import axios from 'axios';
//import { Link } from 'react-router-dom';

export const CheckSession = (props) => {
    
  axios.get(`${process.env.PUBLIC_URL}/api/checkSession`)
  .then(res => {
        console.log('session---', res)
    if(res.data.resType !== 'success'){
      localStorage.removeItem('x-token');
      props.history.push('/Login');
    }
    else{
      sessionStorage.setItem('userId', res.data.userData.id)
      sessionStorage.setItem('userType', res.data.userData.userType)
    }

  }).catch(err => console.log(err));

}

