import NavBar from './navBar';
import './signup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faEye, faPaperPlane, faGamepad } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const SignUp = () =>
{

    const [ passwordType, setPasswordType ] = useState( 'password' );

    const handleSubmit = e =>
    {
        e.preventDefault();
        return;
    };

    const showHidePassword = () =>
    {
        const passwordEl = document.querySelector( '.sign-up-password-input' ).type;

        if ( passwordEl === 'password' ) return setPasswordType('text');
        setPasswordType('password');
    };

    useEffect( () =>
    {

    }, [] );
    return (
        <div className='sign-up-con'>

            <NavBar gameroom room={ 'Sign Up' } />

            <form className='sign-up-form' onSubmit={ handleSubmit }>
                <div>
                    <input
                        type='email'
                        placeholder='Enter your email'
                        required
                        className='sign-up-input sign-up-email-input'
                    />
                    <FontAwesomeIcon icon={ faEnvelope } className='sign-up-icon' />
                </div>
                <div>
                    <input
                        type='text'
                        placeholder='Choose a username'
                        required
                        className='sign-up-input sign-up-username-input'
                    />
                    <FontAwesomeIcon icon={ faUser } className='sign-up-icon' />
                </div>
                <div>
                    <input
                        type={
                            passwordType === 'password' ? 'password' : 'text'
                        }
                        placeholder='Choose your password'
                        required
                        className='sign-up-input sign-up-password-input'
                    />
                    <FontAwesomeIcon icon={ faEye } className='sign-up-icon' style={
                        passwordType === 'password' ? {color: '#aaa'} : {color: '#D95BA0'}
                    } onClick={ showHidePassword } />
                </div>
                <button className='sign-up-submit-btn' type='submit'>
                    Submit
                    <FontAwesomeIcon icon={faPaperPlane} className='sign-up-submit-icon' />
                </button>
            </form>

            <p className='sign-up-or'>Or</p>

            <div className='sign-up-accs'>
                <button className='sign-up-accs-google'>Sign up with Google <FontAwesomeIcon icon={faGoogle} className='sign-up-accs-icon' /></button>
                <button className='sign-up-accs-playgames'>Sign up with Play Games <FontAwesomeIcon icon={faGamepad} className='sign-up-accs-icon' /></button>
            </div>

        </div>
    );
};

export default SignUp;