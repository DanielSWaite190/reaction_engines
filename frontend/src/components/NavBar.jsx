import { Link } from 'react-router-dom';

function NavBar() {
    return (
    <nav>
        <Link to='/' className='link-btn-user'>Home</Link>
        <Link to='/new' className='link-btn-user'>New</Link>
      </nav>
    )
}

export default NavBar;