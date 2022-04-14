import NavBar from './navBar';
import './signup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faEye, faPaperPlane, faGamepad } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import SnackBar from './snackbar';
import { Link } from 'react-router-dom';

const SignUp = () =>
{

    const client_id = '370132929396-sn1fidi5m5qoe3cam0gngmcgq6trf6em.apps.googleusercontent.com';

    const [ logged, setLogged ] = useState( false );
    const [ snackMessage, setSnackMessage ] = useState( '' );
    const [ snack, setSnack ] = useState( false );
    const [ name, setName ] = useState( '' );
    const [ email, setEmail ] = useState( '' );
    const [ username, setUsername ] = useState( '' );
    const [ password, setPassword ] = useState( '' );

    const getEmail = ( e ) =>
    {
        let emailValue = e.target.value;
        setEmail( emailValue );
    };

    const getUsername = ( e ) =>
    {
        let usernameValue = e.target.value;
        setUsername( usernameValue );
    };

    const getPassword = ( e ) =>
    {
        let passwordValue = e.target.value;
        setPassword( passwordValue );
    };


    const onSuccess = res =>
    {
        setLogged( true );
        setName( res.profileObj.name );
    };

    const showSnack = () =>
    {
        setSnack( true );
        setSnackMessage( 'Function is coming soon' );
        setTimeout( function () { return setSnack( false ); }, 3000 );
    };

    const onFailure = res =>
    {
        //alert('Could not sign up, please try again!')
        setSnack( true );
        setSnackMessage( 'An error occurred, please try again!' );
        //console.log();
        setLogged( false );
        setTimeout( function () { return setSnack( false ); }, 3000 );
    };

    const onLogoutSuccess = () =>
    {
        alert( 'Logged Out' );
        setLogged( false );
    };

    const [ passwordType, setPasswordType ] = useState( 'password' );

    const handleSubmit = e =>
    {
        e.preventDefault();

        document.querySelector( '.overlay-nav ' ).style.opacity = '.8';
        document.querySelector( '.overlay-nav' ).style.width = '100%';

        const user = new Object();
        user.name = username;
        user.email = email;
        user.password = password;

        fetch( 'https://guarded-lake-44093.herokuapp.com/user/register', {
            method: 'POST',
            body: JSON.stringify( user ),
            headers: {
                'Content-Type': 'application/json'
            },
        } )
            .then( res => res.json() )
            .then(
                data =>
                {
                    document.querySelector( '.overlay-nav ' ).style.opacity = '0';
                    document.querySelector( '.overlay-nav' ).style.width = '0';
                    //console.log( data );
                    if ( data.error )
                    {
                        setSnack( true );
                        setSnackMessage( data.message );
                        //console.log();
                        setLogged( false );
                        setTimeout( function () { return setSnack( false ); }, 3000 );
                    } else
                    {
                        setSnack( true );
                        setSnackMessage( 'Account created successfully' );
                        setLogged( true );
                        setName( data.name );
                        setTimeout( function () { return setSnack( false ); }, 3000 );
                    }
                }
            );
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
            <NavBar gameroom room={ 'Sign Up' } logged={ logged } name={ name } />

            {
                !logged ? <div className='sign-up-con'>

                    <form className='sign-up-form' onSubmit={ handleSubmit }>
                        <div>
                            <input
                                type='email'
                                placeholder='Enter your email'
                                onChange={ getEmail }
                                value={ email }
                                required
                                className='sign-up-input sign-up-email-input'
                            />
                            <FontAwesomeIcon icon={ faEnvelope } className='sign-up-icon' />
                        </div>
                        <div>
                            <input
                                type='text'
                                placeholder='Choose a username'
                                onChange={ getUsername }
                                value={ username }
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
                                onChange={ getPassword }
                                value={ password }
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
                            theme="dark"
                        />
                        <button className='sign-up-accs-playgames' onClick={ showSnack }>Sign up with Play Games <FontAwesomeIcon icon={ faGamepad } className='sign-up-accs-icon' /></button>
                    </div>
                    <div className='no-acc'>
                        Already have an account?
                        <Link
                            to='/game-room/signin'
                            style={ { color: '#D95BA0', textDecoration: 'none' } }
                        >
                            Sign In Instead
                        </Link>
                    </div>
                </div > :


                    <div className='sign-up-con'>
                        <div className='welcome-sign-up'>Welcome { name }</div>
                        <div className='logout-sign-up'><GoogleLogout
                            clientId={ client_id }
                            buttonText='Log Out'
                            onLogoutSuccess={ onLogoutSuccess }
                            theme="dark"
                        /></div>
                    </div>
            }
            {
                snack ?
                    <SnackBar message={ snackMessage } /> :
                    <></>
            }

            <div className='overlay-nav' />
        </>
    );
};

export default SignUp;