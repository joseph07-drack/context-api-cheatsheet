import React from 'react';
import { useStateValue } from './StateProvider';

const Login = () => {
 const [state, dispatch] = useStateValue()
 
  return <div>
      <h1>{ state.user ? `You are logged in as ${state.user}` : 'Click the button to log in' }</h1>
      <button onClick={() =>
          dispatch({
              type: 'SET_USER',
              user : 'Jodrack'
          })
      }>LOGIN</button>
  </div>;
};

export default Login;
