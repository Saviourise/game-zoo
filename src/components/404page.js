import { Link } from 'react-router-dom'

function Page404() {
    return (
        <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                backgroundColor: '#111',
                width: '100%',
                height: '100vh',
                padding: '0px 20px',
            }}
        >
            <p style={{
                    fontSize: 100,
                    color: '#D95BA0',
                    marginBottom: -100,
                    fontWeight: 900,
                }}
            >
                404
            </p>
            <p style={{
                    fontSize: 20,
                    color: '#fff',
                    marginBottom: 0,
                    textAlign: 'center',
                }}
            >
                <span
                    style={{
                        color: '#D95BA0', 
                        paddingRight: 5,
                    }}
                >
                    ERROR: 
                </span> 
                The page you are looking for is either invalid or does not exist!
            </p>
            <Link
                to='/'
                style={{
                    backgroundColor: '#D95BA0',
                    color: '#fff',
                    width: 150,
                    height: 40,
                    borderRadius: 5,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textDecoration: 'none',
                }}
            >
                Go Home
            </Link>
        </div>
    )
}

export default Page404;