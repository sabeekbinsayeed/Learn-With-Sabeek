import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Button } from 'react-bootstrap';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import { Alert } from 'bootstrap';
import Loading from '../Loading/Loading';

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [displayName, setDisplayName] = useState('');
    const [updateProfile, updating, error2] = useUpdateProfile(auth);
    const navigate = useNavigate();
    const [agree, setAgree] = useState(false)

    const navigateLogin = () => {
        navigate('/login');
    }

    // if (user) {
    //     navigate('/home');
    // }

    if (loading || updating) {
        return <Loading></Loading>
    }

    if (user) {
        console.log('user is here')
    }
    const handleRegister = async event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        alert('Updated profile');
        navigate('/login')



        //createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='register-form'>
            <h2 style={{ textAlign: 'center' }}>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' />

                <input type="email" name="email" id="" placeholder='Email Address' required />

                <input type="password" name="password" id="" placeholder='Password' required />


                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                {/* <label className={agree ? 'ps-2': 'ps-2 text-danger'} htmlFor="terms">Accept Genius Car Terms and Conditions</label> */}
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Terms and Conditions</label>

                <Button disabled={!agree} variant="primary w-50 mx-auto d-block mb-2" type="submit">
                    Register
                </Button>
            </form>
            <p>Already have an account? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
            {/* <ToastContainer /> */}
        </div>
    );
};

export default Register;