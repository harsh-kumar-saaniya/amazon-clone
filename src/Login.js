import react, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import { browserHistory } from 'react-router';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signUp = () => {
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }
    const signIn = e => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message));
        // console.log("thisis working")
    }
    return (
        <div className="login">
            <Link to="/">
                <center>
                    <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="amazon logo" />
                </center>
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit" onClick={signIn} className="login__signInButton">sign in</button>
                </form>
                <p>
                    By signing-in you agree to Amazon's Conditions of Use & Sales.
                    Please see our Privacy Notice,
                    our Cookies Notice and our Interest-based Ads Notice.
                </p>
                <button type="submit" onClick={signUp} className="login__registerButton">Create your Amazon Account</button>
            </div>
        </div>

    )
}

export default Login;
