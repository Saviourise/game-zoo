import NavBar from './navBar';
import './signin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faEye, faPaperPlane, faGamepad } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import SnackBar from './snackbar';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () =>
{

    const client_id = '370132929396-sn1fidi5m5qoe3cam0gngmcgq6trf6em.apps.googleusercontent.com';

    // router navigate function
    let navigate = useNavigate();

    const [ logged, setLogged ] = useState( false );
    const [ snackMessage, setSnackMessage ] = useState( '' );
    const [ snack, setSnack ] = useState( false );
    const [ name, setName ] = useState( '' );
    const [ email, setEmail ] = useState( '' );
    const [ password, setPassword ] = useState( '' );
    const [ token, setToken ] = useState( '' );


    const onSuccess = res =>
    {
        setLogged( true );
        setName( res.profileObj.name );
    };

    const getEmail = ( e ) =>
    {
        let emailValue = e.target.value;
        setEmail( emailValue );
    };

    const getPassword = ( e ) =>
    {
        let passwordValue = e.target.value;
        setPassword( passwordValue );
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
        user.email = email;
        user.password = password;

        fetch( 'https://guarded-lake-44093.herokuapp.com/user/login', {
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
                    //console.log( data.token );
                    setToken( data.token );
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
                        setSnackMessage( 'Log in successful' );
                        setLogged( true );
                        setName( data.name );
                        navigate( `/game-room/${ data.token }` );
                        setTimeout( function () { return setSnack( false ); }, 3000 );

                    }
                }
            ).catch( ( err ) =>
            {
                console.log( err );
                setSnack( true );
                setSnackMessage( 'An error ocured, please try again' );
                setLogged( false );
                document.querySelector( '.overlay-nav ' ).style.opacity = '0';
                document.querySelector( '.overlay-nav' ).style.width = '0';
                setTimeout( function () { return setSnack( false ); }, 3000 );
            } );
    };

    const showHidePassword = () =>
    {
        const passwordEl = document.querySelector( '.sign-in-password-input' ).type;

        if ( passwordEl === 'password' ) return setPasswordType( 'text' );
        setPasswordType( 'password' );
    };

    useEffect( () =>
    {

    }, [] );
    return (
        <>
            <NavBar gameroom room={ 'Sign In' } logged={ logged } name={ name } />

            {
                !logged ? <div className='sign-in-con'>

                    <form className='sign-in-form' onSubmit={ handleSubmit }>
                        <div>
                            <input
                                type='email'
                                placeholder='Enter your email'
                                required
                                minLength={ 6 }
                                onChange={ getEmail }
                                value={ email }
                                className='sign-in-input sign-in-email-input'
                            />
                            <FontAwesomeIcon icon={ faEnvelope } className='sign-in-icon' />
                        </div>
                        <div>
                            <input
                                type={
                                    passwordType === 'password' ? 'password' : 'text'
                                }
                                placeholder='Choose your password'
                                required
                                minLength={ 6 }
                                onChange={ getPassword }
                                value={ password }
                                className='sign-in-input sign-in-password-input'
                            />
                            <FontAwesomeIcon icon={ faEye } className='sign-in-icon' style={
                                passwordType === 'password' ? { color: '#aaa' } : { color: '#D95BA0' }
                            } onClick={ showHidePassword } />
                        </div>
                        <button className='sign-in-submit-btn' type='submit'>
                            Submit
                            <FontAwesomeIcon icon={ faPaperPlane } className='sign-in-submit-icon' />
                        </button>
                    </form>

                    <p className='sign-in-or'>Or</p>

                    <div className='sign-in-accs'>
                        {/* <button className='sign-up-accs-google'>Sign up with Google <FontAwesomeIcon icon={ faGoogle } className='sign-up-accs-icon' /></button> */ }
                        <GoogleLogin
                            clientId={ client_id }
                            buttonText='Sign In with Google'
                            onSuccess={ onSuccess }
                            onFailure={ onFailure }
                            cookiePolicy={ 'single_host_origin' }
                            className='sign-in-accs-google'
                            isSignedIn={ true }
                            theme="dark"
                        />
                        <button className='sign-in-accs-playgames' onClick={ showSnack }>Sign In with Play Games <FontAwesomeIcon icon={ faGamepad } className='sign-up-accs-icon' /></button>
                    </div>
                    <div className='no-acc'>
                        Don't have an account?
                        <Link
                            to='/game-room/signup'
                            style={ { color: '#D95BA0', textDecoration: 'none' } }
                        >
                            Sign Up Instead
                        </Link>
                    </div>
                </div > :


                    <div className='sign-in-con'>
                        <div className='welcome-sign-in'>Welcome { name }</div>
                        <div className='logout-sign-in'><GoogleLogout
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
        </>
    );
};

export default SignIn;