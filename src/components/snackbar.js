import './snackbar.css'

const SnackBar = (props) =>
{
    return (
        <div id="snackbar" className='show'>{props.message}</div>
    )
}

export default SnackBar;