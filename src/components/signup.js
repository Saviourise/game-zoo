import NavBar from './navBar';
import './signup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faEye, faPaperPlane, faGamepad } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { GoogleLogin } from 'react-google-login';

const SignUp = () =>
{

    const client_id = '370132929396-sn1fidi5m5qoe3cam0gngmcgq6trf6em.apps.googleusercontent.com';

    const [ logged, setLogged ] = useState( false );


    const onSuccess = res =>
    {
        setLogged( true );
    };

    const onFailure = res =>
    {
        setLogged( false );
    };

    const [ passwordType, setPasswordType ] = useState( 'password' );

    const handleSubmit = e =>
    {
        e.preventDefault();
        return;
    };

    const showHidePassword = () =>
    {
        const passwordEl = document.querySelector( '.sign-up-password-input' ).type;

        if ( passwordEl === 'password' ) return setPasswordType( 'text' );
        setPasswordType( 'password' );
    };

    useEffect( () =>
    {

    }, [] );
    return (
        <>
            <NavBar gameroom room={ 'Sign Up' } />

            {
                !logged ? <div className='sign-up-con'>

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
                                passwordType === 'password' ? { color: '#aaa' } : { color: '#D95BA0' }
                            } onClick={ showHidePassword } />
                        </div>
                        <button className='sign-up-submit-btn' type='submit'>
                            Submit
                            <FontAwesomeIcon icon={ faPaperPlane } className='sign-up-submit-icon' />
                        </button>
                    </form>

                    <p className='sign-up-or'>Or</p>

                    <div className='sign-up-accs'>
                        {/* <button className='sign-up-accs-google'>Sign up with Google <FontAwesomeIcon icon={ faGoogle } className='sign-up-accs-icon' /></button> */ }
                        <GoogleLogin
                            clientId={ client_id }
                            buttonText='Sign up with Google'
                            onSuccess={ onSuccess }
                            onFailure={ onFailure }
                            cookiePolicy={ 'single_host_origin' }
                            className='sign-up-accs-google'
                            isSignedIn={ true }
                        />
                        <button className='sign-up-accs-playgames'>Sign up with Play Games <FontAwesomeIcon icon={ faGamepad } className='sign-up-accs-icon' /></button>
                    </div>

                </div > :
                    <div className='sign-up-con'>
                        Google Sign Up Success
                    </div>
            }
        </>
    );
};

export default SignUp;