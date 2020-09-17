import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            console.log(result);
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            });
        })
        .catch((error) => {
            alert(error.message);
        })
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://pbs.twimg.com/profile_images/1192935671473659905/AMUy2VsJ_400x400.jpg"/>
                <h1>Sign in to Slack Clone</h1>
                <p>anandhu.rough-paper.com</p>
                <Button onClick={signIn}>Sign in with Google</Button>
            </div>
        </div>
    )
}

export default Login
